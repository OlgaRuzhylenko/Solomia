import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import whyIsTeaCalledTeaImg from "../../../images/facts/factWhyTeaIsTeaPage.jpg";
import css from "./WhyIsTeaCalledTea.module.css";

export default function WhyIsTeaCalledTea() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.whyIsTeaCalledTeaSection}>
        <div className="container">
          <article className={css.whyIsTeaCalledTeaArticle}>
            <img
              src={whyIsTeaCalledTeaImg}
              alt="чашка із зеленим чаєм на зеленій тарілочці. Поруч чаїнки, які написані у дерев'яну ложку"
              className={css.whyIsTeaCalledTeaImg}
            />
            <h1 className={css.whyIsTeaCalledTeaTitle}>
              Чому чай називають чаєм?
            </h1>
            <p className={css.whyIsTeaCalledTeaText}>
              Протягом століть чай став більше, ніж напій.
            </p>
            <p className={css.whyIsTeaCalledTeaText}>
              Чаювання – традиція: сімейна, дружня, ділова. Чаювання – час і
              привід зібратися разом і поділитися інформацією, або ж
              «помедитувати для себе» з чашкою чаю.
            </p>
            <p className={css.whyIsTeaCalledTeaText}>
              У чаю безліч назв, залежно від регіону зростання, типу або сорту.
              Хоча в кожній країні своє слово для позначення чаю, майже всі
              вимови походять від двох слів: «те (ту)» і «ча».
            </p>
            <p className={css.whyIsTeaCalledTeaText}>
              У перші роки вирощування чаю в Китаї, листя не обробляли, тому
              мали гіркий смак, від чого напій називали – «荼 ту» (переклад
              «гіркий овоч»). Але одного разу вчений Лу Юй в своїй праці
              «Класика чаю» помилково опустив хрестик в символі «荼 ту», що
              позначило інше слово: «茶 ча» (переклад «молодий листочок»). У
              різних провінціях вимова відрізняється і чується, то як «ч’ха» і
              «цха», то як «чья» або «тьа». Молоде, свіжозібране листя, яке ще
              не пройшло обробку, називається «ч’а»; готовий сухий чорний чай –
              «у-ча»; готовий напій – «ч’а-і».
            </p>
            <p className={css.whyIsTeaCalledTeaText}>
              Оскільки чай з Китаю експортували декількома торговельними
              маршрутами, хто купував чай у носіїв кантонского або
              мандаринського діалекту, вживав слово «cha». Голландці і британці
              купували чай в провінції Фуцзянь, де в розмові використовувався
              місцевий діалект Сямень і слово «te».
            </p>
            <p className={css.whyIsTeaCalledTeaText}>
              Отже, сьогодні в світових мовах ці дві оригінальні назви
              перетворилися в:
            </p>
            <ul className={css.whyIsTeaCalledTeaList}>
              <li className={css.whyIsTeaCalledTeaItem}>
                <span className={css.whyIsTeaCalledTeaSymb}>&#9658;</span>
                <p className={css.whyIsTeaCalledTeaDesc}>
                  Te – італійський, латиський, норвезький, іспанська, шведська,
                  іврит, данський
                </p>
              </li>
              <li className={css.whyIsTeaCalledTeaItem}>
                <span className={css.whyIsTeaCalledTeaSymb}>&#9658;</span>
                <p className={css.whyIsTeaCalledTeaDesc}>
                  Tee – фінський, корейська, німецька
                </p>
              </li>
              <li className={css.whyIsTeaCalledTeaItem}>
                <span className={css.whyIsTeaCalledTeaSymb}>&#9658;</span>
                <p className={css.whyIsTeaCalledTeaDesc}>
                  Tea – англійська, угорська
                </p>
              </li>
              <li className={css.whyIsTeaCalledTeaItem}>
                <span className={css.whyIsTeaCalledTeaSymb}>&#9658;</span>
                <p className={css.whyIsTeaCalledTeaDesc}>
                  The – французький, ісландський, індонезійська
                </p>
              </li>
              <li className={css.whyIsTeaCalledTeaItem}>
                <span className={css.whyIsTeaCalledTeaSymb}>&#9658;</span>
                <p className={css.whyIsTeaCalledTeaDesc}>Thee – голландський</p>
              </li>
              <li className={css.whyIsTeaCalledTeaItem}>
                <span className={css.whyIsTeaCalledTeaSymb}>&#9658;</span>
                <p className={css.whyIsTeaCalledTeaDesc}>
                  Cha – грецький, хінді, португальська, японська
                </p>
              </li>
              <li className={css.whyIsTeaCalledTeaItem}>
                <span className={css.whyIsTeaCalledTeaSymb}>&#9658;</span>
                <p className={css.whyIsTeaCalledTeaDesc}>
                  Chai – українська, російська
                </p>
              </li>
              <li className={css.whyIsTeaCalledTeaItem}>
                <span className={css.whyIsTeaCalledTeaSymb}>&#9658;</span>
                <p className={css.whyIsTeaCalledTeaDesc}>
                  Chay (caj) – албанська, арабська, болгарська, чеська, турецька
                </p>
              </li>
            </ul>
            <p className={css.whyIsTeaCalledTeaText}>
              Не важливо говорите Ви «tea» або «чай», або якось середньо,
              улюблений багатьма напій зблизив країни і культури.
            </p>
            <p className={css.whyIsTeaCalledTeaText2}>
              Незалежно, чи п’єте Ви чай з пакетиків або листовий, з цукром або
              без, з молоком або без, Ви розділяєте любов до напою з мільярдами
              інших людей.
            </p>
          </article>
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}
