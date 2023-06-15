import React from "react";
import TempProperty from "../../constants/PropertyStuff/TempProperty";
import PropertyCard from "./PropertyCard";

const tempProperties = [];
tempProperties.push(TempProperty);

const PropertyListing = ({ properties }) => {
    return (
        tempProperties.forEach((property) => {
            <PropertyCard property={property} />
        })
    );
};

export default PropertyListing;