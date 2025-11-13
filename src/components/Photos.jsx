import React from "react";
import useFetch from "../hooks/useFetch";

const Photos = () => {
  const [data, loading, error] = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-orange-100 text-orange-700 text-2xl font-semibold">
        Loading Photos...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen bg-orange-100 text-red-600 text-xl">
        Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-orange-50 text-gray-800 p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-orange-600">
        Photos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data &&
          data.slice(0, 12).map((item) => (
            <div
              key={item.id}
              className="border border-orange-300 rounded-lg p-3 bg-white shadow-lg hover:shadow-orange-300/70 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.images?.[0]}
                alt={item.title}
                className="w-full h-60 object-cover rounded-md mb-3"
              />
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {item.title}
              </h2>
              <p className="text-orange-600 font-medium text-sm">
                ${item.price}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Photos;
