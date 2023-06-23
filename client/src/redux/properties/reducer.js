import { createSlice } from '@reduxjs/toolkit';
import { getPropertiesAsync } from './thunks';

const INITIAL_STATE = {
    properties: []
};

const propertiesSlice = createSlice({
    name: 'properties',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPropertiesAsync.fulfilled, (state, action) => {
                state.properties = action.payload
            });
    }
});

// export const { addProperty } = propertiesSlice.actions;

export default propertiesSlice.reducer;
