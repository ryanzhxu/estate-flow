// eslint-disable-next-line
import { useState } from "react";
import React from "react";
import PropertyTypes from './propertyTypes'
import "./property.css";
import AmenitiesChoices from "./AmenitiesChoices";
import Select from "react-select";

import Button from '@atlaskit/button';
import { useDispatch } from "react-redux";
import { addPropertyAsync, getPropertiesAsync } from "../../redux/properties/thunks";

export default function AddPropertyForm({ handleCloseForm }) {

    const [unitNumber, setUnitNumber] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [propertyType, setPropertyType] = useState('')
    const [size, setSize] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [country, setCountry] = useState('')
    const [postal, setPostal] = useState('')

    const [propertyName, setPropertyName] = useState('')
    const [description, setDescription] = useState('')
    const [bedrooms, setBedrooms] = useState('')
    const [bathrooms, setBathrooms] = useState('')
    const [amenities, setAmenities] = useState([])
    const [contactInfo, setContactInfo] = useState('')
    const [imageURLProp, setImageURLProp] = useState('')

    const dispatch = useDispatch();
    
    const onClearClickedProp = () => {
        setUnitNumber('')
        setStreetAddress('')
        setPropertyType('')
        setSize('')
        setCity('')
        setProvince('')
        setCountry('')
        setPostal('')

        setPropertyName('')
        setDescription('')
        setBedrooms('')
        setBathrooms('')
        setAmenities([])
        setContactInfo('')
        setImageURLProp('')
    }
    const handleAmenitiesChange = (selectedOptions) => {
        const selectedValues = selectedOptions.map((option) => option.value);
        setAmenities(selectedValues);
        console.log('amenities: ', amenities);
    };
      
    const amenityOptions = Object.entries(AmenitiesChoices).map(([value, label]) => ({
        value,
        label,
    }));

    const handlePropertyTypeChange = (selectedOption) => {
          setPropertyType(selectedOption.value);
    };

    const propertyTypeOptions = Object.entries(PropertyTypes).map(([value, label]) => ({
        value,
        label,
    }))

    const handleAddProperty = () => {
        const property = {
            type: propertyType ?? PropertyTypes.Apartment,
            name: '',
            address: {
                streetAddress: streetAddress ?? '123 Main St.',
                city: city ?? 'Vancouver',
                province: province ?? 'BC',
                postalCode: postal ?? 'V7C 2N4',
            },
            bed: bedrooms ?? 1,
            bath: bathrooms ?? 1,
            description: description ?? '',
            rent: 2600,
            amenities: amenities ?? [],
            photos: ['https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?w=2000'],
            tenants: [],
        }

        dispatch(addPropertyAsync(property))
            .then(() => {
                onClearClickedProp();
                handleCloseForm();
                dispatch(getPropertiesAsync());
            })
    };

    return (
        <div className="form">
            <form className="add-property-form">

                <label htmlFor="unitNumber">Unit Number:</label>
                <input
                    type="text"
                    id="unitNumber"
                    name="unitNumber"
                    value={unitNumber}
                    required
                    onChange={(e) => setUnitNumber(e.target.value)}
                />

                <label htmlFor="streetAddress">Street Address: </label>
                <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={streetAddress}
                    required
                    onChange={(e) => setStreetAddress(e.target.value)}
                />

                <label htmlFor="propertyType">Property Type: </label>
                <Select
                    id="propertyType"
                    name="propertyType"
                    options={propertyTypeOptions}
                    value={propertyTypeOptions.find((option) => option.value === propertyType)}
                    onChange={handlePropertyTypeChange}
                />

                <label htmlFor="size">Size: </label>
                <input
                    type="number"
                    id="size"
                    name="size"
                    value={size}
                    required
                    onChange={(e) => setSize(e.target.value)}
                />

                <label htmlFor="city">City: </label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    required
                    onChange={(e) => setCity(e.target.value)}
                />

                <label htmlFor="province">Province: </label>
                <input
                    id="province"
                    name="province"
                    value={province}
                    required
                    onChange={(e) => setProvince(e.target.value)}
                />

                <label htmlFor="country">Country: </label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={country}
                    required
                    onChange={(e) => setCountry(e.target.value)}
                />

                <label htmlFor="postal">Postal Code: </label>
                <input
                    type="text"
                    id="postal"
                    name="postal"
                    value={postal}
                    required
                    onChange={(e) => setPostal(e.target.value)}
                />

                <label htmlFor="propertyName">Property Name: </label>
                <input
                    type="text"
                    id="propertyName"
                    name="propertyName"
                    value={propertyName}
                    onChange={(e) => setPropertyName(e.target.value)}
                />

                <label htmlFor="description">Description: </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label htmlFor="bedrooms">Number of Bedrooms: </label>
                <input
                    type="number"
                    id="bedrooms"
                    name="bedrooms"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                />

                <label htmlFor="bathrooms">Number of Bathrooms: </label>
                <input
                    type="number"
                    id="bathrooms"
                    name="bathrooms"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                />  
                
                <label htmlFor="amenities">Amenities:</label>
                    <Select
                        id="amenities"
                        name="amenities"
                        options={amenityOptions}
                        isMulti
                        value={amenities}
                    onChange={handleAmenitiesChange}
                />
                
                <label htmlFor="contactInfo">Contact Information: </label>
                <input
                    type="text"
                    id="contactInfo"
                    name="contactInfo"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                />  

                <label htmlFor="imageURLProp">imageURL: </label>
                <input
                    type="url"
                    id="imageURLProp"
                    name="imageURLProp"
                    value={imageURLProp}
                    onChange={(e) => setImageURLProp(e.target.value)}
                />
                <section className="buttons">
                    <Button appearance="subtle" onClick={handleAddProperty}>Add property</Button>
                    <Button appearance="subtle" onClick={onClearClickedProp}>Clear fields</Button>
                    <Button appearance="subtle" onClick={handleCloseForm}>Close</Button>
                </section>
            </form>
        </div>

    )

}