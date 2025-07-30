import React from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { rows , columns } from './data';
import Header from '../../components/Header/Header';

export default function Invoices() {
  return (
    <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />
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
