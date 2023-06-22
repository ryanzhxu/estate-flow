import { useState } from "react";
import React from "react";
import PropertyTypes from './propertyTypes'
import "./property.css";
import AmenitiesChoices from "./AmenitiesChoices";
import Select from "react-select";

export default function AddPropertyForm() {

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
    const [amenities, setAmenities] = useState('')
    const [contactInfo, setContactInfo] = useState('')
    const [imageURLProp, setImageURLProp] = useState('')

    
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
        setAmenities('')
        setContactInfo('')
        setImageURLProp('')
    }
    const handleAmenitiesChange = (selectedOptions) => {
        const selectedValues = selectedOptions.map((option) => option.value);
          setAmenities(selectedValues);
        };
      
    const amenityOptions = Object.entries(AmenitiesChoices).map(([value, label]) => ({
        value,
        label,
    }));

    return (
        <div className="form">
            <h4 className="form-header">Add a New Property</h4>
            <form id="AddPropertyForm">

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
                <select
                    id="propertyType"
                    name="propertyType"
                    value={propertyType}
                    required
                    onChange={(e) => setPropertyType(e.target.value)}
                >
                    {Object.values(PropertyTypes).map((propertyType, index) => (
                        <option key={index} value={propertyType}>
                            {propertyType}
                        </option>
                    ))}
                </select>

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
                        value={amenityOptions.filter((option) =>
                        amenities.includes(option.value)
                    )}
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
                    <button
                    type="button"
                    onClick={() => {
                        console.log("Add property");
                    }}
                    >
                        Add Property
                    </button>
                    <button
                    type="button"
                    onClick={() => {
                        console.log("Close")
                    }}
                    >
                        Close
                    </button>
                </section>
            </form>
        </div>

    )

}