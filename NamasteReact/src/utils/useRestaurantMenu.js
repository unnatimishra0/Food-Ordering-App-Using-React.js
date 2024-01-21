import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const RestaurantMenu=(resId) =>{

    const[resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu =async()=>{
        // const data =await fetch(MENU_API+resId)
        const data =await fetch(`http://localhost:3000/data2?id=${resId}`)

        // const data =await fetch(MENU_API)

        const json= await data.json();
        console.log(json);
        console.log(json.data)
        setResInfo(json);

    };
    return resInfo;
};
export default RestaurantMenu;










// const fetchMenu=async()=>{
  //   const data=await fetch (MENU_API + resId);
  //   // const data=await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4843&lng=80.3325332&restaurantId="+resId);

  //   // const data=await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4843&lng=80.3325332&restaurantId=74509&catalog_qa=undefined&submitAction=ENTER");
  //   // const data=await fetch ("http://localhost:8000/data");
  //   const json=await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };