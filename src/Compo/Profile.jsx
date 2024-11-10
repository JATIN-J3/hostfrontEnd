import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [check, setcheck] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate("");

  const handleClick = async () => {
    try {
      const response = await axios.get(
        "https://hostbackend-production.up.railway.app/profile"
      );
      const data = response.data;
      setName(data.firstName);
      setLastname(data.lastName);
      setPhone(data.phone);
      setEmail(data.email);
      setAddress(data.address);
    } catch (error) {
    } finally {
      setcheck(true);
    }
  };

  return (
    <div className="w-full h-screen bg-purple-300 flex justify-center items-center">
      {check ? (
        <div className="bg-black text-white text-[3.5vh] w-[50%] h-[80%] flex justify-around items-center flex-col ">
          <div className="flex gap-10 justify-center items-center ">
            <h1>First name </h1>
            <h1 className="text-[4vh] text-red-800 font-bold">{name}</h1>
          </div>
          <div className="flex gap-10 justify-center items-center ">
            <h1>Last Name</h1>
            <h1 className="text-[4vh] text-red-800 font-bold">{lastname}</h1>
          </div>
          <div className="flex gap-10 justify-center items-center ">
            <h1>Email</h1>
            <h1 className="text-[4vh] text-red-800 font-bold">{email}</h1>
          </div>
          <div className="flex gap-10 justify-center items-center ">
            <h1>Phone</h1>
            <h1 className="text-[4vh] text-red-800 font-bold">{phone}</h1>
          </div>
          <div className="flex gap-10 justify-center items-center ">
            <h1>Address</h1>
            <h1 className="text-[4vh] text-red-800 font-bold">{address}</h1>
          </div>
          <h1
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </h1>
        </div>
      ) : (
        <div className="bg-zinc-500 text-white text-[3.5vh] w-[25%] h-[50%] flex justify-around items-center flex-col ">
          <button
            onClick={() => {
              handleClick();
            }}
            className="bg-white text-black w-[14vw] h-[15%]"
          >
            Check profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
