// import React from 'react'

// const Navbar = ({filterItem, menuList}) => {
//   return (
//     <>
//         <div className="navbar">
//              <div className="btn-grp">

//              {
//                 menuList.map((curElem) => {
//                     return (
//                         <button className="btn-group__item"
//                          onClick={()=> filterItem({curElem})}>
//                          {curElem}
//                          </button>
//                     )
//                 })
//              }
               
//              </div>
//         </div>
//     </>
//   );
// };

// export default Navbar

import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;