import { createSlice } from "@reduxjs/toolkit";

interface Category {
  id: string;
  name: string;
  description: string | null;
  is_active: boolean;
  creted_at: string;
  updated_at: string;
  deleted_at: string | null;
}

const category : Category = {
  id: "1",
  name: "Lucas Santi 1",
  description: "Lorem ipsum 1",
  is_active: true,
  deleted_at: null,
  creted_at: "",
  updated_at: ""
}

export const initialState = [
  category,
  {...category, id: "2", name: "Lucas Santi 2"},
  {...category, id: "3", name: "Lucas Santi 3"},
  {...category, id: "4", name: "Lucas Santi 4"},
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

export default categoriesSlice.reducer;