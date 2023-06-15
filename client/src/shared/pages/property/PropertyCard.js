import React from "react";
import PropertyCardDetails from "./PropertyCardDetails";
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
    return (
        <div className='property-listing-card'>
            <a href={'propertyId'}>
                <span>
                    <img alt='' className='property-image' src={property.photos[0]} />
                </span>
                <PropertyCardDetails property={property} />
            </a>
        </div>
    );
};

export default PropertyCard;