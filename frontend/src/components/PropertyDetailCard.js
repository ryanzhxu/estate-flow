import "./PropertyDetailCard.css";

function PropertyDetailCard({id, name, address}) {
    return (
        <div className="property-card">
            <header>{name ? name : id}</header>
            <p className="property-address">{address.streetAddress}</p>
            <p className="property-zone-info"><small>{address.city}, {address.province} {address.zipCode}</small></p>
            <p><small><small>ID#: {id}</small></small></p>
        </div>
    );
}
export default PropertyDetailCard;