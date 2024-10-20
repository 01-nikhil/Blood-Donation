import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { FaHeart } from "react-icons/fa"; // Heart icon for donation theme

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const navigate = useNavigate();

 const handleSignUp =async(e)=>{
      e.preventDefault();

      if(password!==confirmpassword)
      {
        alert("Passwords do not match!");
        return;
      }

      try {
        const existing_user=await axios.get(`http://localhost:5000/users?username=${username}`) 
        if(existing_user.data.length>0)
        {
          alert("User already exists!");
          return;
        }
      } catch (error) {
       console.log(error);
      }

      try {
        const newUser= {username,password};
        await axios.post("http://localhost:5000/users",newUser);
        alert("SignUp successful!");
        navigate("/login");

      } catch (error) {
        console.log(error);
      }
 }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-400 via-pink-400 to-red-600 bg-cover bg-center">
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-3xl border border-red-200 max-w-lg w-full p-10 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="text-center mb-6">
          {/* <FaHeart className="text-red-500 text-6xl mb-2 inline-block" /> */}
          <h1 className="text-5xl font-extrabold text-red-600 tracking-tight">
            Become a Donor
          </h1>
          <p className="text-gray-700 text-lg mt-2">
            Sign up to save lives by donating blood
          </p>
        </div>
        <form className="space-y-8" onSubmit={handleSignUp}>
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">Email</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="border border-gray-300 rounded-full p-4 focus:ring-4 focus:ring-red-300 focus:outline-none w-full mt-2 shadow-md transition-shadow duration-300"
              placeholder="Enter your email"
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
              placeholder="Create a password"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              required
              className="border border-gray-300 rounded-full p-4 focus:ring-4 focus:ring-red-300 focus:outline-none w-full mt-2 shadow-md transition-shadow duration-300"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full py-4 font-semibold text-lg hover:bg-gradient-to-l hover:from-red-600 hover:to-pink-600 transition-all duration-300 ease-in-out shadow-lg"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-8">
          <p className="text-gray-700 text-sm">
            Already a donor?{" "}
            <Link to="/login">
              <span className="text-red-600 underline hover:text-red-700 transition-colors duration-200">
                Login here
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
