import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./categorySlice";

export function CategoryList() {

  const categories = useAppSelector(selectCategories);


  return (
    <Box>
      <Typography
        variant="h1"
        component="h1"
      >
        Category List
      </Typography>

      <Box component="div">
          {
            categories.map((category, i) => <Typography key={category.id}>{category.name}</Typography>)
          }
        </Box>
    </Box>
  );
}