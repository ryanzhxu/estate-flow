import PropertyDetailCard from "./PropertyDetailCard";
import PropertyOverview from "./PropertyOverview";
import PropertyPhotoGallery from "./PropertyPhotoGallery";
import "./PropertyHome.css";


function PropertyHome({property}) {
    return (
        <div>
            <div
                className="property-card"
                id="property-home-header"
            >
                <PropertyDetailCard address={property.address} id={property.id} name={property.name}/>
                <div className="property-actions-container">
                    <div className="property-actions">
                        <button className="property-action">Edit Tenants</button>
                        <button className="property-action">Edit Details</button>
                        <button className="property-action">Calculate Profit</button>
                    </div>
                </div>
            </div>
            <div className="property-home-main-content">
                <div className="property-overview-container">
                    <PropertyOverview property={property}/>
                </div>
                <div className="gallery-container">
                    <PropertyPhotoGallery photos={property.photos}/>
                </div>
            </div>
        </div>
    )
}

export default PropertyHome;