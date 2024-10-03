import { NavLink } from "react-router-dom";
import css from "./News.module.css";

export default function News() {
  return (
    <section className={css.newsSection}>
      <div className="container">
        <h1>Новини</h1>
        <ul>
          <li>
            <p>новини</p>
            <NavLink>
              <img src="" alt=""></img>
              <h2>
                Купуйте у магазинах мережі АТБ ” Batik”З Чорною Смородиною” та
                “Batik” Ерл Грей” у зручних пакетиках для заварювання!
              </h2>
            </NavLink>
            <h3>
              Відчуйте всю палітру смаків та отримайте насолоду від улюблених
              чайних композицій!
            </h3>
            <NavLink>
              <p>Читати далі »</p>
            </NavLink>
            <p>24 Листопада, 2023</p>
          </li>
          <li>
            <p>новини</p>
            <NavLink>
              <img src="" alt="" />
              <h2></h2>
              <h3></h3>
              <p></p>
              <p></p>
            </NavLink>
          </li>
          <li>
            <p>новини</p>
            <NavLink>
              <img src="" alt="" />
              <h2></h2>
              <h3></h3>
              <p></p>
              <p></p>
            </NavLink>
          </li>
          <li>
            <p>новини</p>
            <NavLink>
              <img src="" alt="" />
              <h2></h2>
              <h3></h3>
              <p></p>
              <p></p>
            </NavLink>
          </li>
          <li>
            <p>новини</p>
            <NavLink>
              <img src="" alt="" />
              <h2></h2>
              <h3></h3>
              <p></p>
              <p></p>
            </NavLink>
          </li>
          <li>
            <p>новини</p>
            <NavLink>
              <img src="" alt="" />
              <h2></h2>
              <h3></h3>
              <p></p>
              <p></p>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}
