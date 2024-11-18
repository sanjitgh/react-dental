const Banner = () => {
  return (
    <div className="hero min-h-[800px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co.com/tL1tSRj/3d-illustration-dentist-checking-teeth-1419-2775-removebg-preview.png"
          className="rounded-lg w-full"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-blue-500 text-white">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
