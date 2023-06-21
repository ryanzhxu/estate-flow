import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import PropertyService from './service';

export const addPropertyAsync = createAsyncThunk(
    actionTypes.ADD_PROPERTY,
    async (property) => {
        return await PropertyService.addProperty(property);
    }
);

export const getPropertiesAsync = createAsyncThunk(
    actionTypes.GET_PROPERTIES,
    async () => {
        return await PropertyService.getProperties();
    }
);

export const updatePropertyAsync = createAsyncThunk(
    actionTypes.UPDATE_PROPERTY,
    async (property) => {
        return await PropertyService.updateProperty(property);
    }
);

export const deletePropertyAsync = createAsyncThunk(
    actionTypes.DEL_PROPERTY,
    async (id) => {
        return await PropertyService.deleteProperty(id);
    }
);