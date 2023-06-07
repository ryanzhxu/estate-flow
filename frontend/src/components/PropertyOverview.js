import "./PropertyOverview.css";

function PropertyOverview({property}) {
    return (
        <div className="property-overview">
            <h3>Overview</h3>
            <div className="property-details">
                <div className="property-info">
                    <p><em>Property Type:</em> {property.type}</p>
                    <p><em>Bedrooms:</em> {property.bed}</p>
                    <p><em>Bathrooms:</em> {property.bath}</p>
                    <p><em>Square Footage:</em> {property.squareFootage}</p>
                    <p><em>Rent Per Month:</em> ${property.rent}</p>
                    <p><em>Description:</em> {property.description}</p>
                </div>
            </div>
        </div>
    )
}
export default PropertyOverview;