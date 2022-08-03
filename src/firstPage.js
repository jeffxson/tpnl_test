import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState([]);
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
  console.log(user);

  return (
    <>
      <div>
        <h5>Email</h5>
        <ul>
          {user.map((data) => (
            <li key={data.id}>{data.email} </li>
          ))}
        </ul>
        <h5>firstname</h5>
        <ul>
          {user.map((data) => (
            <Link to={`/userdetals/${data.user_id}`}>
              <li key={data.id}>
                {" "}
                <button>{data.email}</button>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
