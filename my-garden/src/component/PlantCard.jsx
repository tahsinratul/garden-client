import React from 'react';

const PlantCard = ({plant}) => {
    const {title,image,plantType,difficulty,description} = plant;
    return (
        <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img className='size-50'
      src={image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2>{title}</h2>
    <p>{plantType}</p>
    <p>{description}</p>
    <p>{difficulty}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default PlantCard;