import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isDTLOpen: false,
    isAddOpen: false,
    selected:{}
}

const modalWorker = createSlice({
    name : 'modal',
    initialState,
    reducers:{
        openModal:(state, action) => {
            state.isDTLOpen = true;
        },
        closeModal:(state, action) => {
            state.isDTLOpen = false;
        },



        openAddModal:(state, action) => {
            state.isAddOpen = true;
        },
        closeAddModal:(state, action) => {
            state.isAddOpen = false;
        },



        selectedWorker:(state, action) => {
            console.log("the name is " + action.payload.name)
            state.selected =  action.payload;
        }

    }
})

export const {openModal, closeModal, selectedWorker, openAddModal, closeAddModal} = modalWorker.actions;//

export default modalWorker.reducer;
//modalReducer-> store.js

export const isDetailOpen = (state) => state.modal.isDTLOpen;

export const isADDOpen = (state) => state.modal.isAddOpen;

export const expSelectedWorker = (state) => state.modal.selected;



// ref:
// https://www.youtube.com/watch?v=eIA_rk3qE3A&list=PLnHJACx3NwAcSgxrUwSzLBi681WdYmwsG&index=16