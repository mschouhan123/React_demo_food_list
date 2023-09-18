import "./style.css";
import Menu from "./MenuAPI";
import { useState } from "react";
import { MenuCard } from "./MenuCard";
import NavBar from "./NavBar";

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);

  function filterItem(params) { 
    const retData = Menu.filter((item) => {

      if(params === "all"){
        return item.category;
      }else{
        return item.category === params;
      }
    });

    setMenuData(retData);
  }
  return (
    <>
      <div>
        <NavBar filterItem={filterItem} />
        <MenuCard menuData={menuData} />
      </div>
    </>
  );
};

export default Resturant;
