import {createAsyncThunk} from "@reduxjs/toolkit";
import workersService from "./workersService";

export const getWorkersAsync = createAsyncThunk(
    "getWorkers",
    async () => {
        return await workersService.getWorkers();
    }
);

export const addWorkerAsync = createAsyncThunk(
    "addWorkers",
    async({name, email, phone, address, hRate, trades, pCode, imageURL}) => {
        return await workersService.addWorker({name, email, phone, address, hRate, trades, pCode, imageURL});
    }
);

export const deleteWorkerAsync = createAsyncThunk(
    "deleteWorker",
    async(id) => {
        return await workersService.deleteWorker({id});
    }
);

export const getDetailAsync = createAsyncThunk(
    "getDetail",
    async(id) => {
        return await workersService.getWorker({id});
    }
);

export const updateAsync = createAsyncThunk(
    "updateAsync",
    async({id,name, email, phone, address, hRate, trades, pCode, imageURL}) => {
        return await workersService.updateWorker({id,name, email, phone, address, hRate, trades, pCode, imageURL});
    }
);

export const sortFilterWorkerAsync = createAsyncThunk(
    "getSortFilter",
    async({tradeType, sortOption}) => {
        const result = await workersService.getSortFilter({tradeType, sortOption});
        return result
    }
);