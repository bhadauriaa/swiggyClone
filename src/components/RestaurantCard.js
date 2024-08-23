import React from "react";
const RestaurantCard=({resData})=>{
    const {name,cuisines,avgRating,sla,cloudinaryImageId,costForTwo}=resData.info;
    return(
        <div className="restaurant-card">
            <img
                className="res-logo"
                alt="res-logo"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                width="190px"
            />
            <h3>{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>delivery Time: {sla.deliveryTime} mins</h4>
            <h4>{costForTwo}</h4>
            
        </div>
    )
}
export default RestaurantCard;