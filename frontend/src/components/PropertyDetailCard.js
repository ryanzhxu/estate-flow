import React from "react";
import "./PropertyDetailCardHome.css";

function PropertyDetailCard(props) {
    const property = props.property;
    return (
        <div className={`property-card-${props["parent-style"]}`}>
          <header>{ property.name ? property.name : property.id }</header>
          <div className="bed-and-bath property-detail">
              <span>{ property.bed } bath</span>
              <span className="separator">|</span>
              <span>{ property.bath } bed</span>
          </div>
          <p className="property-detail" >{property.address}</p>
      </div>
    );
}
export default PropertyDetailCard;