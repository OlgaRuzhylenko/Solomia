import Header from "../../components/Header/Header";
import historyImg from "../../images/history/history.jpg";
import css from "./History.module.css";

export default function History() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.historySection}>
        <div className="container">
          <img
            src={historyImg}
            alt="людські руки, що торкаються до чайного листа та кавової грони зерен"
            className={css.aboutUsImg}
          />
          <h1 className={css.historymainTitle}>Історія компанії Соломія</h1>
          <p>
            Історія SOLOMIA – це шлях від невеликої торгівельної компанії до
            компанії, що займає провідні позиції на чайному ринку України.
          </p>
          <ul>
            <li>
              <strong>1992</strong> – рік заснування виробничо-торгівельної
              компанії SOLOMIA.
            </li>
            <li>
              <strong>1994</strong> – з цього року SOLOMIA ексклюзивно імпортує
              цейлонський чай TM BATIK в Україну.
            </li>
            <li>
              <strong>1998</strong> – відкриття першого сертифікованого
              виробництва чаю в Україні. Розпочато виробництво власних
              торгівельних марок чаю, що охоплюють всі цінові сегменти ринку
              чаю:
            </li>
            <ul>
              <li>
                Чай ASKOLD – преміальна торгівельна марка, для поціновувачів
                чаю.
              </li>
              <li>
                Чай BATIK – перлина Цейлону, чай для наймасовішого середнього
                цінового сегменту.
              </li>
              <li>Домашній чай – міцний чай за вигідною ціною.</li>
            </ul>
            <li>
              <strong>2003</strong> – від цього року SOLOMIA придбала
              ексклюзивні права на бренд BATIK на території України.
            </li>
            <li>
              <strong>2019</strong> – рік редизайну. ТМ ASKOLD, ТМ BATIK, ТМ
              Домашній чай – відтепер на полицях в новому привабливому вигляді.
              Прихильників брендів порадували ексклюзивними новинками.
            </li>
            <li>
              <strong>2022</strong> – незважаючи на труднощі та втрати,
              продовжуємо працювати і робити якісний та смачний чай. Редизайн ТМ
              BATIK – відтепер в улюбленому коричневому кольорі.
            </li>
            <li>
              <strong>2023</strong> – випуск преміального ASKOLD NOBLE TEA.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
