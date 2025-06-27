// import React from 'react';

// const PlantCard = ({plant}) => {
//     const {title,image,plantType,difficulty,description} = plant;
//     return (
//         <div className="card card-side bg-base-100 shadow-sm">
//   <figure>
//     <img className='size-50'
//       src={image}
//       alt="Movie" />
//   </figure>
//   <div className="card-body">
//     <h2>{title}</h2>
//     <p>{plantType}</p>
//     <p>{description}</p>
//     <p>{difficulty}</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">View Details</button>
//     </div>
//   </div>
// </div>
//     );
// };

// export default PlantCard;


import React from "react";
import { FaClock } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router";

const PlantCard = ({ plant }) => {
  
  const navigate = useNavigate();
  // console.log("task", task);
  return (
    <div className="card border-2 border-[#14A800] bg-[#DBF6D7] w-96 shadow-sm">
      <div className="card-body flex flex-col items-baseline">
        <img className="size-50" src={plant.image} alt="" />
        <h2 className="card-title text-2xl text-[#021100]">{plant.title}</h2>
        <p className="text-[#084300]">
          {plant.description.length > 100
            ? plant.description.slice(0, 100) + "..."
            : plant.description}
        </p>
        <p className="bg-[#99DC8F] text-[#084300] px-4 py-2 font-medium rounded-4xl">{plant.plantType}</p>
        <p className="text-xl font-bold text-[#084300]">{plant.difficulty}</p>
        <p className="flex items-center gap-2 text-[#084300]">{plant.category}</p>
        <div className="card-actions mt-2">
          <button onClick={() => navigate(`/plants/plant/${plant._id}`)} className="btn bg-[#14A800] text-white flex items-center">See Details<IoIosArrowDropright size={16}></IoIosArrowDropright></button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
