import React, { useState } from "react";
import "../Styles/Signin.css";
import axios from "axios";
import signup from "../Images/si.jpg"
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    let data = { name, email, password, confirmPassword };
    if (name && email && password && password === confirmPassword) {
      axios.post("http://localhost:4000/signup", data).then((res) => {
        
        alert(res.data.message);
        navigate("/");
      });
    } else {
      alert("Please fill all fields");
    }
  };
  return (
    <div className="content" style={{ marginLeft:"50px" }}>
      <div
        className="header"
        style={{ justifyContent: "space-between", display: "flex" }}
      >
        <h1 style={{ marginLeft:'280px', fontFamily:"cursive", fontSize:'40px', marginTop:'30px' }}>Foodie</h1>
        <div>
          <h5
            style={{
              justifyContent: "space-between",
              display: "flex",
             
              marginRight: "199px",
              marginTop: "50px",
            }}
          >
            Already User ?{" "}
            <Link
              style={{
                marginLeft: "20px",
              }}
              to="/"
            >
              Sign In
            </Link>
          </h5>
        </div>
      </div>
      <div className="container">
        <div className="rowcontent">
          <div className="coloumndata" style={{marginLeft:'260px'}}>
            <div className="col-md-8" style={{width:'340px'}} >
              <div className="mb-4">
                <h2 style={{fontWeight:'bolder',marginTop:'60px',}}>Welcome Back!</h2>
                <p className="mb-4" style={{ color:'grey'}}>First Sign Up then Login</p>
              </div>
              <form onSubmit={signUp}>
                <div className="ipbox" style={{marginTop:'70px'}}>
                  <input
                    style={{
                      width: "250px",
                      height: "35px",
                      border: "1px solid black",
                    }}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
                <div className="ipbox">
                  <input
                    style={{
                      width: "250px",
                      height: "35px",
                      border: "1px solid black",
                    }}
                    type="text"
                    placeholder="Username@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="ipbox">
                  <input
                    style={{
                      width: "250px",
                      height: "35px",
                      border: "1px solid black",
                    }}
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="ipbox">
                  <input
                    style={{
                      width: "250px",
                      height: "35px",
                      border: "1px solid black",
                    }}
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="subbtn">
                  <button
                    style={{
                      color: "white",
                      background: "blue",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "10px",
                      width: "90px",
                      height: "40px",
                      marginLeft:'70px'
                    }}
                    className="loginbtn"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="imgsec">
          <img
         style={{ width: "500px", height: "420px",marginRight:'300px' }}            src={signup}
            alt="err"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
