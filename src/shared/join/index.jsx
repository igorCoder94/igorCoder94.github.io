import Borders from "../borders";
import blueDoc from "../../assets/icons/pageMain/join/page-blue.svg";
import yellowDoc from "../../assets/icons/pageMain/join/page-yellow.svg";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";
import { useEffect, useState } from "react";

const Join = ({ togglePopup }) => {
  const [showJob, setShowJob] = useState(true);
  const location = useLocation();

  function openPopup() {
    togglePopup();
  }

  useEffect(() => {
    if (location.pathname.includes("request")) {
      setShowJob(false);
    }
  }, []);

  return (
    <section className="join__section">
      <div className="join__container container">
        <div className="join__title-container">
          <div className="join__doc join__blue">
            <img className="join__img" src={blueDoc} alt="" />
            <h3 className="join__title">Справочая информация</h3>
            <div className="join__text">
              Ознакомитесь с базовой информацией о возможностях платформы и
              работе в ней.
            </div>
            <div className="join__links">
              <a
                className="join__text join__link"
                href="/Функциональные характеристики.pdf"
                download
              >
                Функциональные требования >
              </a>
              <a
                className="join__text join__link"
                href="/Руководство пользователя.pdf"
                download
              >
                Руководство пользователя >
              </a>
              <a
                className="join__text join__link"
                href="/Руководство администратора.pdf"
                download
              >
                Руководство администратора >
              </a>
              <a
                className="join__text join__link"
                href="/Unios. Презентация 26.09.23.pdf"
                download
              >
                Презентация >
              </a>
            </div>
          </div>
        </div>
        <div className="join__docs">
          <div className="join__doc join__yellow">
            <img className="join__img" src={yellowDoc} alt="" />
            <h3 className="join__title">Начните работу</h3>
            <div className="join__text-yellow">
              Свяжитесь с нами, чтобы получить доступ
              <br />к полноценной системе мониторинга и диспетчеризации
              <br />
              <br />
              Или мы можем разработать индивидуальный
              <br />
              пакет специально для вашего бизнеса
            </div>
            <div className="join__links">
              {showJob ? (
                <Link className="join__text join__link" to="/request">
                  Подобрать план >
                </Link>
              ) : null}
              <div onClick={openPopup} className="join__text join__link">
                {" "}
                Связаться с нами >
              </div>
            </div>
          </div>
        </div>
        <Borders />
      </div>
      <div className="join__rectangle"></div>
    </section>
  );
};

export default Join;
