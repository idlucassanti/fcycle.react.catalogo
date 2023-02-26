import { Box, Container } from "@mui/material";

export function Layout({children} : any) {
  return(
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          mt: 4,
          mb: 4
        }}
      >
        {children}
      </Container>
    </Box>
  );
}