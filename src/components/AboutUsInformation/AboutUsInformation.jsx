import css from "./AboutUsInformation.module.css";

export default function AboutUsInformation(params) {
  return (
    <div>
      <div className="container">
        <div className={css.aboutWrapper}>
          <h1 className={css.titleAbout}>Компанія SOLOMIA</h1>
          <p className={css.textMainAbout}>
            Бути стандартом українського ринку бакалійних продуктів. Доставляти
            енергію та користь природних продуктів харчування до кожної
            української родини.
          </p>
          <p className={css.textAbout}>
            Компанія SOLOMIA є національним виробником і дистриб’ютором
            високоякісних продуктів харчування. Дистриб’юторський портфель
            компанії представлено як власними брендами ТМ ASKOLD, ТМ BATIK, ТМ
            Домашній чай, так і брендами, що ексклюзивно імпортуються з різних
            країн світу. Наявність власної системи дистриб’юції та представництв
            в усіх регіонах України сприяють успішному розвитку компанії в
            каналах збуту.
          </p>
        </div>
      </div>
    </div>
  );
}
