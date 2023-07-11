import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import TenantService from './tenantService';

export const addTenantAsync = createAsyncThunk(
    actionTypes.ADD_TENANT,
    async (tenant) => {
        return await TenantService.addTenant(tenant);
    }
);

export const getTenantsAsync = createAsyncThunk(
    actionTypes.GET_TENANTS,
    async () => {
        return await TenantService.getTenants();
    }
);

export const updateTenantAsync = createAsyncThunk(
    actionTypes.UPDATE_TENANT,
    async (tenant) => {
        return await TenantService.updateTenant(tenant);
    }
);

export const deleteTenantAsync = createAsyncThunk(

    actionTypes.DEL_TENANT,
    async (id) => {
        console.log("Executing in tenantsThunk");
        return await TenantService.deleteTenant(id);
    }
);

export const getDetailAsync = createAsyncThunk(
    "getDetail",
    async(id) => {
        return await TenantService.getSingleTenant(id);
    }
);