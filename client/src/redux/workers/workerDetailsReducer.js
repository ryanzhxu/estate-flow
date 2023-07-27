import { createSlice } from '@reduxjs/toolkit';
import { getWorkerAsync, updateWorkerAsync } from './thunks';

const initialState = {
  isDetailOpen: false,
  isUpdateOpen: false,
  isAddOpen: false,
  selected: {},
};
const workerDetailReducer = createSlice({
  name: 'workerDetail',
  initialState,
  reducers: {
    openDetail: (state, action) => {
      state.isDetailOpen = true;
    },
    closeDetail: (state, action) => {
      state.isDetailOpen = false;
    },
    openUpdate: (state, action) => {
      state.isUpdateOpen = true;
    },
    closeUpdate: (state, action) => {
      state.isUpdateOpen = false;
    },
    openAddForm: (state, action) => {
      state.isAddOpen = true;
    },
    closeAddForm: (state, action) => {
      state.isAddOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWorkerAsync.pending, (state) => {
        state.error = null;
      })
      .addCase(getWorkerAsync.fulfilled, (state, action) => {
        state.selected = action.payload;
      })
      .addCase(getWorkerAsync.rejected, (state, action) => {
        state.error = 'fail to getWorker';
      })

      .addCase(updateWorkerAsync.pending, (state) => {
        state.error = null;
      })
      .addCase(updateWorkerAsync.fulfilled, (state, action) => {
        state.selected = action.payload;
      })
      .addCase(updateWorkerAsync.rejected, (state, action) => {
        state.error = 'fail to getCars';
      });
  },
});

export default workerDetailReducer.reducer;

export const { openDetail, closeDetail, openUpdate, closeUpdate, openAddForm, closeAddForm } =
  workerDetailReducer.actions;

export const isDetailOpen = (state) => state.workerDetails.isDetailOpen;
export const isUpdateOpen = (state) => state.workerDetails.isUpdateOpen;
export const expSelectedWorker = (state) => state.workerDetails.selected;
export const isADDOpen = (state) => state.workerDetails.isAddOpen;
