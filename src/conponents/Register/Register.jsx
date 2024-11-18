import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvaider/AuthProvaider";

const Register = () => {
  const { handelRegister, manageProfile } = useContext(authContext);
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*(.).*\1).{4,}$/;
  const [error, setError] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPass = e.target.cPassword.value;
    if (password.length < 6) {
      setError("Give at least 6 cheracter");
      return;
    }
    if (password !== confirmPass) {
      setError("Password did't match");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("give one lower case");
      return;
    }

    handelRegister(email, confirmPass).then((res) => {
      manageProfile(name, photo);
    });
  };

  return (
    <div className="flex justify-center items-center py-20 bg-blue-100">
      <form onSubmit={handelSubmit} className="space-y-5">
        <div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div>
          <input
            name="photo"
            type="text"
            placeholder="Photo url"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
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
        <div>
          <input
            name="cPassword"
            type="password"
            placeholder="Confirm password"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div>
          <input type="submit" className="btn" value={"Submit"} />
        </div>
        <div>{error && <p>{error}</p>}</div>
      </form>
    </div>
  );
};

export default Register;
