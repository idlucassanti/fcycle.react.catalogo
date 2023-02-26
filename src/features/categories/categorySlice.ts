import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Category {
  id: string;
  name: string;
  description: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

const category : Category = {
  id: "1",
  name: "Lucas Santi 1",
  description: "Lorem ipsum 1",
  is_active: true,
  deleted_at: null,
  created_at: "1995-12-17T03:24:00",
  updated_at: "1995-12-17T03:24:00"
}

export const initialState = [
  category,
  {...category, id: "2", name: "Lucas Santi 2", is_active: false, create_at: "1995-12-17T03:24:00" },
  {...category, id: "3", name: "Lucas Santi 3", is_active: false, create_at: "1995-12-17T03:24:00"},
  {...category, id: "4", name: "Lucas Santi 4", is_active: true, create_at: "1995-12-17T03:24:00"},
];


const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(){},
    updateCategory(){},
    deleteCategory(){},
  }
});

// Selectors

export function selectCategories(state: RootState) {
  return state.categories
}

export default categoriesSlice.reducer;