import React from 'react';

const VehicleDetails = (props) => {
  return (
    <div className="vehicle-detail card col-md-4">
      <h2>Vehicle: {props.name}</h2>
      <h3>Model: {props.model}</h3>
      <div className="vehicle-specs">
        <p>Manufacturer: {props.manufacturer}</p>
        <p>Class: {props.vehicle_class}</p>
        <p>Crew: {props.crew}</p>
        <p>Length: {props.length}</p>
        <p>Max speed: {props.max_atmosphering_speed}</p>
        <p>Cargo capacity: {props.cargo_capacity}</p>
      </div>
    </div>
  )
}

export default VehicleDetails;
