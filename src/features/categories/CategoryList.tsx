import { Box, Button, IconButton, Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./categorySlice";
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';


export function CategoryList() {

  const categories = useAppSelector(selectCategories);

  const componentProps = {
    toolbar: {
      showQuickFilter: true,
      quickFilterProps: { debounceMs: 500 },
    },
  }

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
      flex: 1,
      renderCell: renderNameCell
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

  function renderNameCell(row: GridRenderCellParams) {
    return (
      <Link
        style={{textDecoration: "none"}}
        to={`/categories/edit/${row.id}`}
      >
        <Typography color="primary">
          {row.value}
        </Typography>
      </Link>
    );
  }

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

      <Box component="div" style={{ height: 600, width: '100%' }}>
        <DataGrid 
          // checkboxSelection={true}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          componentsProps={componentProps}
          disableColumnFilter={true}
          disableColumnSelector={true}
          disableDensitySelector={true}
          disableSelectionOnClick={true}
          rows={rows} 
          rowsPerPageOptions={[2, 10, 20, 50, 100]}
        />
      </Box>
    </Box>
  );
}