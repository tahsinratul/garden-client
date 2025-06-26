import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import PlantCard from "./PlantCard";

const FeaturedTip = () => {
  const data = useLoaderData();
  // console.log(data);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center mx-auto items-center my-5">
      <h1 className="text-center lg:text-6xl md:text-4xl text-2xl font-bold text-[#14A800] my-7">Featured Tips</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
        {data.length === 0 ? (
          <h1 className="text-2xl font-bold text-[#14A800]">No Task Found</h1>
        ) : (
          data.map((plant) => <PlantCard key={plant._id} plant={plant}></PlantCard>)
        )}
      </div>

      <button
        onClick={() => navigate("/browsetips")}
        className="btn border-[#14A800] text-[#14A800] hover:bg-[#108600] hover:text-white"
      >
        See More Tasks
      </button>
    </div>
  );
};

export default FeaturedTip;
