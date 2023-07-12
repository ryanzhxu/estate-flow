import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPropertyAsync } from "../../redux/properties/thunks";
import { useDispatch, useSelector } from "react-redux";
import PropertyDetailCard from "./PropertyDetailCard";
import PropertyOverview from "./PropertyOverview";
import PropertyPhotoGallery from "./PropertyPhotoGallery";
import "./PropertyHome.css";
import TenantView from "./TenantView";

function PropertyHome() {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const property = useSelector((state) => state.properties.propertySelected);

  useEffect(() => {
    dispatch(getPropertyAsync(_id));
  }, [dispatch, _id]);

  const getContent = () => {
    return (
      <div className="home-container">
        <div
          className="property-card"
          id="property-home-header"
        >
          <PropertyDetailCard address={property.address} id={property._id} name={property.name} />
          <div className="property-actions-container">
            <div className="property-actions">
              <button className="property-action">Edit Tenants</button>
              <button className="property-action">Edit Details</button>
              <button className="property-action">Calculate Profit</button>
              <button className="property-action">Add Property</button>
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
            <TenantView propertyId={property._id} />
          </div>
        </div>
      </div>
    )
  };

  return (
    // TODO: create a loading component that renders while property is still being retrived
    property ? getContent() : <></>
  )
}

export default PropertyHome;
