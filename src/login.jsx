import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { FaHeart } from "react-icons/fa"; // Add heart icon for donation

function BloodDonationLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response= await axios.get("http://localhost:5000/users");
      const users=response.data;

      const user= users.find( (user)=> 
      user.username===username && user.password===password);

      if(user)
      {
        alert("Login successful!");
        navigate("/homepage");
      }
      else{
          alert("Invalid username or password!");
        return;
      }

    } catch (error) {
      console.log("Error: Login", error);
    }
   
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-400 via-pink-400 to-red-600 bg-cover bg-center">
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-3xl border border-red-200 max-w-lg w-full p-10 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="text-center mb-6">
          {/* <FaHeart className="text-red-500 text-6xl mb-2 inline-block" /> */}
          <h1 className="text-5xl font-extrabold text-red-600 tracking-tight">
            Save a Life
          </h1>
          <p className="text-gray-700 text-lg mt-2">
            Login to donate blood and help others
          </p>
        </div>
        <form className="space-y-8" onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="border border-gray-300 rounded-full p-4 focus:ring-4 focus:ring-red-300 focus:outline-none w-full mt-2 shadow-md transition-shadow duration-300"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 rounded-full p-4 focus:ring-4 focus:ring-red-300 focus:outline-none w-full mt-2 shadow-md transition-shadow duration-300"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="h-5 w-5 text-red-500 border-gray-300 rounded focus:ring-red-300"
            />
            <label className="text-gray-700 text-sm">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full py-4 font-semibold text-lg hover:bg-gradient-to-l hover:from-red-600 hover:to-pink-600 transition-all duration-300 ease-in-out shadow-lg"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-8">
          <p className="text-gray-700 text-sm">
            New to donating blood?{" "}
            <Link to="/signup">
              <span className="text-red-600 underline hover:text-red-700 transition-colors duration-200">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BloodDonationLogin;
