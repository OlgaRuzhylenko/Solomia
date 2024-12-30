import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import indiiskyi150 from "../../../images/batik/classic/16.jpg";
import css from "./Indiiskyi150.module.css";

export default function Indiiskyi150() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.indiiskyi150Section}>
        <div className="container">
          <div className={css.indiiskyi150Box}>
            <img
              src={indiiskyi150}
              alt="пачка чаю Батік Індійський чай 100 пакетиків"
              className={css.indiiskyi150Img}
            />
            <div className={css.indiiskyi150Wrapper}>
              <h1 className={css.indiiskyi150Title}>
                Batik <br />
                <span>ІНДІЙСЬКИЙ</span>
              </h1>
              <h2 className={css.indiiskyi150Subtitle}>
                Чай чорний індійський дрібний,
                <br />
                100 пакетиків
              </h2>
              <p className={css.indiiskyi150Text}>
                Справжній індійський чай з найкращих чайних садів Індії з
                унікальними смако-ароматичними властивостями, що цінуються в
                усьому світі. Він дивним чином поєднує в собі терпкість і
                м’якість, фруктові нотки з трав’яними, пікантну кислинку з
                приємним післясмаком. А легкий і свіжий аромат одночасно повний
                і насичений.
              </p>
              <p className={css.indiiskyi150Text}>
                Насичений, пікантно – кислуватий смак з фруктово – карамельними
                відтінками.
              </p>
              <ul className={css.indiiskyi150List}>
                <li className={css.indiiskyi150Item}>
                  <p className={css.indiiskyi150ItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.indiiskyi150Item}>
                  <p className={css.indiiskyi150ItemText}>Маса нетто: 150 г</p>
                </li>
                <li className={css.indiiskyi150Item}>
                  <p className={css.indiiskyi150ItemText}>
                    Кількість пакетиків: 100 штук
                  </p>
                </li>
                <li className={css.indiiskyi150Item}>
                  <p className={css.indiiskyi150ItemText}>
                    Країна походження: Індія
                  </p>
                </li>
                <li className={css.indiiskyi150Item}>
                  <p className={css.indiiskyi150ItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.indiiskyi150Item}>
                  <p className={css.indiiskyi150ItemText}>
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
