import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "http://localhost:4500/upgrades";

export interface AdditionalService {
  _id: string;
  serviceId: string;
  title: {
    ar: string;
    en: string;
  };
  price: number;
  deliveryTime: number;
  createdAt: string;
  checked: boolean;
}

interface AdditionalServiceState {
  checkedItems: AdditionalService[];
  upgrades: AdditionalService[];
  loading: boolean;
  error: string | null;
}

const initialState: AdditionalServiceState = {
  checkedItems: [],
  upgrades: [],
  loading: false,
  error: null,
};

const initialStateWithLocalStorage: AdditionalServiceState = {
  ...initialState,
};

export const fetchUpgradesById = createAsyncThunk<
  AdditionalService[],
  string,
  { rejectValue: string }
>("upgrades/fetchById", async (serviceId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${base_url}/${serviceId}`);
    const upgradesData = response.data;
    return upgradesData.upgrades;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch upgrades";
    return rejectWithValue(errorMessage);
  }
});

const additionalServicesSlice = createSlice({
  name: "additionalServices",
  initialState: initialStateWithLocalStorage,
  reducers: {
    addAdditionalService: (state, action: PayloadAction<AdditionalService>) => {
      const isAlreadyAdded = state.checkedItems.find(
        (i) => i._id == action.payload._id
      );
      if (!isAlreadyAdded) state.checkedItems.push(action.payload);
    },
    removeAdditionalService: (
      state,
      action: PayloadAction<AdditionalService>
    ) => {
      state.checkedItems = state.checkedItems.filter(
        (i) => i._id != action.payload._id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpgradesById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUpgradesById.fulfilled,
        (state, action: PayloadAction<AdditionalService[]>) => {
          state.loading = false;
          state.upgrades = action.payload;
        }
      )
      .addCase(fetchUpgradesById.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to fetch upgrades";
      });
  },
});

export const { addAdditionalService, removeAdditionalService } =
  additionalServicesSlice.actions;

export default additionalServicesSlice.reducer;
