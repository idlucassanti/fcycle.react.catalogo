import { Box, Button, IconButton, Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./categorySlice";
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';


export function CategoryList() {

  const categories = useAppSelector(selectCategories);

  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    active: category.is_active,
    createAt: new Date(category.created_at).toLocaleDateString('pt-BR')
  }));
  
  const columns: GridColDef[] = [
    { 
      field: 'name', 
      headerName: 'Name', 
      flex: 1 
    },
    { 
      field: 'active', 
      headerName: 'Active', 
      flex: 1,
      type: "boolean",
      // renderCell: (row) => {
      //   console.log(row)

      //   return <span>{row.value ? 'Active' : 'Inactive'}</span>
      // }
      renderCell: renderIsActiveCell
    },
    { field: 'createAt', headerName: 'Create At', flex: 1 },
    { 
      field: 'id', 
      headerName: 'Actions', 
      flex: 1,
      renderCell: renderActionsCell
    }
  ];

  function renderIsActiveCell(row: GridRenderCellParams) {
    return <Typography color={row.value? "primary": "secondary"}>{row.value ? 'Active' : 'Inactive'}</Typography>
  }

  function renderActionsCell(row: GridRenderCellParams) {
    return (
      <IconButton
        color="secondary"
        onClick={() => console.log("clicked")}
        aria-label="delete"
      >
        <DeleteOutline />
      </IconButton>
    );
  }

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
      <Box display="flex" justifyContent="flex-end" >
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/categories/create"
          style={{marginBottom: "1rem"}}
        >
          New Category
        </Button>
      </Box>

      <Box component="div" style={{ height: 400, width: '100%' }}>
        <DataGrid 
          rowsPerPageOptions={[2, 10, 20, 50, 100]}
          rows={rows} 
          columns={columns}
          disableColumnFilter={true}
          disableColumnSelector={true}
          disableDensitySelector={true}
          // checkboxSelection={true}
          disableSelectionOnClick={true}
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
        />
      </Box>
    </Box>
  );
}