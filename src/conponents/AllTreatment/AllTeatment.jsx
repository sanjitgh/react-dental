import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const AllTeatment = () => {
  const services = useLoaderData();

  return (
    <div className="container mx-auto px-3 py-20">
         <div className="mb-16">
        <h1 className="text-center font-bold text-blue-500 text-xl md:text-5xl">
          All Teatment
        </h1>
        </div>
      <div className="grid md:grid-cols-4 md:gap-7 sm:grid-cols-3  grid-cols-1">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllTeatment;
