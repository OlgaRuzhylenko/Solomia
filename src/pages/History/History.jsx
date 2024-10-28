import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import historyImg from "../../images/history/history.jpg";
import css from "./History.module.css";

export default function History() {
  return (
    <div>
      <div>{<Header />}</div>
      <article>
        <section className={css.historySection}>
          <div className={css.historyImg}></div>
          <div className="container">
            <h1 className={css.historymainTitle}>Історія компанії Соломія</h1>
            <div className={css.historyTextBox}>
              <p className={css.title}>
                Історія SOLOMIA – це шлях від невеликої торгівельної компанії до
                компанії, що займає провідні позиції на чайному ринку України.
              </p>
              <ul>
                <li>
                  <p className={css.text}>
                    <strong>1992</strong> – рік заснування
                    виробничо-торгівельної компанії SOLOMIA.
                  </p>
                </li>
                <li>
                  <p className={css.text}>
                    <strong>1994</strong> – з цього року SOLOMIA ексклюзивно
                    імпортує цейлонський чай TM BATIK в Україну.
                  </p>
                </li>
                <li>
                  <p className={css.text}>
                    <strong>1998</strong> – відкриття першого сертифікованого
                    виробництва чаю в Україні. Розпочато виробництво власних
                    торгівельних марок чаю, що охоплюють всі цінові сегменти
                    ринку чаю:
                  </p>
                </li>
                <ul className={css.list}>
                  <li>
                    <p className={css.description}>
                      Чай ASKOLD – преміальна торгівельна марка, для
                      поціновувачів чаю.
                    </p>
                  </li>
                  <li>
                    <p className={css.description}>
                      Чай BATIK – перлина Цейлону, чай для наймасовішого
                      середнього цінового сегменту.
                    </p>
                  </li>
                  <li>
                    <p className={css.description}>
                      Домашній чай – міцний чай за вигідною ціною.
                    </p>
                  </li>
                </ul>
                <li>
                  <p className={css.text}>
                    <strong>2003</strong> – від цього року SOLOMIA придбала
                    ексклюзивні права на бренд BATIK на території України.
                  </p>
                </li>
                <li>
                  <p className={css.text}>
                    <strong>2019</strong> – рік редизайну. ТМ ASKOLD, ТМ BATIK,
                    ТМ Домашній чай – відтепер на полицях в новому привабливому
                    вигляді. Прихильників брендів порадували ексклюзивними
                    новинками.
                  </p>
                </li>
                <li>
                  <p className={css.text}>
                    <strong>2022</strong> – незважаючи на труднощі та втрати,
                    продовжуємо працювати і робити якісний та смачний чай.
                    Редизайн ТМ BATIK – відтепер в улюбленому коричневому
                    кольорі.
                  </p>
                </li>
                <li>
                  <p className={css.text}>
                    <strong>2023</strong> – випуск преміального ASKOLD NOBLE
                    TEA.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
      <div>{<Footer />}</div>
    </div>
  );
}
