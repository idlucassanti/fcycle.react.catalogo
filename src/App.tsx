import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";

import { theme } from './configs/theme';

function About() {
  return (
    <h1>Tela About</h1>
  );
}

function Home() {
  return (
    <h1>Tela Home</h1>
  );
}

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
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
