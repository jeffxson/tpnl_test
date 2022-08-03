import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, useParams } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState([]);
  const params = useParams();

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

  return (
    <>
      <div> </div>
    </>
  );
};

export default App;
