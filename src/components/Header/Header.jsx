import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'

export default function Header({title , subTitle}) {
    const theme = useTheme();
  return (
    <Box>
        <Typography
        sx={{color:theme.palette.info.light,
          fontWeight:"bold",
        }}
         variant="h5"
         >{title}</Typography>
        <Typography variant="body1">{subTitle}</Typography>
      </Box>
  )
}
