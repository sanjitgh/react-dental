import { useLoaderData } from "react-router-dom";
import FeedbackCard from "../FeedbackCard/FeedbackCard";

const FeedBack = () => {
  const { feedbackData } = useLoaderData();

  return (
    <div className="py-16">
      <h1 className="text-center font-bold text-xl md:text-5xl text-blue-500">
        Our Client's Review
      </h1>
      <div className="divider bg-blue-500 h-[1px] mt-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-16">
        {feedbackData.map((feedback) => (
          <FeedbackCard
            key={feedback.reviewId}
            feedback={feedback}
          ></FeedbackCard>
        ))}
      </div>
    </div>
  );
};

export default FeedBack;
