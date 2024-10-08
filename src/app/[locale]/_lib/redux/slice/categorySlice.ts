import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";
import ICategory from "@/app/[locale]/_models/category";
import ISubCategory from "@/app/[locale]/_models/subcategory";
import categoriesLoader from "../../axios/categoryLoader";
import subcategoriesLoader from "../../axios/subCategoryLoader";

export interface ICategoryState {
  categories: ICategory[];
  subcategories: ISubCategory[];
  selectedCategory: string;
  selectedSubCategory: string;
}

const initialState: ICategoryState = {
  categories: [],
  subcategories: [],
  selectedCategory: "",
  selectedSubCategory: "",
};

export const getCategory = createAsyncThunk<
  ICategory[],
  void,
  { rejectValue: string }
>("getCategories", async (_, { rejectWithValue }) => {
  try {
    const categories: ICategory[] = await categoriesLoader();
    return categories;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return rejectWithValue("Failed to load categories");
  }
});

export const getSubCategory = createAsyncThunk<
  ISubCategory[],
  string,
  { rejectValue: string }
>("getSubCategories", async (categoryName: string, { rejectWithValue }) => {
  try {
    const subcategories: ISubCategory[] = await subcategoriesLoader(
      categoryName
    );
    return subcategories;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return rejectWithValue("Failed to load categories");
  }
});

export const categorySlice: Slice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    selectSubCategory: (state, action) => {
      state.selectedSubCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      console.error(action.payload);
    });
    builder.addCase(getSubCategory.fulfilled, (state, action) => {
      state.subcategories = action.payload;
    });
    builder.addCase(getSubCategory.rejected, (state, action) => {
      console.error(action.payload);
    });
  },
});

export const { selectCategory, selectSubCategory } = categorySlice.actions;
export default categorySlice.reducer;
