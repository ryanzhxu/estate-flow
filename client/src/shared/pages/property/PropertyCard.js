import React from "react";
import PropertyCardDetails from "./PropertyCardDetails";
import './PropertyListing.css';

const PropertyCard = ({ property }) => {
    return (
        <div className='property-listing-card'>
            <a href={`properties/${property.id}`}>
                <span>
                    <img alt={property.id} className={`property-image`} src={property.photos[0]} />
                </span>
                <PropertyCardDetails property={property} />
            </a>
        </div>
    );
};

export default PropertyCard;