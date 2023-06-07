import PropertyDetailCard from "./PropertyDetailCard";
import PropertyOverview from "./PropertyOverview";
import PropertyPhotoGallery from "./PropertyPhotoGallery";
import "./PropertyHome.css";

function PropertyHome({property}) {
    return (
        <div>
            <PropertyDetailCard parent-style="parent-style-home" property={property}/>
            <div className="property-home-main-content">
                <div className="property-overview-container">
                    <PropertyOverview property={property}/>
                </div>
                <div className="property-actions-container">
                    <div className="property-actions">
                        <button className="property-action">Edit Tenants</button>
                        <button className="property-action">Edit Details</button>
                        <button className="property-action">Calculate Profit</button>
                    </div>
                </div>
                <div className="gallery-container">
                    <PropertyPhotoGallery photos={property.photos}/>
                </div>
            </div>
        </div>
    )
}

export default PropertyHome;