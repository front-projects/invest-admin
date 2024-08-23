import { GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";

export const columnsDeposits: GridColDef[] | any[] = [
  //   { field: "id", headerName: "ID", minWidth: 140 },
  { field: "email", headerName: "Email", minWidth: 260 },
  {
    field: "transactionAmount",
    headerName: "USD",
    minWidth: 80,
    renderCell: (params) => params.value.toFixed(2) + " $",
  },

  { field: "currency", headerName: "Currency", minWidth: 120 },
  {
    field: "transactionAmountInCrypto",
    headerName: "Amount",
    minWidth: 140,
    renderCell: (params) => params.value && params.value.toFixed(10),
  },
  { field: "cryptoAddress", headerName: "cryptoAddress", minWidth: 320 },

  {
    field: "createdAt",
    headerName: "Date",
    minWidth: 200,
    renderCell: (params) => dayjs(params.value).format("hh:mm:ss - DD/MM/YYYY"),
  },
  {
    field: "withdrawStatus",
    headerName: "Status",
    minWidth: 120,
    renderCell: (params) => <div className={params.value == 'APPROVED' ? 'text-green-500' : params.value == 'REJECTED' ? 'text-red-600' : ""}>{params.value}</div>
  },

  // {
  //   field: "balanceAmount",
  //   headerName: "Balance",
  //   minWidth: 140,
  //   renderCell: (params) => params.value.toFixed(2) + " $",
  // },
  // {
  //   field: "investModels",
  //   headerName: "Level 1",
  //   minWidth: 140,
  //   renderCell: (params: any) => params.row.investModels[0].id,
  // },
];
