"use client";

import React, { useState, useEffect } from "react";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { getDeposits, getUsers } from "@/lib/requests";
import { tableStyle } from "../Users/tableStyle";
import { HashLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { Deposit } from "./types";
import { columnsDeposits } from "./DepositsColumns";

const CustomLoadingOverlay = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-3xl bg-[#17181e]">
      <HashLoader color="rgb(139, 92, 246)" size={130} />
    </div>
  );
};

const DepositsTable: React.FC = () => {
  const [deposits, setDeposits] = useState<Deposit[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {

        const fetchedDeposits = await getDeposits();
        if (!fetchedDeposits) {
          setError(true);
        }
        setDeposits(fetchedDeposits);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, []);


  return (
    <div
      className="w-full rounded-xl h-full"
      id="container-users"
    >
      <DataGrid
        rows={deposits}
        columns={columnsDeposits}
        localeText={{
          noRowsLabel: error ? "Deposits upload error" : "No deposits",
        }}
        loading={loading}
        slots={{
          loadingOverlay: CustomLoadingOverlay,
        }}
        disableRowSelectionOnClick={true}
        disableColumnResize={true}
        disableColumnMenu={true}
        pagination
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 100 },
          },
        }}
        sx={tableStyle}
        disableVirtualization={true}
      />
    </div>
  );
};

export default DepositsTable;
