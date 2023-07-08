import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import PropertyService from './service';

export const addTenantAsync = createAsyncThunk(
    actionTypes.ADD_TENANT,
    async (tenant) => {
        return await PropertyService.addTenant(tenant);
    }
);

export const getTenantsAsync = createAsyncThunk(
    actionTypes.GET_TENANTS,
    async () => {
        return await PropertyService.getTenant();
    }
);

export const updateTenantAsync = createAsyncThunk(
    actionTypes.UPDATE_TENANT,
    async (tenant) => {
        return await PropertyService.updateTenant(tenant);
    }
);

export const deleteTenantAsync = createAsyncThunk(
    actionTypes.DEL_TENANT,
    async (id) => {
        return await PropertyService.deleteTenant(id);
    }
);