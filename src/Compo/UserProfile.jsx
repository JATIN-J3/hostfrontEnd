import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ user }) => {
  console.log("user", user);
  const [fName, setFName] = useState(user.firstName);
  const [lName, setlName] = useState(user.lastName);
  const [phone, setphone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [add, setAdd] = useState(user.address);
  //const navigate = useNavigate();
  const fullname = fName + lName;
  return (
    <div className="w-[25vw] px-10 h-[50vh] border-2 border-black  rounded-3xl flex flex-col justify-around items-center text-[1.7vw] font-serif font-extralight ">
      <h1>{fName + lName}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
      <h1>{add}</h1>
    </div>
  );
};

export default UserProfile;
