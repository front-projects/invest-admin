import { GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";

export const columnsDeposits: GridColDef[] | any[] = [
  //   { field: "id", headerName: "ID", minWidth: 140 },
  { field: "contactEmail", headerName: "Email", minWidth: 260, flex: 1 },
  { field: "transactionId", headerName: "ID", flex: 1, minWidth: 200 },
  { field: "address", headerName: "Adress", flex: 2, minWidth: 400 },
  { field: "currency", headerName: "Currency", flex: 1, minWidth: 200 },
  {
    field: "transactionAmount",
    headerName: "Amount",
    flex: 1,
    minWidth: 200,
    renderCell: (params) => params.value.toFixed(2) + " $",
  },
  {
    field: "createdAt",
    headerName: "Date",
    flex: 1,
    minWidth: 200,
    renderCell: (params) => dayjs(params.value).format("DD/MM/YYYY - HH:mm:ss"),
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
