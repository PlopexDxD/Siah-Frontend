import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/images/home.svg";
import { ReactComponent as Pills } from "../../assets/images/pills.svg";
import { ReactComponent as Rotate } from "../../assets/images/rotate.svg";
// import image from '../../assets/images/home.svg'
import "./index.css";

export const Menu = () => {
  const activeClassName = "active";
  const activeStyle = {color: "#000000", fill: "#000000", fontWeight: "bold"}
  const inactiveStyle = {color: "#C2C2C9", fill: "#C2C2C9" }
  return (
    <div className="container__menu">
      <h2 className="title__menu">Menu</h2>

      <ul className="list__menu">
        {menuList.map((element,index) => (
          <li className="list__item" key={index}>
            <NavLink
              key={element.to}
              to={element.to}
              className={({isActive}) => (isActive ? activeClassName : '')}
              style={({ isActive }) =>
                isActive
                  ? activeStyle
                  : inactiveStyle
              }
              end
            >
              {element.image}
              <p>{element.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const menuList = [];

menuList.push({
  title: "Inicio",
  to: "/",
  image: <Home />,
});

menuList.push({
  title: "Tratamiento de Emergencia",
  to: "/tratamiento",
  image: <Pills />,
});
menuList.push({
  title: "Devolucion",
  to: "/Devoluciones",
  image: <Rotate />,
});
