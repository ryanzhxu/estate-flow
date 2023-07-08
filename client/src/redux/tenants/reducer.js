import { createSlice } from '@reduxjs/toolkit';
import { getTenantsAsync } from './thunks';

const INITIAL_STATE = {
    tenants: []
};

const tenantsSlice = createSlice({
    name: 'tenants',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTenantsAsync.fulfilled, (state, action) => {
                state.tenants = action.payload
            });
    }
});

// export const { addProperty } = propertiesSlice.actions;

export default tenantsSlice.reducer;
