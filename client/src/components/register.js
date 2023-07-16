import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { first_name, last_name, email, password } = user;
    if (first_name && last_name && email && password) {
      axios
        .post("http://localhost:8001/api/user/register", user)
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "successful") {
            alert("user register successful");
            navigate("/login");
          } else if (res.data.message === "user already exist") {
            alert("user already exist");
            navigate("/login");
          }
        });
    } else {
      alert("invalid input");
    }
  };
  return (
    <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
        Register
      </div>
      <div className="p-6 mt-8">
        <form>
          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input
                type="text"
                minLength={2}
                required={true}
                id="first_name"
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="first_name"
                value={user.first_name}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input
                type="text"
                minLength={2}
                required={true}
                id="last_name"
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="last_name"
                value={user.last_name}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex gap-4 mb-2">
            <div className=" relative ">
              <input
                type="email"
                id="email"
                required={true}
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input
                type="password"
                id="password"
                required={true}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="password"
              />
            </div>
          </div>
          <div className="flex w-full my-4">
            <button
              type="button"
              className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              onClick={() => handleSubmit()}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
