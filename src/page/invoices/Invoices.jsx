import React from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { rows , columns } from './data';

export default function Invoices() {
  return (
    <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
        <DataGrid
        checkboxSelection
          slots={{
            toolbar: GridToolbar,
          }}

      

          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
  )
}
