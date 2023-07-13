import {createSlice, nanoid} from "@reduxjs/toolkit";
import {addWorkerAsync, deleteWorkerAsync, getWorkersAsync, sortFilterWorkerAsync} from "./workersThunks";

const INITIAL_STATE  = {
    list: [],
    error: null
}

const workersSlice = createSlice({
    name: 'workers',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //getWorkersAsync
            .addCase(getWorkersAsync.pending, (state) => {
                state.error = null;
            })
            .addCase(getWorkersAsync.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(getWorkersAsync.rejected, (state, action) => {
                state.error = "fail to getWorkers";
            })

            //addWorkerAsync
            .addCase(addWorkerAsync.pending, (state) => {
                state.error = null;
            })
            .addCase(addWorkerAsync.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(addWorkerAsync.rejected, (state, action) => {
                state.error = "fail to addWorker";
            })

            //deleteWorkerAsync
            .addCase(deleteWorkerAsync.pending, (state) => {
                state.error = null;
            })
            .addCase(deleteWorkerAsync.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(deleteWorkerAsync.rejected, (state, action) => {
                state.error = "fail to deleteWorker";
            })

            //sortFilterWorkerAsync
            .addCase(sortFilterWorkerAsync.pending, (state) => {
                state.error = null;
            })
            .addCase(sortFilterWorkerAsync.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(sortFilterWorkerAsync.rejected, (state, action) => {
                state.error = "fail to deleteWorker";
            })

    }
});
export default workersSlice.reducer;