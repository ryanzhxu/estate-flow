import "./PropertyOverview.css";

function PropertyOverview({property}) {
    return (
        <div className="property-overview">
            <h3>Overview</h3>
            <div className="property-details">
                <div className="property-info">
                    <p>Property Type: {property.type}</p>
                    <p>Bedrooms: {property.bed}</p>
                    <p>Bathrooms: {property.bath}</p>
                    <p>Square Footage: {property.squareFootage}</p>
                    <p>Rent: {property.rent}</p>
                    <p>Description: {property.description}</p>
                </div>
            </div>
        </div>
    )
}
export default PropertyOverview;