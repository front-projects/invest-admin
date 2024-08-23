import { GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";

export const columnsUsers: GridColDef[] | any[] = [
  //   { field: "id", headerName: "ID", minWidth: 140 },
  { field: "login", headerName: "Login", flex: 1, minWidth:200 },
  { field: "name", headerName: "Name", flex: 1, minWidth:200},
  {
    field: "createdAt",
    headerName: "Registration",
    flex:1,
    minWidth:200,
    renderCell: (params) => dayjs(params.value).format("DD/MM/YYYY"),
  },
  {
    field: "upperReferralLogin",
    headerName: "Referral",
    flex:1,
    minWidth:200,
    renderCell: (params) => (
      <div onClick={(e) => e.stopPropagation()}>{params.value}</div>
    ),
  },
  {
    field: "ipAddress",
    headerName: "IP",
    flex:1,
    minWidth:200,
    renderCell: (params) => (
      <div onClick={(e) => e.stopPropagation()}>{params.value}</div>
    ),
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
