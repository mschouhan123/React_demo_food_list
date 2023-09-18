import "./style.css";
import Menu from "./MenuAPI";
import { useState } from "react";
import { MenuCard } from "./MenuCard";
const NavBar = ({filterItem}) => {
//   const [menuData, setMenuData] = useState(Menu);


  return (
    <>
      <div>
        <button onClick={()=> {filterItem('breakfast')}}> Breakfast</button>
        <button onClick={()=> {filterItem('evening')}}> Evening</button>
        <button onClick={()=> {filterItem('lunch')}}> Lunch</button>
        <button onClick={()=> {filterItem('all')}}> all</button>
      </div>
    </>
  );
};

export default NavBar;
