import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router";

const MyTips = () => {
  const { user } = useContext(AuthContext);
  const [myTips, setMyTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setMyTips([]);
      setLoading(false);
      return;
    }

    fetch("https://garden-server-bice.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((tip) => tip.userEmail === user.email);
        setMyTips(filtered);
      })
      .catch((err) => {
        toast.error("Failed to load your tips.");
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [user]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this tip?");
    if (!confirmDelete) return;

    fetch(`https://garden-server-bice.vercel.app/plants/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Tip deleted successfully!");
          setMyTips((prev) => prev.filter((tip) => tip._id !== id));
        } else {
          toast.error("Failed to delete tip.");
        }
      })
      .catch((error) => {
        toast.error("Error deleting tip.");
        console.error(error);
      });
  };

  if (loading) return <p className="text-center mt-10">Loading your tips...</p>;

  if (!myTips.length)
    return (
      <p className="text-center mt-10 text-green-600 font-bold text-2xl pb-5">
        You have not shared any tips yet.
      </p>
    );

  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-center text-4xl font-bold text-[#14A800] mb-6">
        My Shared Tips
      </h1>

      <div className="overflow-x-auto rounded-md shadow">
        <table className="min-w-full bg-white text-sm text-left">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Difficulty</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myTips.map((tip) => (
              <tr key={tip._id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-20 h-14 object-cover rounded"
                  />
                </td>
                <td className="p-3 font-medium">{tip.title}</td>
                <td className="p-3">{tip.category}</td>
                <td className="p-3">{tip.difficulty}</td>
                <td className="p-3 space-x-2">
                  <Link to={`/update/${tip._id}`}>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTips;
