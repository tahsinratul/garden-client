import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const ShareTip = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const tip = {
      title: form.title.value,
      plantType: form.plantType.value,
      difficulty: form.difficulty.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
      availability: form.availability.value,
      userName: user?.displayName,
      userEmail: user?.email,
      totalLiked: 0,
    };

    try {
      // Replace with actual fetch/axios POST to backend
      console.log("Submitting Tip: ", tip);
      toast.success("Garden tip shared successfully!");
      form.reset();
    } catch (err) {
      toast.error("Failed to submit tip.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-300 rounded-3xl">
      <h2 className="text-2xl font-bold text-green-700 dark:text-green-800 mb-4 text-center">Share a Garden Tip</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">

        <input type="text" name="title" placeholder="Tip Title" required className="input w-full" />
        <input type="text" name="plantType" placeholder="Plant Type / Topic" required className="input w-full" />

        <select name="difficulty" required className="input w-full">
          <option value="">Select Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <textarea name="description" placeholder="Description" required className="input w-full" />

        <input type="text" name="image" placeholder="Image URL" required className="input w-full" />

        <select name="category" required className="input w-full">
          <option value="">Select Category</option>
          <option value="Composting">Composting</option>
          <option value="Plant Care">Plant Care</option>
          <option value="Vertical Gardening">Vertical Gardening</option>
          <option value="Balcony Garden">Balcony Garden</option>
        </select>

        <select name="availability" required className="input w-full">
          <option value="">Select Availability</option>
          <option value="Public">Public</option>
          <option value="Hidden">Hidden</option>
        </select>

        <input type="text" name="userName" readOnly value={user?.displayName || ""} className="input bg-gray-100 w-full"/>
        <input type="email" name="userEmail" readOnly value={user?.email || ""} className="input bg-gray-100 w-full" />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Tip"}
        </button>
      </form>
    </div>
  );
};

export default ShareTip;
