import { RootState } from '@/stores/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GlobalSliceState {
  globalValue: string;
}

const initialState: GlobalSliceState = {
  globalValue: '',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setGlobalValue: (state: GlobalSliceState, action: PayloadAction<string>) => {
      state.globalValue = action.payload;
    },
  },
});

export const { setGlobalValue } = globalSlice.actions;

export const selectGlobalValue = (state: RootState) => state.global.globalValue;

export const globalReducer = globalSlice.reducer;
