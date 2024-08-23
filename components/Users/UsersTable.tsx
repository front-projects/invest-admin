"use client";

import React, { useState, useEffect } from "react";
import { DataGrid, GridPaginationModel, GridRowParams } from "@mui/x-data-grid";
import { getUsers } from "@/lib/requests";
import { UserForTable } from "./types";
import { tableStyle } from "./tableStyle";
import { HashLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { columnsUsers } from "./columnsUsers";
import Button from "../ui/Button";

const CustomLoadingOverlay = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-3xl bg-[#17181e]">
      <HashLoader color="rgb(139, 92, 246)" size={130} />
    </div>
  );
};

const UsersTable: React.FC = () => {
  const [users, setUsers] = useState<UserForTable[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(100);
  const [rowCount, setRowCount] = useState<number>(0);
  const router = useRouter();
  const [search, setSearch] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedUsers = await getUsers({ page: page, pageSize: pageSize });
        if (!fetchedUsers) {
          setError(true);
        }
        setUsers(fetchedUsers ? fetchedUsers.users : []);
        setRowCount(fetchedUsers ? fetchedUsers.totalUsers : 0);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [page]);

  const handlePageChange = (params: GridPaginationModel) => {
    setPage(params.page);
  };
  const handleRowClick = (params: GridRowParams) => {
    router.push(`/menu/users/${params.row.id}`);
  };

  const submitSearch = () => {
    if (search) {
      router.push(`/menu/users/${search}`);
    }
  };

  return (
    <>
      <div
        className="w-1/2 max-xl:w-2/3 max-lg:w-[80%] max-sm:w-full rounded-xl h-full flex flex-col"
        id="container-users"
      >
        <div className="flex gap-2 mb-4 w-full items-center justify-center px-2">
          <input
            placeholder="Search..."
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button onClick={submitSearch}>Search</Button>
        </div>
        <DataGrid
          rows={users}
          columns={columnsUsers}
          rowCount={rowCount}
          localeText={{
            noRowsLabel: error ? "Users upload error" : "No users",
          }}
          loading={loading}
          slots={{
            loadingOverlay: CustomLoadingOverlay,
          }}
          disableRowSelectionOnClick={true}
          disableColumnResize={true}
          disableColumnMenu={true}
          pagination
          autosizeOnMount={true}
          paginationMode="server"
          paginationModel={{ page, pageSize }}
          onPaginationModelChange={(params) => {
            handlePageChange(params);
          }}
          sx={tableStyle}
          onRowClick={handleRowClick}
          disableVirtualization={true}
        />
      </div>
    </>
  );
};

export default UsersTable;
