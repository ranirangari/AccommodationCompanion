import React from "react";

import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/house/cities/nagpur`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.address}
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.name || product?.address}
        </h3>
        <p className="mt-2 text-sm text-gray-500 ">{product?.country}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
