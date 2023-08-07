import { createSlice } from '@reduxjs/toolkit';
import { getWorkersAsync, getWorkerAsync } from './thunks';

const INITIAL_STATE = {
  workers: [],
  workerSelected: null,
  error: null,
};

const workersSlice = createSlice({
  name: 'workers',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWorkersAsync.fulfilled, (state, action) => {
        state.workers = action.payload;
      })
      .addCase(getWorkerAsync.fulfilled, (state, action) => {
        state.workerSelected = action.payload;
      });
  },
});

export default workersSlice.reducer;
