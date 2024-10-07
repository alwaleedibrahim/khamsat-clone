import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Slice,
} from "@reduxjs/toolkit";
import ICategory from "@/app/[locale]/_models/category";
import ISubCategory from "@/app/[locale]/_models/subcategory";
import categoriesLoader from "../../axios/categoryLoader";
import subcategoriesLoader from "../../axios/subCategoryLoader";

export interface ICategoryState {
  categories: ICategory[];
  subcategories: ISubCategory[];
  selectedCategory: string;
}

const initialState: ICategoryState = {
  categories: [],
  subcategories: [],
  selectedCategory: ''
};

export const getCategory = createAsyncThunk("getCategories", async () => {
  try {
    const categories: ICategory[] = await categoriesLoader();
    return categories;
  } catch (err) {
    return err;
  }
});

export const getSubCategory = createAsyncThunk("getSubCategories", async (categoryName:string) => {
    try {
      const subcategories: ISubCategory[] = await subcategoriesLoader(categoryName);
      return subcategories;
    } catch (err) {
      return err;
    }
  });

export const categorySlice: Slice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    selectCategory: (state, action) => {        
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(getSubCategory.fulfilled, (state, action) => {
      state.subcategories = action.payload;
    });
  },
});


export const { selectCategory} = categorySlice.actions;
export default categorySlice.reducer;