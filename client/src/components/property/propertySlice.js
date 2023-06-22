import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import propertyTypes from "./propertyTypes";

const initialState = [
    {
        id: '0',
        unitNumber: 45,
        streetAddress: "2366 Main Mall",
        propertyType: propertyTypes.Townhouse,
        size: 4000,
        propertyName: "ICCS",
        city: "Vancouver",
        province: "BC",
        country: "Canada",
        postal: "V6T 1Z4",
        bedrooms: 2,
        bathrooms: 2,
        description: "abcdefg",
        amenities: "Pool",
        contactInfo: "test",
        photos: 
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        
      }
]

const propertySlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        addProperty: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(unitNumber, streetAddress, propertyType, size, city, province, country, postal,
                propertyName, description, bedrooms, bathrooms, amenities, photos, contactInfo ) {
                return {
                    payload: {
                        id: nanoid(),
                        unitNumber, 
                        streetAddress, 
                        propertyType, 
                        size,
                        city, 
                        province, 
                        country, 
                        postal,
                        propertyName, 
                        description, 
                        bedrooms, 
                        bathrooms, 
                        amenities, 
                        photos, 
                        contactInfo
                    }
                }
            }
        },
        deleteAll(state, action) {
            // Clear the entire state by replacing it with an empty array
            return [];
        },
        deleteProperty(state, action) {
            const itemId = action.payload;
            return state.filter(item => item.id !== itemId);
        }


    }
})

export const selectAllProperties = state => state.properties;

export const { addProperty, deleteAll, deleteProperty } = propertySlice.actions;

export default propertySlice.reducer;