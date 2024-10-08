import IUserProfile from "@/app/[locale]/_models/userProfile";
import profileLoader from "../../axios/profileLoader";
import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";

export interface IProfileState {
    user: IUserProfile
}

const initialState: IProfileState = {
  user: {} as IUserProfile
};

export const getProfile = createAsyncThunk<
  IUserProfile,
  string | null,
  { rejectValue: string }
>("getProfile", async (token: string | null, { rejectWithValue }) => {
    if(!token) return rejectWithValue("User is not logged in");
  try {
    const userProfile = await profileLoader(token);
    console.log(userProfile);
    
    return userProfile;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return rejectWithValue("Failed to load profile");
  }
});

export const profileSlice: Slice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      console.error(action.payload);
    });
  },
});

export default profileSlice.reducer;
