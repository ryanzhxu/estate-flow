import { createSlice } from '@reduxjs/toolkit';
import {getDetailAsync, getTenantsAsync} from './tenantsThunks';

const INITIAL_STATE = {
    tenants: [],
    isTenantDetailOpen: false,
    tenantSelected:{}

};

const tenantsSlice = createSlice({
    name: 'tenants',
    initialState: INITIAL_STATE,
    reducers: {
        openTenantDetail:(state, action) => {
            state.isTenantDetailOpen = true;
        },
        closeTenantDetail:(state, action) => {
            state.isTenantDetailOpen = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTenantsAsync.fulfilled, (state, action) => {
                state.tenants = action.payload
            })
            .addCase(getDetailAsync.fulfilled, (state, action) => {
                state.tenantSelected = action.payload
            });


    }
});

// export const { addProperty } = propertiesSlice.actions;

export default tenantsSlice.reducer;
export const {openTenantDetail, closeTenantDetail} = tenantsSlice.actions;// selectedItem,closeModal->Modal.js,
export const isTenantDetailOpen = (state) => state.tenants.isTenantDetailOpen;
export const expSelectedTenant = (state) => state.tenants.tenantSelected;