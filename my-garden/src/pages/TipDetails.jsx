import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";

const TipsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://garden-server-bice.vercel.app/plants`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item._id === id);
        setPlant(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch plant data:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading tip details...</p>;
  }

  if (!plant) {
    return (
      <p className="text-center mt-10 text-red-600 text-lg">
        Plant tip not found.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-green-700 flex items-center gap-1 hover:underline font-bold"
      >
        <IoIosArrowBack size={18} />
        Go Back
      </button>

      <div className="card bg-[#DBF6D7] border-2 border-[#14A800] shadow-md p-5">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={plant.image || "/placeholder.png"}
            alt={plant.title}
            className="w-full md:w-1/3 object-contain rounded-lg"
          />
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="text-3xl font-bold text-[#021100]">{plant.title}</h1>
            <p className="text-[#084300]">{plant.description}</p>

            <div className="flex  gap-3 mt-3 flex-col">
              <span className="bg-[#99DC8F] text-[#084300] px-4 py-1 rounded-full font-medium w-2/12">
                {plant.plantType}
              </span>
              <span className="text-[#084300] font-bold">
                Difficulty: {plant.difficulty}
              </span>
              <span className="text-[#084300]">
                Category: {plant.category}</span>
              <span className="text-[#084300]">
                Availability: {plant.availability}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsDetails;
