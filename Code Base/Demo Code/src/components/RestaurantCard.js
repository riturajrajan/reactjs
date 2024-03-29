import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, id } = props.resData;
  return (
    <div className="res-card">
      <Link to={"/restaurant/" + id}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        style={{ width: "100%" }}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} rating</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      </Link>
    </div>
  );
};

export default RestaurantCard;
