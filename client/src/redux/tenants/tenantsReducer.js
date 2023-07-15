import { createSlice } from '@reduxjs/toolkit';
import {deleteTenantAsync, getSingleTenantAsync, getTenantsAsync, getTenantsFromPropertyAsync} from './tenantsThunks';

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
    openTenantDetail: (state, action) => {
      state.isTenantDetailOpen = true;
    },
    closeTenantDetail: (state, action) => {
      state.isTenantDetailOpen = false;
    },
    openTenantADD: (state, action) => {
      state.isTenantAddOpen = true;
    },
    closeTenantADD: (state, action) => {
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
            .addCase(getTenantsFromPropertyAsync.fulfilled, (state, action) => {
                state.tenants = action.payload;
            })

        //deleteAsync
           .addCase(deleteTenantAsync.pending, (state) => {
            state.error = null;
        })
            .addCase(deleteTenantAsync.fulfilled, (state, action) => {
                state.tenants = action.payload;
            })
            .addCase(deleteTenantAsync.rejected, (state, action) => {
                state.error = "fail to delete tenant";
            });
    }
});

export default tenantsSlice.reducer;
export const { openTenantDetail, closeTenantDetail, openTenantADD, closeTenantADD } = tenantsSlice.actions; // selectedItem,closeModal->Modal.js,
export const isTenantDetailOpen = (state) => state.tenants.isTenantDetailOpen;
export const expSelectedTenant = (state) => state.tenants.tenantSelected;
export const isTenantAddOpen = (state) => state.tenants.isTenantAddOpen;
