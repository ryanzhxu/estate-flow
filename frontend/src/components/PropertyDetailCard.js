function PropertyDetailCard(props) {
    const property = props.property;
    return (
      <div>
          <header>{ property.name ? property.name : property.id }</header>
          <div>
              <span>{ property.bed } bath</span>
              <span> { property.bath } bed</span>
          </div>
          <p>{property.address}</p>
      </div>
    );
}
export default PropertyDetailCard;