import React from "react";
import { FaFlag } from "react-icons/fa";
import { useNavigate } from "react-router";

const ErrorPage = () => {

    const nav = useNavigate();

    const handleClick = () => {
        nav('/');
    }

  return (
    <div>
      <div className="h-screen mx-auto grid place-items-center text-center px-8">
        <div>
          <FaFlag className="w-20 h-20 mx-auto" />
          <div>
            <h1 className="text-3xl font-bold">Page not found</h1>
          </div>
          <button onClick={handleClick} color="gray" className="btn bg-red-500 text-white mt-10 w-full px-4 md:w-[8rem]">
            Back home
          </button>
      </div>
      </div>
    </div>
  );
};

export default ErrorPage;
