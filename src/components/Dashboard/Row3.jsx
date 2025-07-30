import { Box, Paper, Stack, Typography, useTheme } from '@mui/material';
import Pie from '../../page/piechart/Pie';
import React from 'react'
import Bar from '../../page/barchart/Bar';
import Geo from '../../page/geography/Geo';


export default function Row3() {
  const theme = useTheme();
  return (
    <Stack mt={3} flexWrap={"wrap"} direction={"row"} gap={1}>

      <Paper sx={{flexGrow : 1 ,minWidth: "400px", width:"33%"}}>
      <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
  
      <Pie isDashboard= {true}></Pie>
       <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{flexGrow : 1 ,minWidth: "400px" ,width:"33%"}}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
      <Bar isDashbord= {true}></Bar>

      </Paper>

      
      <Paper sx={{flexGrow : 1 ,minWidth: "400px", width:"33%"}}>
      <Geo isDashboard={true}></Geo>
      </Paper>
     
    </Stack>
  )
}
