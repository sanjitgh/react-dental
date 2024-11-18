const FeedbackCard = ({ feedback }) => {
  const { name, image, review, date } = feedback;
  return (
    <div className="shadow-lg p-10 shadow-blue-200">
      <p className="text-gray-600 mb-5 font-medium">{review}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img src={image} className="w-14 h-14 rounded-full" alt="" />
          <div>
            <p className="text-blue-500 font-medium text-lg">{name}</p>
            <div className="rating w-20">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </div>
        </div>
        <p className="font-medium text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
