import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import indiiskyi50 from "../../../images/batik/classic/17.jpg";
import css from "./Indiiskyi25TB.module.css";

export default function Indiiskyi25TB() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.indiiskyi50Section}>
        <div className="container">
          <div className={css.indiiskyi50Box}>
            <img
              src={indiiskyi50}
              alt="пачка чаю Батік Індійський чай 25 пакетиків"
              className={css.indiiskyi50Img}
            />
            <div className={css.indiiskyi50Wrapper}>
              <h1 className={css.indiiskyi50Title}>
                Batik <br />
                <span>ІНДІЙСЬКИЙ</span>
              </h1>
              <h2 className={css.indiiskyi50Subtitle}>
                Чай чорний індійський дрібний,
                <br />
                25 пакетиків
              </h2>
              <p className={css.indiiskyi50Text}>
                Справжній індійський чай з найкращих чайних садів Індії з
                унікальними смако-ароматичними властивостями, що цінуються в
                усьому світі. Він дивним чином поєднує в собі терпкість і
                м’якість, фруктові нотки з трав’яними, пікантну кислинку з
                приємним післясмаком. А легкий і свіжий аромат одночасно повний
                і насичений.
              </p>
              <p className={css.indiiskyi50Text}>
                Насичений, пікантно – кислуватий смак з фруктово – карамельними
                відтінками.
              </p>
              <ul className={css.indiiskyi50List}>
                <li className={css.indiiskyi50Item}>
                  <p className={css.indiiskyi50ItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.indiiskyi50Item}>
                  <p className={css.indiiskyi50ItemText}>Маса нетто: 37,5 г</p>
                </li>
                <li className={css.indiiskyi50Item}>
                  <p className={css.indiiskyi50ItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.indiiskyi50Item}>
                  <p className={css.indiiskyi50ItemText}>
                    Країна походження: Індія
                  </p>
                </li>
                <li className={css.indiiskyi50Item}>
                  <p className={css.indiiskyi50ItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.indiiskyi50Item}>
                  <p className={css.indiiskyi50ItemText}>
                    Тип упаковки: картонна
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}
