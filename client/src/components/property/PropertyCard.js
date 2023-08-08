import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCardDetails from './PropertyCardDetails';
import '../../shared/styles/listing.css';

const PropertyCard = ({ property }) => {
  return (
    <div className='listing-card'>
      <Link to={`/properties/${property._id}`}>
        <span>
          <img alt={property._id} className={'card-image'} src={property.photos.length === 0 ?
              "https://t3.ftcdn.net/jpg/01/94/24/52/360_F_194245207_zjevIW5p8VNxxMWlpy66vDECCMue6DCv.jpg" :
              property.photos[0]} />
        </span>
      </Link>
      <PropertyCardDetails property={property} />
    </div>
  );
};

export default PropertyCard;
