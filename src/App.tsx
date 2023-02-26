import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";

import { theme } from './configs/theme';
import { CategoryCreate } from "./features/categories/CategoryCreate";
import { CategoryEdit } from "./features/categories/CategoryEdit";
import { CategoryList } from "./features/categories/CategoryList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="main"
        sx={{
          height: '100vh',
          backgroundColor: (theme) => theme.palette.grey[900]
        }}
      >
        <Header />

        <Layout>
          <Typography variant="h1" component="h1">
            Teste olá mundo!
          </Typography>

          <Routes>
            <Route path="/" element={<CategoryList />}/>
            <Route path="/categories" element={<CategoryList />}/>
            <Route path="/categories/create" element={<CategoryCreate />}/>
            <Route path="/categories/edit/:id" element={<CategoryEdit />}/>

            <Route path="*" element={<Box>
                <Typography variant="h1" component="h1">
                  404 - Página não encontrada
                </Typography>
              </Box>}
            />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
