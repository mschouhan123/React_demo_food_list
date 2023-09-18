import React from "react";
// import img from "../../../public/images/img.jpeg"
export const MenuCard = ({ menuData }) => {
//   console.log(img);

  return (
    <>
    <section className="main-card--cointainer">
        

      {menuData.map((curElem) => {
        return (
          <>
            <div className="card-container">
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{curElem.id}</span>
                  <span className="card-auther subtle">{curElem.category}</span>
                  <h2 className="card-title">{curElem.name}</h2>
                  <span className="card-description subtle">{curElem.description}</span>
                  <div className="card-read">Read</div>
                </div>
                {/* <img src={img} alt="images" className="card-media"/> */}

                <span className="card-tag" subtle>
                  Order Now
                </span>
              </div>
            </div>
          </>
        );
      })}
       </section>
    </>
  );
};
