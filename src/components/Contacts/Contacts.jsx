import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { rows, columns } from "./data"; 
export default function Contacts() {
  return (
    
      <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}

        //   slotProps={{
        //   toolbar: {
        //     showQuickFilter: true,
        //     quickFilterProps: { debounceMs: 500 },
        //   },
        // }}

          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
  );
}
