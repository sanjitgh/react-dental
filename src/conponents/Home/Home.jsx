import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";
import FeedBack from "../Feedback/FeedBack";

const Home = () => {
  const { servicesData } = useLoaderData();
  return (
    <div className="container mx-auto px-3">
      <Banner></Banner>

      {/* all treatment section */}
      <div className="my-16">
        <div className="mb-16">
          <h1 className="text-center font-bold text-blue-500 text-xl md:text-5xl">
            Our services
          </h1>
          <p className="max-w-[750px] mx-auto text-center text-gray-500 mt-5">
            Maintain your oral health with our comprehensive general dentistry
            services. From routine cleanings to detailed checkups, we ensure
            your teeth and gums stay healthy and strong.
          </p>
        </div>
        <div className="grid md:grid-cols-4 md:gap-7 sm:grid-cols-3  grid-cols-1">
          {servicesData.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="text-center mt-12">
          <NavLink
            to={"/alltreatment"}
            className="btn bg-blue-500 text-white font-medium rounded-none px-10 hover:bg-blue-600"
          >
            Show All
          </NavLink>
        </div>
      </div>

      {/* feedback section */}
      <FeedBack></FeedBack>
    </div>
  );
};

export default Home;
