import React from "react";
import { NavLink } from "react-router-dom";
import {MenuItemData} from "../../data/MenuItemData"
import "./index.css";

export const Menu = () => {
  const activeClassName = "active";
  const activeStyle = {color: "#000000", fill: "#000000", fontWeight: "bold"}
  const inactiveStyle = {color: "#C2C2C9", fill: "#C2C2C9" }
  return (
    <div className="container__menu">
      <h2 className="title__menu">Menu</h2>

      <ul className="list__menu">
        {MenuItemData.map((element,index) => (
          <li className="list__item" key={index}>
            <NavLink
              key={index}
              to={element.path}
              className={({isActive}) => (isActive ? activeClassName : '')}
              style={({ isActive }) =>
                isActive
                  ? activeStyle
                  : inactiveStyle
              }
              end
            >
              {element.icon}
              <p>{element.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
