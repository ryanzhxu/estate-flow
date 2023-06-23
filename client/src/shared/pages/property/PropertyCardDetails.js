import React from "react";

const PropertyCardDetails = ({ property }) => {
    return (
        <div className='property-card-content'>
            <span>{property.type}</span>
            <h4 style={{ whiteSpace: 'nowrap' }}>{property.address.streetAddress}</h4>
            <p>{`${property.address.city}, ${property.address.province} ${property.address.postalCode}`}</p>
            <div className='property-card-footer'>
                <p>{`id: ${property.id}`}</p>
            </div>
        </div>
    );
};

export default PropertyCardDetails;