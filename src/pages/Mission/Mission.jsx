import { NavLink } from "react-router-dom";
import missionLogo from "../../images/missionLogo.png";
import css from "./Mission.module.css";

export default function Mission() {
  return (
    <div>
      <section className={css.missionSection}>
        <div className={css.mission}>
          <h1 className={css.mainTitle}>Наша місія, бачення та цінності</h1>
          <img
            src={missionLogo}
            alt="місія бачення цінності"
            className={css.missionImg}
          />
        </div>

        <div className={css.firstMissionListWrap}>
          <div className="container">
            <div className={css.firstMissionList}>
              <h2 className={css.title}>Наше Бачення</h2>
              <p className={css.description}>
                Стати еталоном галузі продуктів харчування, компанією, яка задає
                стандарти і є орієнтиром для виробників продуктів у всьому
                світі, що дозволить:
              </p>
              <ul className={css.missionlist}>
                <li className={css.missionItem}>
                  <h3 className={css.subTitle}>Товариству</h3>
                  <p className={css.text}>
                    міняти якість життя людей на краще, задаючи стандарти
                    культури виробництва, торгівлі та соціальної
                    відповідальності бізнесу
                  </p>
                </li>
                <li className={css.missionItem}>
                  <h3 className={css.subTitle}>Споживачам</h3>
                  <p className={css.text}>
                    отримувати задоволення від кожної покупки та бути впевненими
                    у незмінній високій якості нашої продукції
                  </p>
                </li>
                <li className={css.missionItem}>
                  <h3 className={css.subTitle}>Персоналу</h3>
                  <p className={css.text}>
                    створити такі умови роботи, завдяки яким співробітники
                    розвиваються разом з Компанією і прагнуть до максимальної
                    віддачі, отримуючи гідну оцінку особистого внеску в розвиток
                    і процвітання компанії
                  </p>
                </li>
                <li className={css.missionItem}>
                  <h3 className={css.subTitle}>Акціонерам</h3>
                  <p className={css.text}>
                    забезпечувати зростання прибутку Компанії в довгостроковій
                    перспективі, надаючи можливість мати матеріальні та
                    соціальні дивіденди від участі в одній з найбільш динамічно
                    розвиненої соціально-орієнтованої компанії в світі
                  </p>
                </li>
                <li className={css.missionItem}>
                  <h3 className={css.subTitle}>Партнерам</h3>
                  <p className={css.text}>
                    з впевненістю вибудовувати довгострокові відносини, що
                    базуються на відкритій та взаємовигідній співпраці
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={css.secondMissionListWrap}>
          <div className="container">
            <div className={css.secondMissionList}>
              <h2 className={css.title}>Наші Цінності</h2>
              <ul className={css.missionlist}>
                <li className={css.missionItem}>
                  <h3 className={css.subTitle}>Амбіції</h3>
                  <p className={css.text}>Бути кращими серед кращих</p>
                </li>
                <li className={css.missionItem}>
                  <h3 className={css.subTitle}>Лідерство</h3>
                  <p className={css.text}>
                    Сміливо створювати краще майбутнє для себе і для України
                  </p>
                </li>
                <li className={css.missionItem}>
                  <h3 className={css.subTitle}>Повна віддача</h3>
                  <p className={css.text}>
                    Бути вірними справі розумом та серцем
                  </p>
                </li>
                <li className={css.missionItem}>
                  <h3 className={css.subTitle}>Відповідальність</h3>
                  <p className={css.text}>
                    Нести повну відповідальність за все, що ми виготовляємо і
                    продаємо
                  </p>
                </li>
                <li className={css.missionItem}>
                  <h3 className={css.subTitle}>Співпраця</h3>
                  <p className={css.text}>
                    Створювати такі умови роботи, щоб кожен в колективі міг
                    проявляти себе
                  </p>
                </li>
                <li className={css.missionItem}>
                  <h3 className={css.subTitle}>Інновації</h3>
                  <p className={css.text}>
                    Шукати, мріяти, створювати і відчувати радість творчості
                  </p>
                </li>
                <li className={css.missionItem}>
                  <h3 className={css.subTitle}>Якість</h3>
                  <p className={css.text}>
                    Все, що ми робимо, ми робимо на “відмінно”
                  </p>
                </li>
                <li className={css.missionItem}>
                  <h3 className={css.subTitle}>Піклування про майбутнє</h3>
                  <p className={css.text}>
                    Ми виготовляємо і продаємо те, що з задоволенням будуть пити
                    наші діти
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
