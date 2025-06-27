import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateTip = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    // Fetch tip by ID to prefill the form
    fetch(`https://garden-server-bice.vercel.app/plants/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Tip not found");
        return res.json();
      })
      .then((data) => {
        setTip(data);
      })
      .catch((err) => {
        toast.error("Failed to load tip.");
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdating(true);

    // Prepare updated tip data
    const updatedTip = {
      title: e.target.title.value,
      plantType: e.target.plantType.value,
      difficulty: e.target.difficulty.value,
      description: e.target.description.value,
      image: e.target.image.value,
      category: e.target.category.value,
      availability: e.target.availability.value,
      // You can keep userName and userEmail unchanged or update if needed
      userName: tip.userName,
      userEmail: tip.userEmail,
    };

    fetch(`https://garden-server-bice.vercel.app/plants/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTip),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Tip updated successfully!");
          navigate("/mytips");
        } else {
          toast.error("No changes made or update failed.");
        }
      })
      .catch((err) => {
        toast.error("Failed to update tip.");
        console.error(err);
      })
      .finally(() => setUpdating(false));
  };

  if (loading) return <p className="text-center mt-10">Loading tip details...</p>;

  if (!tip) return <p className="text-center mt-10 text-red-600">Tip not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-300 rounded-3xl my-10">
      <h2 className="text-2xl font-bold text-green-700 dark:text-green-800 mb-6 text-center">Update Garden Tip</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input type="text" name="title" defaultValue={tip.title} required className="input w-full" placeholder="Tip Title" />
        <input type="text" name="plantType" defaultValue={tip.plantType} required className="input w-full" placeholder="Plant Type / Topic" />

        <select name="difficulty" defaultValue={tip.difficulty} required className="input w-full">
          <option value="">Select Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <textarea name="description" defaultValue={tip.description} required className="input w-full" placeholder="Description" />

        <input type="text" name="image" defaultValue={tip.image} required className="input w-full" placeholder="Image URL" />

        <select name="category" defaultValue={tip.category} required className="input w-full">
          <option value="">Select Category</option>
          <option value="Composting">Composting</option>
          <option value="Plant Care">Plant Care</option>
          <option value="Vertical Gardening">Vertical Gardening</option>
          <option value="Balcony Garden">Balcony Garden</option>
        </select>

        <select name="availability" defaultValue={tip.availability} required className="input w-full">
          <option value="">Select Availability</option>
          <option value="Public">Public</option>
          <option value="Hidden">Hidden</option>
        </select>

        <button
          type="submit"
          disabled={updating}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
        >
          {updating ? "Updating..." : "Update Tip"}
        </button>
      </form>
    </div>
  );
};

export default UpdateTip;
