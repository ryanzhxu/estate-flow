import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import PropertyService from './service';

export const getPropertiesAsync = createAsyncThunk(actionTypes.GET_PROPERTIES, async () => {
  return await PropertyService.getProperties();
});

export const getPropertyAsync = createAsyncThunk(actionTypes.GET_PROPERTY, async (_id) => {
  return await PropertyService.getProperty(_id);
});

export const getPropertiesForDashboardAsync = createAsyncThunk(actionTypes.GET_PROPERTY_DASHBOARD, async () => {
  return await PropertyService.getPropertiesForDashboard();
});

export const addPropertyAsync = createAsyncThunk(actionTypes.ADD_PROPERTY, async (property) => {
  return await PropertyService.addProperty(property);
});

export const updatePropertyAsync = createAsyncThunk(actionTypes.UPDATE_PROPERTY, async (property) => {
  return await PropertyService.updateProperty(property);
});

export const deletePropertyAsync = createAsyncThunk(actionTypes.DELETE_PROPERTY, async (_id) => {
  return await PropertyService.deleteProperty(_id);
});
