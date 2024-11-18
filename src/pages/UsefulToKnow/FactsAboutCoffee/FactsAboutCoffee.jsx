import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import factsAboutCoffeeImg from "../../../images/facts/fact-coffee_1Page.jpg";
import css from "./FactsAboutCoffee.module.css";

export default function FactsAboutCoffee() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.factsAboutCoffeeSection}>
        <div className="container">
          <article className={css.factsAboutCoffeeArticle}>
            <img
              src={factsAboutCoffeeImg}
              alt="кавові зерна: цілі і мелені"
              className={css.factsAboutCoffeeImg}
            />
            <h1 className={css.factsAboutCoffeeTitle}>
              Цікаві факти про каву.
            </h1>
            <p className={css.factsAboutCoffeeDescription}>
              Кава – це більше, ніж просто напій, це справжня насолода, що
              розкриває свої таємниці та дива перед нами. Кожна чашка кави
              приносить із собою відчуття релаксу, затишку та насолоди. Але чи
              знаєте ви, що цей чудовий напій має свої унікальні факти та
              історію? Давайте відкриємо для себе захопливий світ кавових
              секретів!
            </p>
            <ul className={css.factsAboutCoffeeList}>
              <li className={css.factsAboutCoffeeItem}>
                <h2 className={css.factsAboutCoffeeSubtitle}>
                  1. Легендарне походження:
                </h2>
                <p className={css.factsAboutCoffeeText}>
                  Легенда про відкриття кави пов’язана з ефіопським пастухом на
                  ім’я Калді. Він помітив, що його кози ставали бадьорими та
                  активними після поїдання червоних кавових ягід. Саме це стало
                  початком відкриття кавового дерева та його зерен, з яких була
                  приготовлена перша чашечка кави.
                </p>
              </li>
              <li className={css.factsAboutCoffeeItem}>
                <h2 className={css.factsAboutCoffeeSubtitle}>
                  2. Кава – це вишня:
                </h2>
                <p className={css.factsAboutCoffeeText}>
                  Кавові зерна, які потрапляють у кав’ярні або до нас додому, —
                  це насіння кавової вишні, яка є плодом кавового дерева. Кожна
                  «вишенька» має 2 зернятка кави.
                </p>
              </li>
              <li className={css.factsAboutCoffeeItem}>
                <h2 className={css.factsAboutCoffeeSubtitle}>
                  3. Незвичайний спосіб обробки:
                </h2>
                <p className={css.factsAboutCoffeeText}>
                  Кавові зерна – єдина рослина у світі, яку споживають у бобах.
                  Їх обробляють та використовують у формі зерен для приготування
                  напоїв. Це робить каву однією з найцікавіших культур у світі.
                </p>
              </li>
              <li className={css.factsAboutCoffeeItem}>
                <h2 className={css.factsAboutCoffeeSubtitle}>
                  4. Кавовий ритуал:
                </h2>
                <p className={css.factsAboutCoffeeText}>
                  У багатьох країнах кава має свій особливий ритуал. Наприклад,
                  у Туреччині каву готують у спеціальній кавоварці та подають із
                  солодощами. А в Італії, звичай приймати каву на швидку руку
                  став справжньою культурою – еспресо та капучіно смакують
                  мільйони людей по всьому світу.
                </p>
              </li>
              <li className={css.factsAboutCoffeeItem}>
                <h2 className={css.factsAboutCoffeeSubtitle}>
                  5. Свято поціновувачів кави:
                </h2>
                <p className={css.factsAboutCoffeeText}>
                  Для любителів кави є свій особливий день в усьому світі –
                  Міжнародний день кави. Це свято відзначається 1 жовтня, коли
                  всі кавомани діляться радістю цього чудового напою.
                </p>
              </li>
              <li className={css.factsAboutCoffeeItem}>
                <h2 className={css.factsAboutCoffeeSubtitle}>
                  6. Кава та креативність:
                </h2>
                <p className={css.factsAboutCoffeeText}>
                  Деякі з найвидатніших винаходів та творчих ідей були натхнені
                  кавою. Наприклад, звідси походить назва “Мозковий штурм”, коли
                  група людей збирається, щоб обговорити та знайти рішення для
                  проблеми за чашечкою кави.
                </p>
              </li>
              <li className={css.factsAboutCoffeeItem}>
                <h2 className={css.factsAboutCoffeeSubtitle}>
                  7. Рекордна ціна:
                </h2>
                <p className={css.factsAboutCoffeeText}>
                  Найдорожча кава у світі – Kopi Luwak. Процес виробництва «Копі
                  Лувак» полягає в тому, що цивети(хижі звірята) поїдають стиглі
                  плоди кавового дерева (кавові вишні), перетравлюють оточуючу
                  кавові зерна м’яку оболонку, боби ж не перетравлюються. Люди
                  вибирають їх з посліду, миють, сушать та обсмажують. Іноді
                  зерна продають у вигляді цілих екскрементів. Цей процес робить
                  каву особливою та надзвичайно дорогою – ціни на неї можуть
                  сягати 700 доларів за фунт!
                </p>
              </li>
            </ul>
            <p className={css.factsAboutCoffeeText2}>
              Кава – це чудовий напій, який приносить насолоду та радість
              мільйонам людей. Вона є джерелом традицій та незабутніх моментів у
              нашому житті. Якщо ви ще не відчули усю магію кави, тоді саме час
              відкрити для себе її унікальний світ!
            </p>
          </article>
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}
