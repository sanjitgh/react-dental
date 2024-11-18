import React, { useContext } from "react";
import { authContext } from "../AuthProvaider/AuthProvaider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { handelLogin,handelGoogleLogin,handelLogout } = useContext(authContext);
  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate()
  console.log(location);
  const handelSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    handelLogin(email, password)
    .then((res)=>{
     navigate(location.state)
    })
  };

  const googleHandelar =()=>{
    handelGoogleLogin()
    .then(res => {
    navigate(location.state)
    })

  }
  return (
    <div>
      <div className="flex justify-center items-center py-20 bg-blue-100">
        <form onSubmit={handelSubmit} className="space-y-5">
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="flex justify-between">
            <input type="submit" className="btn" value={"Login"} />
            <Link to="/register" className="btn">Register</Link>
          </div>
          <div>
            <button onClick={googleHandelar} className="btn">Google</button>
          </div>
          <div>
            <button onClick={handelLogout} className="btn">Logout</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
