import Header from "../../components/Header/Header";
import css from "./AboutUs.module.css";
import aboutUsImg from "../../images/aboutUs/aboutUs.jpg";

export default function AboutUs() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.aboutSection}>
        <img
          src={aboutUsImg}
          alt="чашка із чаєм та чашка із кавою"
          className={css.aboutUsImg}
        />
        <div className="container">
          <div className={css.aboutWrapper}>
            <h1 className={css.titleAbout}>Компанія SOLOMIA</h1>
            <p className={css.textMainAbout}>
              Бути стандартом українського ринку бакалійних продуктів.
              Доставляти енергію та користь природних продуктів харчування до
              кожної української родини.
            </p>
            <p className={css.textAbout}>
              Компанія SOLOMIA є національним виробником і дистриб’ютором
              високоякісних продуктів харчування. Дистриб’юторський портфель
              компанії представлено як власними брендами ТМ ASKOLD, ТМ BATIK, ТМ
              Домашній чай, так і брендами, що ексклюзивно імпортуються з різних
              країн світу. Наявність власної системи дистриб’юції та
              представництв в усіх регіонах України сприяють успішному розвитку
              компанії в каналах збуту.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
