import "./App.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://fir-realtime-reactjs-2e885-default-rtdb.asia-southeast1.firebasedatabase.app/simpleForm.json",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // body data type must match "Content-Type" header
      }
    );
    res.json(); // parses JSON response into native JavaScript objects
    if (res.statusText == "OK") {
      alert("Data Inserted Successfully");
      setFormData({
        username: "",
        password: "",
      });
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <div className="conatiner">
      <TextField
        label="Username"
        onChange={handleChange}
        name="username"
        value={formData.username}
        className="textfieldd"
      />

      <TextField
        label="Password"
        name="password"
        onChange={handleChange}
        className="textfieldd"
        value={formData.password}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default App;
