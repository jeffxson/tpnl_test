import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState([]);
  const [pic, setPic] = useState([]);
  const [picc, setPicc] = useState([]);
  const [car, setCar] = useState([]);
  const [phone, setPhoneNo] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://interviewtst.herokuapp.com/get-selected-user-details/${id}`)
      .then((res) => {
        setUser(res.data.User_Details);
        setPic(res.data.Related_Pictures_Count);
        setPicc(res.data.Related_Pictures);
        setCar(res.data.Vehicles_Details);
        // console.log(res.data.Vehicles_Details);
      })

      .catch((err) => {
        console.log(err);
      });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      phone_no: phone,
    };
    const phone_no = JSON.stringify(phone);
    axios.put(
      `https://interviewtst.herokuapp.com/update-user-phone_no/${id}`,
      data
    );

    console.log(phone_no);
  };

  return (
    <>
      <div>
        <h4>Profile</h4>
        <form onSubmit={handleSubmit}>
          <label>
            <span> Update phone:</span>
            <input type="text" onChange={(e) => setPhoneNo(e.target.value)} />
          </label>
          <button>Update Number</button>
        </form>

        {user.map((data) => (
          <div key={data.id}>
            <li>{data.firstname}</li>
            <li>{data.lastname}</li>
            <li>{data.job_area}</li>
            <li>{data.job_title}</li>
            <li>{data.phone_no}</li>
            <li>{data.email}</li>
          </div>
        ))}
        {pic.map((data) => (
          <div key={data.id}>
            <li>{data.picture_count}</li>
          </div>
        ))}
        {picc.map((data) => (
          <div key={data.id}>
            <li>
              {" "}
              <img src={data.related_pictures} width={100} alt="horse" />
            </li>
          </div>
        ))}
      </div>
      <h4>Vehicle Details</h4>
      <div className="good">
        <h5>Vehicle Make</h5>
        {car.map((data) => (
          <li>{data.vehicle_make}</li>
        ))}

        <h5>Vehicle vin</h5>
        {car.map((data) => (
          <li>{data.vehicle_vin}</li>
        ))}

        <h5>Vehicle type</h5>
        {car.map((data) => (
          <li>{data.fuel_type}</li>
        ))}
      </div>
    </>
  );
};

export default App;
