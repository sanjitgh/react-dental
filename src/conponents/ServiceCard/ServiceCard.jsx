import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, treatment, image, description, cost } = service;

  return (
    <div>
      <div className="card shadow-lg rounded-none">
        <figure>
          <img className="w-full h-[250px]" src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{treatment}</h2>
          <p title={description}>{description.slice(0, 100)}...</p>
          <h3 className="font-medium text-blue-500">Cost: {cost}$</h3>
          <div className="card-actions justify-end">
            <NavLink
              to={`/details/${id}`}
              className="btn bg-blue-500 hover:bg-blue-600 text-white"
            >
              Checkout
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
