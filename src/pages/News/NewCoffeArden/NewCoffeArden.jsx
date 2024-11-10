import Header from "../../../components/Header/Header";
import coffeArdenImg from "../../../images/news/coffee-arden.jpg";
import css from "./NewCoffeArden.module.css";

export default function NewCoffeArden() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.coffeArdenSection}>
        <div className="container">
          <article className={css.coffeArdenArticle}>
            <h1 className={css.coffeArdenMainTitle}>
              Насолоджуйся улюбленими кавовими блендами разом з нашою палітрою
              меленої кави ARDEN!
            </h1>
            <img
              src={coffeArdenImg}
              alt="пачки 5 видів кави Арден"
              className={css.coffeArdenImg}
            />
            <p>
              Спробуйте палітру смаків меленої кави ARDEN та розкрийте для себе
              нові відтінки смаку!
            </p>
            <p>
              Кава «ARDEN» – це ексклюзивні кавові бленди для найвибагливіших
              поціновувачів кави. Для їх виготовлення використовують виключно
              якісні кавові зерна сортів Арабіки та Робусти з найкращих кавових
              плантацій Світу. Смачна кава – це кава, яка подобається Вам! З
              кавою «ARDEN» ви розкриєте нові відтінки смаку та оберете ту, яка
              смакує саме Вам!
            </p>
            <ul className={css.coffeArdenList}>
              <li className={css.coffeArdenItem}>
                <h2 className={css.coffeArdenSubTitle}>arden «arabica»</h2>
                <p className={css.coffeArdendescription}>
                  Вишуканий, м’який та водночас насичений за смаком бленд з
                  високоякісних сортів Арабіки з різних континентів з дивовижним
                  ароматом, ідеальним балансом кислинки і гірчинки та солодким
                  післясмаком з відтінками шоколаду та карамелі. Спеціальна
                  методика обсмажування, яка зберігає аромат, гарантує незабутню
                  насолоду всім шанувальникам цього виду кави!
                </p>
              </li>
              <li className={css.coffeArdenItem}>
                <h2 className={css.coffeArdenSubTitle}>arden «crema»</h2>
                <p className={css.coffeArdendescription}>
                  Збалансований за смаком та ароматом бленд, що поєднав у собі
                  благородні зерна Арабіки та високоякісні зерна Робусти.
                  Популярний у всьому світі бленд з солодким і гармонійним
                  смаком, в якому переважають квітково – фруктові відтінки з
                  м’якими шоколадно- ванільними нотами і тонкою кислинкою.
                </p>
              </li>
              <li className={css.coffeArdenItem}>
                <h2 className={css.coffeArdenSubTitle}>arden «espresso»</h2>
                <p className={css.coffeArdendescription}>
                  Бездоганний купаж з кавових зерен Робусти та Арабіки для
                  поціновувачів справжньої міцної кави з добре відчутною
                  гірчинкою та кислинкою. Насичений, гармонійний та довершений
                  смак з довгим та приємним післясмаком темного шоколаду і
                  карамелі. Для справжніх любителів кави, що бадьорить.
                </p>
              </li>
              <li className={css.coffeArdenItem}>
                <h2 className={css.coffeArdenSubTitle}>arden «irish cream»</h2>
                <p className={css.coffeArdendescription}>
                  Всесвітньо відомий і популярних різновид ароматизованої кави з
                  неперевершеним смаком, в якому гармонійно поєднані найкращі
                  сорти добірної Арабіки та Робусти з ароматом ірландського
                  лікеру на основі вершків. М’який, насичений та збалансований
                  смак з витонченим ароматом, без сумніву, зроблять Вас
                  постійним прихильником цієї кави.
                </p>
              </li>
              <li className={css.coffeArdenItem}>
                <h2 className={css.coffeArdenSubTitle}>arden «caramel»</h2>
                <p className={css.coffeArdendescription}>
                  Улюблений різновид ароматизованої кави на кожен день, в якому
                  гармонійно поєднані найкращі сорти добірної Арабіки та Робусти
                  з солодким ароматом карамелі. Вишуканий, міцний та
                  насичено-глибокий смак з м’якою гірчинкою та яскравими
                  карамельними відтінками, без сумніву, зробить Вас постійним
                  прихильником цієї кави.
                </p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
