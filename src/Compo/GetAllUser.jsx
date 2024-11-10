import React, { Profiler, useEffect, useState } from "react";
import UserProfile from "./UserProfile";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../Confiq/Api";

const GetAllUser = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await axios.get("https://hostbackend-production.up.railway.app/all");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getAll();
  }, []);
  return (
    <div className="w-full  h-screen bg-red-50 ">
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
            ................. All USERS ...................
          </h1>
        </div>
      </div>
      <div className="w-full pt-[19vh]  bg-white flex justify-around items-start gap-5 flex-wrap  py-[15vh]">
        {data.map((item) => (
          <UserProfile user={item} />
        ))}
      </div>
    </div>
  );
};

export default GetAllUser;
