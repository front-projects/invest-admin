export const tableStyle = {
    width: "100%",
    height: "100%",
    overflow:"auto",
  "& .MuiDataGrid-row": {
    backgroundColor: "inherit",
    border: "none",
    "&:hover": {
      backgroundColor: "rgba(139, 92, 246,.1)",
      cursor: "pointer",
    },
    ":first-of-type": {
      borderTop:'none'
    },
  },
  "& .MuiDataGrid-cell": {
    color: "white",
    outline: "none",
    "&:focus": {
      outline: "none",
    },
    "&:focus-within": {
      outline: "none",
    },
  },
  ".MuiDataGrid-filler":{
    backgroundColor: "#17181e",
    color: "white",
  },

  "& .MuiDataGrid-footerContainer": {
    backgroundColor: "#8B5CF6",
    color: "white",
    border: "none",
  },
  "& .MuiTablePagination-root": {
    backgroundColor: "#8B5CF6",
    color: "white",
  },
  "& .MuiDataGrid-overlay": {
    backgroundColor: "#17181e",
    color: "white",
  },
  "& .MuiDataGrid-noRowsOverlay": {
    backgroundColor: "#17181e",
    color: "white",
  },
 
  "& .MuiDataGrid-loadingOverlay": {
    backgroundColor: "#17181e",
    color: "white",
  },
 
};
