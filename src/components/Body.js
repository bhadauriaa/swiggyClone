import React from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/resObj";
const Body=()=>{

    
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resObj.map((restaurant,index)=>(
                    <RestaurantCard key={restaurant.info.index} resData={restaurant}/>
                ))}
                
            </div>
            
        </div>
    )
}
export default Body;