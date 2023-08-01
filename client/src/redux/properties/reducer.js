import { createSlice } from '@reduxjs/toolkit';
import {getPropertiesAsync, getPropertiesForDashboardAsync, getPropertyAsync} from './thunks';

const INITIAL_STATE = {
  properties: [],
  propertySelected: null,
};

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPropertiesAsync.fulfilled, (state, action) => {
        state.properties = action.payload;
      })
      .addCase(getPropertyAsync.fulfilled, (state, action) => {
        state.propertySelected = action.payload;
      })
      .addCase(getPropertiesForDashboardAsync.fulfilled, (state, action) => {
        state.properties = action.payload;
      });
  },
});

export default propertiesSlice.reducer;
