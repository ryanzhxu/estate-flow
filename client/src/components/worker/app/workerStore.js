import {configureStore} from "@reduxjs/toolkit";
import workersReducer from "../workerSlice";
import modalReducer from "../modalWorker";


export const workerStore = configureStore({
    reducer: {
        workers: workersReducer,
        modal: modalReducer
    }
});