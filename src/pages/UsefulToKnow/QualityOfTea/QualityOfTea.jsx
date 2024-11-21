import Header from "../../../components/Header/Header";
import qualityOfTeaImg from "../../../images/facts/factTea2Page.jpg";
import handWithTeaImg from "../../../images/facts/factTea2HandPage.png";
import css from "./QualityOfTea.module.css";
import Footer from "../../../components/Footer/Footer";

export default function QualityOfTea() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.qualityOfTeaSection}>
        <div className="container">
          <article className={css.qualityOfTeaArticle}>
            <img
              src={qualityOfTeaImg}
              alt="долоні, в яких насипаний чорний чай"
              className={css.qualityOfTeaImg}
            />
            <h1 className={css.qualityOfTeaTitle}>Як визначити якість чаю?</h1>
            <p className={css.qualityOfTeaText}>
              Щодня мільйони людей у всьому світі насолоджуються чудовими
              смаковими якостями та користю для здоров’я від вживання чаю.
            </p>
            <p className={css.qualityOfTeaText}>
              Як же визначити якість листового чаю? Маємо кілька підказок щодо
              оцінки чаю, який ви купуєте. Однак це лише підказки, а не правила.
            </p>
            <ul className={css.qualityOfTeaList}>
              <li className={css.qualityOfTeaItem}>
                <div className={css.qualityOfTeaItemsWrap}>
                  <span className={css.qualityOfTeaSymb}>&#9658;</span>
                  <h2 className={css.qualityOfTeaSubtitle}>
                    Зовнішній вигляд (форма та колір листа):
                  </h2>
                </div>
                <p className={css.qualityOfTeaText}>
                  Форма варіюється для різних видів чаю. Тож необхідно звертати
                  увагу на стан листа. Існує 2 види обробки чаю: цільнолистовий
                  та СТС (нарізаний, розірваний, скручений). Цільнолистовий
                  метод – делікатна обробка чайного листа, з мінімальним
                  руйнування зі збереженням ароматичних сполук та складного
                  смаку. СТС метод – цілеспрямоване руйнування листа для
                  забезпечення міцнішого смаку та швидкого заварювання. При
                  огляді чаю необхідно приділити увагу на ступінь сухості
                  чайного листа та однорідність. Чай має бути добре просушеним
                  та легко ламатись у руках. Листочки повинні бути однакового
                  розміру та рівномірного кольору, містити мінімальну кількість
                  стебел. При заварюванні чаю, листя повинно повільно
                  розгортатися.
                </p>
              </li>
              <li className={css.qualityOfTeaItem}>
                <img
                  src={handWithTeaImg}
                  alt="поле зеленого кольору, де росте чай та рука, яка тримає гілочку чаю"
                />
              </li>
              <li className={css.qualityOfTeaItem}>
                <div className={css.qualityOfTeaItemsWrap}>
                  <span className={css.qualityOfTeaSymb}>&#9658;</span>
                  <h2 className={css.qualityOfTeaSubtitle}>Аромат:</h2>
                </div>
                <p className={css.qualityOfTeaText}>
                  Незалежно від того, який сорт, високоякісний чай матиме
                  виразний аромат. Аромат має бути чистим та приємним. Зелений
                  чай повинен мати легкий, свіжий, заспокійливий аромат. Чорний
                  чай повинен мати солодкий квітковий аромат. Аромат сухих
                  улунів може варіюватися від персика до квіток османтуса. Білий
                  чай може нагадувати про кукурудзу. При заварюванні аромат має
                  залишатися.
                </p>
              </li>
              <li className={css.qualityOfTeaItem}>
                <div className={css.qualityOfTeaItemsWrap}>
                  <span className={css.qualityOfTeaSymb}>&#9658;</span>
                  <h2 className={css.qualityOfTeaSubtitle}>Дотик:</h2>
                </div>
                <p className={css.qualityOfTeaText}>
                  Якісний розсипний чай не повинен кришитися або розпадатися при
                  обережному поводженні. Чай повинен мати невелику вагу, але і
                  не бути занадто легкий, що свідчитиме про пересушеність або
                  старіння листа. Листя завареного чаю на дотик має бути
                  слизьким та гладким.
                </p>
              </li>
            </ul>
          </article>
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}
