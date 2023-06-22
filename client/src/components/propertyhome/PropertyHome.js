import PropertyDetailCard from "./PropertyDetailCard";
import PropertyOverview from "./PropertyOverview";
import PropertyPhotoGallery from "./PropertyPhotoGallery";
import "./PropertyHome.css";
import TenantView from "./TenantView";
import React from "react";
import AddPropertyForm from "../property/AddPropertyForm";

function PropertyHome({ property }) {
  return (
    <div className="home-container">
      <div
        className="property-card"
        id="property-home-header"
      >
        <PropertyDetailCard address={property.address} id={property.id} name={property.name} />
        <div className="property-actions-container">
          <div className="property-actions">
            <button className="property-action">Edit Tenants</button>
            <button className="property-action">Edit Details</button>
            <button className="property-action">Calculate Profit</button>
            <button className="property-action">Add Property</button>
            <AddPropertyForm />
          </div>
        </div>
      </div>
      <div className="property-home-main-content-container">
        <div className="property-home-main-content">
          <div className="property-overview-container">
            <PropertyOverview property={property} />
          </div>
          <div className="gallery-container">
            <PropertyPhotoGallery photos={property.photos} />
          </div>
        </div>
        <div className="tenants-view-container border-left">
          <TenantView tenants={property.tenants} />
        </div>
      </div>
    </div>
  )
}

export default PropertyHome;
