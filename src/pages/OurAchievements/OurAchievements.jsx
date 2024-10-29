import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import img1 from "../../images/achievments/achievements_view_1.jpg";
import img2 from "../../images/achievments/achievements_view_2.jpg";
import img3 from "../../images/achievments/achievements_view_3.jpg";
import img4 from "../../images/achievments/achievements_view_4.jpg";
import img5 from "../../images/achievments/achievements_view_5.jpg";
import img6 from "../../images/achievments/achievements_view_6.jpg";
import css from "./OurAchievements.module.css";

export default function OurAchievements() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.ourAchievementsSection}>
        <div className={css.ourAchievementsBGI}></div>
        <div className="container">
          <div className={css.ourAchievementsBox}>
            <h1 className={css.ourAchievementsTitle}>Batik-Чай року 2023</h1>
            <p className={css.ourAchievementsText}>
              Чай Batik здобув перемогу у загальнонаціональному рейтингу
              найкращих товарів та послуг у номінації «Чай року 2023», за що
              отримав почесну відзнаку «Вибір Країни». Ми вдячні нашим
              споживачам за довіру і вибір нашої продукції. Ми й надалі будемо
              продовжувати випускати чаї найвищої якості з турботою про
              українців.
            </p>
            <p className={css.ourAchievementsText2}>
              Діяльність компанії проаналізована експертами Аналітичного центру
              «Вибір Країни» за авторською технологією «Людських уподобань».
            </p>
            <h2 className={css.ourAchievementsSubTitle}>
              Аналіз включає оцінку основних показників, які є важливими для
              споживачів:
            </h2>
            <ul className={css.ourAchievementsList}>
              <li className={css.ourAchievementsListItem}>
                <p className={css.ourAchievementsListtext}>
                  -асортимент продукції,
                </p>
              </li>
              <li className={css.ourAchievementsListItem}>
                <p className={css.ourAchievementsListtext}>
                  -репутація бренду,
                </p>
              </li>
              <li className={css.ourAchievementsListItem}>
                <p className={css.ourAchievementsListtext}>-популярність,</p>
              </li>
              <li className={css.ourAchievementsListItem}>
                <p className={css.ourAchievementsListtext}>
                  -якість обслуговування,
                </p>
              </li>
              <li className={css.ourAchievementsListItem}>
                <p className={css.ourAchievementsListtext}>
                  -оцінка онлайн-ресурсів.
                </p>
              </li>
            </ul>
            <p className={css.ourAchievementsDescription}>
              Отримання відзнаки «Вибір країни» — велика відповідальність для
              нас! Хочемо подякувати за вибір та довіру кожному українцю. Бо
              саме визнання тих, хто обирає чай Batik, мотивує нас на розвиток
              та створення нових продуктів. Увесь колектив компанії відчуває
              гордість та розуміє цінність данної нагороди. І прагне й надалі
              наполегливо працювати заради розвитку нашого бренду і на користь
              українському споживачу!
            </p>
          </div>
          <ul className={css.ourAchievementsImgList}>
            <li className={css.ourAchievementsImgListItem}>
              <img
                src={img1}
                alt="методика визначення кращих компаній на основі якості товарів та послуг"
              />
            </li>
            <li className={css.ourAchievementsImgListItem}>
              <img
                className={css.ourAchievementsImage}
                src={img2}
                alt="напис Батік та пунки визначення  кращих компаній: аналіз відкритих джерел, оцінка якості товару або послуги, оцінка якості обслуговування, визначення загального балу"
              />
            </li>
            <li className={css.ourAchievementsImgListItem}>
              <img
                src={img3}
                alt="сертифікат експертної оцінки Вибір Країни"
                className={css.ourAchievementsImage}
              />
            </li>
            <li className={css.ourAchievementsImgListItem}>
              <img
                src={img4}
                alt="диплом Вибір Країни"
                className={css.ourAchievementsImage}
              />
            </li>
            <li className={css.ourAchievementsImgListItem}>
              <img
                src={img5}
                alt="фото директора компанії із дипломом"
                className={css.ourAchievementsImage}
              />
            </li>
            <li className={css.ourAchievementsImgListItem}>
              <img
                src={img6}
                alt="фото працівників компанії із дипломом"
                className={css.ourAchievementsImage}
              />
            </li>
          </ul>
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}
