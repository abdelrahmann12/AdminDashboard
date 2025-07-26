import { DataGrid } from '@mui/x-data-grid';
import React from 'react'


const rows = [
  { id: 1, name: 'Data Grid', description: 'the Community version' },
  { id: 2, name: 'Data Grid Pro', description: 'the Pro version' },
  { id: 3, name: 'Data Grid Premium', description: 'the Premium version' },
];

const columns = [
  { field: 'col1', headerName: "ID"   },
  { field: 'col2', headerName: "Name"   },
  { field: 'col3', headerName: "Email"   },
  { field: 'col4', headerName: "Age"   },
  { field: 'col5', headerName: "Phne"   },
  { field: 'col6', headerName: "Access"   },
  
];



export default function Team() {
  return (
    <div>
       <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
    </div>
  )
}
