import React from "react";
import useFetch from "../hooks/useFetch";

const Photos = () => {
  const [data, loading, error] = useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-orange-100 text-orange-700 text-xl">
        Loading data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-orange-100 text-red-600 text-lg">
        Something went wrong: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff7ed] text-gray-800 px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">
        Product Gallery
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-orange-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 duration-300"
          >
            <img
              src={item.images && item.images[0]}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-3">
              <h2 className="font-semibold text-lg mb-1 truncate">{item.title}</h2>
              <p className="text-orange-500 text-sm font-medium">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
