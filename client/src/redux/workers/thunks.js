import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import WorkerService from './service';

export const getWorkersAsync = createAsyncThunk(actionTypes.GET_WORKERS, async () => {
  return await WorkerService.getWorkers();
});

export const getWorkerAsync = createAsyncThunk(actionTypes.GET_WORKER, async (_id) => {
  return await WorkerService.getWorker(_id);
});

export const addWorkerAsync = createAsyncThunk(actionTypes.ADD_WORKER, async (worker) => {
  return await WorkerService.addWorker(worker);
});

export const updateWorkerAsync = createAsyncThunk(actionTypes.UPDATE_WORKER, async (worker) => {
  return await WorkerService.updateWorker(worker);
});

export const deleteWorkerAsync = createAsyncThunk(actionTypes.DELETE_WORKER, async (_id) => {
  return await WorkerService.deleteWorker(_id);
});

export const sortFilterWorkerAsync = createAsyncThunk('getSortFilter', async ({ tradeType, sortOption }) => {
  const result = await WorkerService.getSortFilter({ tradeType, sortOption });
  return result;
});
