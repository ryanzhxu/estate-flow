import {createSlice} from "@reduxjs/toolkit";
import {getDetailAsync, updateAsync} from "./workersThunks";

const initialState = {
    isDetailOpen: false,
    isUpdateOpen: false,
    isAddOpen: false,
    selected:{}
}
const workerDetailReducer = createSlice({
    name : 'workerDetail',
    initialState,
    reducers:{// 同步
        openDetail:(state, action) => {
            state.isDetailOpen = true;
        },
        closeDetail:(state, action) => {
            state.isDetailOpen = false;
        },
        openUpdate:(state, action) => {
            state.isUpdateOpen = true;
        },
        closeUpdate:(state, action) => {
            state.isUpdateOpen = false;
        },
        openAddForm:(state, action) => {
            state.isAddOpen = true;
        },
        closeAddForm:(state, action) => {
            state.isAddOpen = false;
        }


    },
    extraReducers: (builder) => {//异步
        builder
            //getDetailAsync
            .addCase(getDetailAsync.pending, (state) => {
                state.error = null;
            })
            .addCase(getDetailAsync.fulfilled, (state, action) => {
                state.selected = action.payload;
            })
            .addCase(getDetailAsync.rejected, (state, action) => {
                state.error = "fail to getWorker";
            })

            //updateAsync
            .addCase(updateAsync.pending, (state) => {
                state.error = null;
            })
            .addCase(updateAsync.fulfilled, (state, action) => {
                state.selected = action.payload;
            })
            .addCase(updateAsync.rejected, (state, action) => {
                state.error = "fail to getCars";
            })

        ;
    }
})

export default workerDetailReducer.reducer;

export const {openDetail, closeDetail, openUpdate, closeUpdate, openAddForm, closeAddForm} = workerDetailReducer.actions;
export const isDetailOpen = (state) => state.workerDetails.isDetailOpen;
export const isUpdateOpen = (state) => state.workerDetails.isUpdateOpen;
export const expSelectedWorker = (state) => state.workerDetails.selected;

export const isADDOpen = (state) => state.workerDetails.isAddOpen;

