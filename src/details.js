import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, useParams } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://interviewtst.herokuapp.com/get-all-users")
      .then((res) => {
        setUser(res.data.User_Details);
      })

      .catch((err) => {
        console.log(err);
      });
  });

  const rest = user.find((data) => data.user_id === Number(id));
  console.log(rest);

  return (
    <>
      <div>
        <h4>Profile</h4>

        <li>{rest.email} </li>
        <li>{rest.firstname} </li>
        <li>{rest.lastname} </li>
        <li>{rest.job_area} </li>
        <li>{rest.job_title} </li>
        <li>{rest.job_type} </li>
        <li>{rest.birthdate} </li>
      </div>
      resr
    </>
  );
};

export default App;
