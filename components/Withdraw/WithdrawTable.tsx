"use client";

import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getWithdraw, withdrawStatusUpdate } from "@/lib/requests";
import { tableStyle } from "../Users/tableStyle";
import { HashLoader } from "react-spinners";
import { Withdraw } from "./types";
import { columnsDeposits } from "./withdrawColumns";

import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { GoCodeReview } from "react-icons/go";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

const CustomLoadingOverlay = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-3xl bg-[#17181e]">
      <HashLoader color="rgb(139, 92, 246)" size={130} />
    </div>
  );
};

const WithdrawTable: React.FC = () => {
  const [withdraw, setWithdraw] = useState<Withdraw[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modal, setModal] = useState<[Withdraw, string] | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const fetchedWithdraw = await getWithdraw();
      if (!fetchedWithdraw) {
        setError(true);
      } else {
        setWithdraw(fetchedWithdraw);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateWithdrawStatus = async (obj: Withdraw, status: string) => {
    const response = await withdrawStatusUpdate({
      ...obj,
      withdrawStatus: status,
    });
    if (response) {
      fetchData();
    }
  };

  const renderActionCell = (
    params: any,
    action: (obj: Withdraw) => void,
    Icon: any,
    colorClass: string
  ) => {
    return (
      (params.row.withdrawStatus === "PENDING" ||
        params.row.withdrawStatus === "REVIEWING") && (
        <div
          className="w-full h-full flex items-center justify-center text-[180%]"
          onClick={() => action(params.row)}
        >
          <Icon className={`text-[120%] ${colorClass}`} />
        </div>
      )
    );
  };

  const updatedColumns = [
    ...columnsDeposits,
    {
      field: "approve",
      headerName: "Approve",
      width: 100,
      renderCell: (params: any) =>
        renderActionCell(
          params,
          (row) => setModal([row, "APPROVED"]),
          FaCheckCircle,
          "text-green-500 text-[100%]"
        ),
    },
    {
      field: "reject",
      headerName: "Reject",
      width: 100,
      renderCell: (params: any) =>
        renderActionCell(
          params,
          (row) => setModal([row, "REJECTED"]),
          IoMdCloseCircle,
          "text-red-400"
        ),
    },
    {
      field: "review",
      headerName: "Review",
      width: 100,
      renderCell: (params: any) =>
        renderActionCell(
          params,
          (row) => updateWithdrawStatus(row, "REVIEWING"),
          GoCodeReview,
          "text-white"
        ),
    },
  ];

  const updatingHandler = async (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    if (modal) {
      await updateWithdrawStatus(modal[0], modal[1]);
      setModal(null);
    }
  };

  return (
    <>
      <div className="w-full rounded-xl h-full" id="container-users">
        <DataGrid
          rows={withdraw}
          columns={updatedColumns}
          localeText={{
            noRowsLabel: error ? "Withdraws upload error" : "No withdraw",
          }}
          loading={loading}
          slots={{
            loadingOverlay: CustomLoadingOverlay,
          }}
          disableRowSelectionOnClick={true}
          disableColumnResize={true}
          disableColumnMenu={true}
          pagination
          // onRowClick={(params)=> updateWithdrawStatus(params.row,'PENDING')}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 100 },
            },
          }}
          sx={{ ...tableStyle, fontSize: "12px" }}
          disableVirtualization={true}
        />
      </div>
      <Modal show={modal} onClose={() => setModal(null)}>
        <div className="text-center flex flex-col gap-2">
          <p>
            Do you realy want to{" "}
            {modal && modal[1] == "APPROVED" ? "approve" : "reject"}
          </p>
          <p>request from {modal && modal[0].email}</p>
          <p>Amount - {modal && modal[0].transactionAmount} $</p>
          <div className="flex w-full items-center gap-2">
            <Button className="w-1/2" onClick={updatingHandler}>
              Ok
            </Button>
            <div
              onClick={()=> setModal(null)}
              className="rounded-[8px] p-2 w-1/2 text-center border-2 
              cursor-pointer hover:bg-gray-400/20 shadow-xl "
            >
              Cancel
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default WithdrawTable;
