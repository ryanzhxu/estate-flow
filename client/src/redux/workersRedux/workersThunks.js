import { createAsyncThunk } from '@reduxjs/toolkit';
import workersService from './workersService';

export const getWorkersAsync = createAsyncThunk('getWorkers', async () => {
  return await workersService.getWorkers();
});

export const addWorkerAsync = createAsyncThunk(
  'addWorkers',
  async ({ name, email, phone, address, hRate, trades, pCode, imageUrlInput }) => {
    return await workersService.addWorker({ name, email, phone, address, hRate, trades, pCode, imageUrlInput });
  }
);

export const deleteWorkerAsync = createAsyncThunk('deleteWorker', async (_id) => {
  return await workersService.deleteWorker({ _id });
});

export const getDetailAsync = createAsyncThunk('getDetail', async (_id) => {
  return await workersService.getWorker({ _id });
});

export const updateAsync = createAsyncThunk(
  'updateAsync',
  async ({ _id, name, email, phone, address, hRate, trades, pCode, imageURL }) => {
    return await workersService.updateWorker({ _id, name, email, phone, address, hRate, trades, pCode, imageURL });
  }
);

export const sortFilterWorkerAsync = createAsyncThunk('getSortFilter', async ({ tradeType, sortOption }) => {
  const result = await workersService.getSortFilter({ tradeType, sortOption });
  return result;
});
