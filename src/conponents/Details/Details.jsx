import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";

const Details = () => {
  const { treatment, image, description, cost } = useLoaderData();

  return (
    <div className="container mx-auto my-20">
      <div>
        <img src={image} className="w-full max-h-[650px]" alt="" />
        <h3 className="font-bold text-xl my-4">{treatment}</h3>
        <p className="text-gray-500">{description}</p>
        <p className="text-blue-500 font-medium mt-5 text-lg">
          Total Cost: {cost}
        </p>
        <div className="text-center">
          <button onClick={() => document.getElementById("my_modal_5").showModal()} className="btn bg-blue-500 hover:bg-blue-600 text-white font-medium">Book Appoinment</button>
        </div>
        <Modal></Modal>
      </div>
    </div>
  );
};

export default Details;
