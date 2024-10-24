import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const base_url = 'http://localhost:4500/upgrades';

export interface AdditionalService {
    _id: string;
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
    checkedItems: { [key: string]: boolean };
    upgrades: AdditionalService[];
    loading: boolean;
    error: string | null;
}

const initialState: AdditionalServiceState = {
    checkedItems: {},
    upgrades: [],
    loading: false,
    error: null,
};

const loadCheckedItems = () => {
    const savedItems = localStorage.getItem('checkedItems');
    return savedItems ? JSON.parse(savedItems) : {};
};

const initialCheckedItems = loadCheckedItems();

const initialStateWithLocalStorage: AdditionalServiceState = {
    ...initialState,
    checkedItems: initialCheckedItems,
};

export const fetchUpgradesById = createAsyncThunk<AdditionalService[], string, { rejectValue: string }>(
    'upgrades/fetchById',
    async (serviceId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}/${serviceId}`);
            const upgradesData = response.data;
            return upgradesData.upgrades;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch upgrades';
            return rejectWithValue(errorMessage);
        }
    }
);

const additionalServicesSlice = createSlice({
    name: 'additionalServices',
    initialState: initialStateWithLocalStorage,
    reducers: {
        toggleService: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.checkedItems[id] = !state.checkedItems[id];

            localStorage.setItem('checkedItems', JSON.stringify(state.checkedItems));
        },
        setCheckedItems: (state, action: PayloadAction<{ [key: string]: boolean }>) => {
            state.checkedItems = action.payload;
            localStorage.setItem('checkedItems', JSON.stringify(state.checkedItems));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpgradesById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUpgradesById.fulfilled, (state, action: PayloadAction<AdditionalService[]>) => {
                state.loading = false;
                state.upgrades = action.payload;
            })
            .addCase(fetchUpgradesById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Failed to fetch upgrades';
            });
    },
});

export const { toggleService, setCheckedItems } = additionalServicesSlice.actions;

export default additionalServicesSlice.reducer;
