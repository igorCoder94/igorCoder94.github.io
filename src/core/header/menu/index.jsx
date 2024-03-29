import React, { useRef } from "react";
import { useOnClickOutside } from "../../../hooks/hooks";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as IconClose } from "../../../assets/icons/close.svg";
import { ReactComponent as Icon } from "../../../assets/icons/logo-mobile-black.svg";
import { ReactComponent as IconArrow } from "../../../assets/icons/arrow-right-black.svg";
import { useLocation } from "react-router-dom";

// import { useOnClickOutside } from "../../hooks";

const Menu = ({ open, toggleMenu }) => {
  const node = useRef(null);
  const toCloseMenu = true;
  const location = useLocation();
  const navigate = useNavigate();

  useOnClickOutside(node, () => toggleMenu(toCloseMenu));

  function scrollTo(element) {
    if (location.pathname === "/") {
      if (element) {
        document.getElementById(element)?.scrollIntoView({
          behavior: "smooth",
        });
        location.hash = "";
      } else {
        document.getElementById("App__container").scrollTo({
          top: 0,
        });
      }
    }
  }

  const close = (element) => {
    toggleMenu();

    if (element) {
      scrollTo(element);
    }
  };

  return (
    <div className="test" ref={node}>
      <div
        className={`menu__container ${open ? "menu__container--opened" : ""}`}
      >
        <div className="menu__header">
          <IconClose className="menu__close" onClick={() => close()} />
          <Link className="menu__icon" to="/">
            <Icon />
          </Link>
        </div>
        <div className="menu__links">
          <Link className="menu__link" to="/" onClick={() => close()}>
            Главная <IconArrow />
          </Link>
          <Link
            className="menu__link"
            to="/#scada"
            onClick={() => close("scada")}
          >
            Диспетчеризация <IconArrow />
          </Link>
          <Link
            className="menu__link"
            to="/#toir"
            onClick={() => close("toir")}
          >
            ТОиР
            <IconArrow />
          </Link>
          <Link
            className="menu__link"
            to="/#integration"
            onClick={() => close("news")}
          >
            Интеграция
            <IconArrow />
          </Link>
          <Link
            className="menu__link"
            to="/#control"
            onClick={() => close("control")}
          >
            Контроль
            <IconArrow />
          </Link>
          <Link
            className="menu__link"
            to="/#news"
            onClick={() => close("news")}
          >
            Новости
            <IconArrow />
          </Link>
          <Link
            className="menu__link"
            to="/#footer"
            onClick={() => close("footer")}
          >
            Контакты
            <IconArrow />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
