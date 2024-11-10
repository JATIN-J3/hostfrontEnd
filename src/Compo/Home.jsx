import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const btn = [
    {
      title: "Add User",
    },
    {
      title: "See All User",
    },
  ];
  const navigate = useNavigate();
  const handleClick = (title) => {
    if (title === "Add User") {
      navigate("/add");
    }
    if (title === "See All User") {
      navigate("/getAll");
    }
  };
  return (
    <div className="w-full h-screen bg-red-50">
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
            .................Full Stack...................
          </h1>
        </div>
      </div>
      <div className="w-full h-[100%] py-[20vh] bg-white flex justify-around items-start  py-[15vh]">
        {btn.map((item) => (
          <button
            onClick={() => handleClick(item.title)}
            className="bg-blue-500 text-white w-[15vw] h-[8vh] rounded-full hover:bg-black"
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
