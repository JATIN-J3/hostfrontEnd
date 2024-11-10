import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../Confiq/Api";

const CreateUser = () => {
  const [fName, setFName] = useState("");
  const [lName, setlName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [add, setAdd] = useState("");
  const navigate = useNavigate();
  var string;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userdata = {
      firstName: fName,
      lastName: lName,
      email: email,
      phone: phone,
      address: add,
    };

    try {
      const response = await axios.post("https://hostbackend-production.up.railway.app/create", userdata);

      string = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      console.log(string);
      alert(string);
      navigate("/");
    }
  };
  return (
    <div className="w-full h-screen  ">
      <div className="h-[15%] fixed w-full  bg-blue-500 flex justify-center items-center">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="w-[5%] rounded-full bg-blue-100 ml-2 h-[35%]  flex justify-center items-center text-xl"
        >
          back
        </div>
        <div className="w-[95%]  flex justify-center items-center">
          <h1 className="text-white text-[4vw] ">
            ................. Create User ...................
          </h1>
        </div>
      </div>
      <div className="w-full h-[85%] pt-[19vh]   flex justify-center items-start">
        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 mt-5 border-black w-[65%] h-[85%] flex flex-col items-center justify-around"
        >
          <div className="flex w-[30vw] justify-around h-[7vh] items-center ">
            <h1>First Name</h1>
            <input
              onChange={(e) => {
                setFName(e.target.value);
              }}
              value={fName}
              type="text"
              placeholder="Enter name...."
              className="w-[15vw] h-[90%] border-2 border-black rounded-full px-5"
            />
          </div>
          <div className="flex w-[30vw] justify-around h-[7vh] items-center ">
            <h1>Last Name</h1>
            <input
              onChange={(e) => {
                setlName(e.target.value);
              }}
              value={lName}
              type="text"
              placeholder="Enter Last name...."
              className="w-[15vw] h-[90%] border-2 border-black rounded-full px-5"
            />
          </div>
          <div className="flex w-[30vw] justify-around h-[7vh] items-center ">
            <h1>Email</h1>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="text"
              placeholder="Enter Email...."
              className="w-[15vw] h-[90%] border-2 border-black rounded-full px-5"
            />
          </div>
          <div className="flex w-[30vw] justify-around h-[7vh] items-center ">
            <h1>Phone</h1>
            <input
              onChange={(e) => {
                setphone(e.target.value);
              }}
              value={phone}
              type="text"
              placeholder="Enter Phone...."
              className="w-[15vw] h-[90%] border-2 border-black rounded-full px-5"
            />
          </div>
          <div className="flex w-[30vw] justify-around h-[7vh] items-center ">
            <h1>Address</h1>
            <input
              onChange={(e) => {
                setAdd(e.target.value);
              }}
              value={add}
              type="text"
              placeholder="Enter Address...."
              className="w-[15vw] h-[90%] border-2 border-black rounded-full px-5"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-[10vw] h-[5vh] rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
