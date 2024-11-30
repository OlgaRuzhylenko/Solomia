import Header from "../../components/Header/Header";
import css from "./BatikCollection.module.css";

export default function BatikCollection() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.batikCollectionSection}>
        <div className={css.mainBatikCollectionSection}>
          <div className="container">
            <div className={css.batikCollectionHeroWpap}>
              <h1 className={css.batikCollectionMainTitle}>Batik Collection</h1>
              <p className={css.batikCollectionText}>
                У Batik Collection зібрані як класичні стандарти добірних
                цейлонських чаїв для поціновувачів міцності та терпкості, так і
                вишукані купажовані композиції з різних чайних плантацій світу
                та яскраві ягідно-фруктові з вибуховими смаками. Знайдіть час на
                чаювання з «Batik»! Переведіть подих, вгамуйте напругу та
                відчуйте себе!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
