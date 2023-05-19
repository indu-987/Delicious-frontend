import React, { useState } from "react";
import TitleCompo from "./TitleCompo";
import "../Styles/Addfood.css";
import axios from "axios";
import food from "../Images/variety.jpg"
import { useNavigate } from "react-router-dom";

const AddFood = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [summery, setSummery] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const addPost = (e) => {
    e.preventDefault();
    let data = { author, title, image, summery, location };
    axios.post("http://localhost:4000/addfood", data).then((res) => {
      alert(res.data.message);
    });
    navigate("/portal/foods");
  };
  return (
    <div>
      <TitleCompo  title="Add Food"/>
      <div className="AddDiv">
        

        <form className="fom" onSubmit={addPost} >
          <h1 className="addtitle" style={{marginLeft:'80px'}}>ADD FOOD</h1>
          <label >Author</label>
          <input
          className="inpbx"
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Author Name"
            required
          />

          <label>Title</label>
          <input
          className="inpbx"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            required
            placeholder="Title of the Food"
          />

          <label>Image</label>
          <input
          className="inpbx"
            onChange={(e) => setImage(e.target.value)}
            type="text"
            required
            placeholder="Link of the Image"
          />

          <label>Summary</label>
          <input 
          className="inpbx"
            onChange={(e) => setSummery(e.target.value)}
            placeholder="Summary of the Food"
            required
          ></input>

          <label>Location</label>
          <input
          className="inpbx"
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            required
            placeholder="Location of the Food"
          />

          <button className="addbutton">Submit Post</button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
