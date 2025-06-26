import React from "react";
import { useLoaderData } from "react-router";
import PlantCard from "../component/PlantCard";

const BrowseTips = () => {
  const plants = useLoaderData();

  return (
    <>
      <div className="w-11/12 flex flex-col gap-5 mx-auto my-5">
        <h1 className="text-center lg:text-6xl md:text-4xl text-2xl font-bold text-[#14A800]">All Tips</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {plants.map((plant) => (
            <PlantCard key={plant._id} plant={plant}></PlantCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrowseTips;
