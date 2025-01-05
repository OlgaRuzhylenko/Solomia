import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import css from "./FinancialReporting.module.css";

export default function FinancialReporting() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.financialReportingSection}>
        <div className={css.financialReportingImg}></div>
        <div className="container">
          <h1 className={css.financialReportingTitle}>
            2022 Фінансова звітність
          </h1>
          <ul className={css.financialReportingList}>
            <li className={css.financialReportingItem}>
              <div className={css.financialReportingBox}>
                <NavLink
                  to="../../../public/financialRep/f1-balans-2022-solomiya-1.pdf"
                  className={css.financialReportingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  БАЛАНС (ЗВІТ ПРО ФІНАНСОВИЙ СТАН) ЗА 2022 Р
                </NavLink>
              </div>
            </li>
            <li className={css.financialReportingItem}>
              <div className={css.financialReportingBox}>
                <NavLink
                  to="../../../public/financialRep/f2-zvit-pro-fin.rezultaty-2022-solomiya.pdf"
                  className={css.financialReportingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ЗВІТ ПРО ФІНАНСОВІ РЕЗУЛЬТАТИ ЗА 2022 Р
                </NavLink>
              </div>
            </li>
            <li className={css.financialReportingItem}>
              <div className={css.financialReportingBox}>
                <NavLink
                  to="../../../public/financialRep/f2.-zvit-pro-fin.rezultaty-2022-solomiya-1.pdf"
                  className={css.financialReportingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ЗВІТ ПРО ВЛАСНИЙ КАПІТАЛ ЗА 2022Р
                </NavLink>
              </div>
            </li>
            <li className={css.financialReportingItem}>
              <div className={css.financialReportingBox}>
                <NavLink
                  to="../../../public/financialRep/f3-zvit-pro-ruh-groshovyh-koshtiv-2022-solomiya.pdf"
                  className={css.financialReportingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ЗВІТ ПРО РУХ ГРОШОВИХ КОШТІВ ЗА 2022 Р
                </NavLink>
              </div>
            </li>
            <li className={css.financialReportingItem}>
              <div className={css.financialReportingBox}>
                <NavLink
                  to="../../../public/financialRep/f5-prymitky-do-richnoyi-zvitnosti-2022-solomiya.pdf"
                  className={css.financialReportingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ПРИМІТКИ ДЛЯ РІЧНОЇ ФІНАНСОВОЇ ЗВІТНОСТІ ЗА 2022 Р
                </NavLink>
              </div>
            </li>
            <li className={css.financialReportingItem}>
              <div className={css.financialReportingBox}>
                <NavLink
                  to="../../../public/financialRep/audytorskyj-vysnovok.pdf"
                  className={css.financialReportingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ЗВІТ НЕЗАЛЕЖНОГО АУДИТОРА
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}
