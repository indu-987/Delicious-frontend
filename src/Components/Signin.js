import React, { useState } from "react";
import "../Styles/Signin.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signin = (e) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    let data = { email, password };
    if (email && password) {
      axios.post("http://localhost:4000/login", data).then((res) => {
        if (res.data.status == 200) {
          navigate("/portal");
        } else {
          alert(res.data.message);
        }
      });
    } else {
      alert("Please fill all fields");
    }
  };
  return (
    <div className="content" >
      <div
        className="header"
        style={{ justifyContent: "space-between", display: "flex" }}
      >
        <h1 style={{ marginLeft:'280px', marginTop:'20px' ,fontFamily:'cursive',fontSize:'40px' }}>Foodie</h1>
        <div >
          <h5
            style={{
              fontSize:'15px',
              justifyContent: "space-between",
              display: "flex",
              marginRight: "260px",
              marginTop: "40px",
              fontFamily:'serif'
            }}
          >
            New User ?{" "}
            <Link
              style={{
                marginLeft: "10px",
                marginLeft:'20px',
                fontFamily:'serif',
                color:"blue"
              }}
              to="/signup" 
            >
              Sign Up
            </Link>
          </h5>
        </div>
      </div>
      <div className="container">
        <div className="imgsec">
          <img
            style={{ marginLeft:'200px', display: "flex", width: "600px", height: "600px" }}
            src="attachment.png"
            className="imgwh"
            alt="err"
          />
        </div>

        <div
          className="contents"
          style={{
            display: "flex",
            width: "600px",
            height: "500px",
            marginLeft: "40px",
          }}
        >
          <div className="rowcontent" >
            <div className="coloumndata" >
              <div className="mb-4" >
                <h2 style={{fontWeight:'bolder',marginTop:'80px',fontFamily:'serif',fontSize:'40px'}}>Welcome Back!</h2>
                <p className="mb-4"  style={{ color:'grey'}}>Login to continue</p>
              </div>
              <form onSubmit={signIn}>
                <div className="ipbox">
                  <input
                    style={{
                      width: "250px",
                      height: "35px",
                      border: "1px solid black",
                      marginTop:'30px'
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Username@gmail.com"
                  />
                </div>
                <div className="ipbox">
                  <input
                    style={{
                      width: "250px",
                      height: "35px",
                      border: "1px solid black",
                      marginTop:'15px'
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="subbtn">
                  <button
                    style={{
                      color: "white",
                      background: "blue",
                      border: "none",
                      marginTop:'15px',
                      cursor: "pointer",
                      borderRadius: "10px",
                      width: "90px",
                      height: "40px",
                      marginLeft:'70px'
                    }}
                    className="loginbtn"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
