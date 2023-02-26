import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";

import { theme } from './configs/theme';

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
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
