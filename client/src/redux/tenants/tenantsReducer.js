import { createSlice } from '@reduxjs/toolkit';
import {getSingleTenantAsync, getTenantsAsync, getTenantsFromProperty} from './tenantsThunks';

const INITIAL_STATE = {
    tenants: [],
    isTenantDetailOpen: false,
    isTenantAddOpen: false,
    tenantSelected: null
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
        openTenantADD:(state, action) => {
            state.isTenantAddOpen = true;
        },
        closeTenantADD:(state, action) => {
            state.isTenantAddOpen = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTenantsAsync.fulfilled, (state, action) => {
                state.tenants = action.payload
            })
            .addCase(getSingleTenantAsync.fulfilled, (state, action) => {
                state.tenantSelected = action.payload
            })
            .addCase(getTenantsFromProperty.fulfilled, (state, action) => {
                state.tenants = action.payload;
            });
    }
});

// export const { addProperty } = propertiesSlice.actions;

export default tenantsSlice.reducer;
export const {openTenantDetail, closeTenantDetail,openTenantADD, closeTenantADD} = tenantsSlice.actions;// selectedItem,closeModal->Modal.js,
export const isTenantDetailOpen = (state) => state.tenants.isTenantDetailOpen;
export const expSelectedTenant = (state) => state.tenants.tenantSelected;
export const isTenantAddOpen = (state) => state.tenants.isTenantAddOpen;
