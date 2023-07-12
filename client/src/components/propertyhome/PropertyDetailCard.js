import React from "react";
import "./PropertyDetailCard.css";
function PropertyDetailCard({ id, name, address }) {
    return (
        <div className="property-card">
            <div className="property-detail">
                <header>{name ? name : id}</header>
                <p className="property-address">{address.streetAddress}</p>
                <p className="property-zone-info"><small>{address.city}, {address.province} {address.postalCode}</small></p>
            </div>
        </div>
    );
}
export default PropertyDetailCard;