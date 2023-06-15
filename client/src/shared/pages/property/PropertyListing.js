import React from "react";
import PropertyCard from "./PropertyCard";
import './PropertyCard.css';

const PropertyListing = ({ properties }) => {
    return (
        <div className='property-listing-page'>
            <div className='property-listing-contents'>
                <div className='property-listing-left'>
                    <h2>Search</h2>
                </div>
                <div className='property-listing-right'>
                    <div className='property-listing-header'><h2>Properties</h2></div>
                    <div className='property-listing-cards'>
                        {properties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyListing;
