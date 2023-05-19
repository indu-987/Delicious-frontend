import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/FoodDetails.css";

import axios from "axios";

const FoodDetails = () => {
  const [singlePost, setSinglePost] = useState({});
  let params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/posts/${params._id}`
        );
        setSinglePost(response.data.singlePost);
        console.log(response.data.singlePost);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [params._id]);

  const { title, author, image, location, summery } = singlePost;

  const handleLocationClick = () => {
    window.open(location, "_blank");
  };

  return (
    <div className="card-container">
      <div className="image-container">
        <img  style={{height:'150px'}} className="round" src={image} />
      </div>
      <div className="details">
        <div className="price" style={{position:'absolute',top:'420px' ,marginLeft:"250px"}}>
          <p>
            <span className="detailNames">Title: {title }</span>
          </p>
          <p>
            <span className="detailNames">Author: {author}</span>
          </p>
          <p>
            <span className="detailNames">Summary: {summery}</span>
          </p>
          <p>
            <span className="detailNamess">
            Location:{" "}
              <Link
              style={{color:'blue'}}
                to={location}
                onClick={handleLocationClick}
              >
                Click The Link To Find The Location
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
