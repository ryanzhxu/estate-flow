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
    async (_id) => {
        return await PropertyService.deleteProperty(_id);
    }
);

export const getPropertyAsync = createAsyncThunk(
    actionTypes.GET_PROPERTY,
    async (_id) => {
        console.log('GOT HERE!');
        const res = await PropertyService.getProperty(_id);
        console.log('res: ', res);
        return res;
    }
);
