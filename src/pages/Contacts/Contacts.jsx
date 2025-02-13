import Footer from "../../components/Footer/Footer";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import emailjs from "emailjs-com";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Header from "../../components/Header/Header";
import { Formik, Form, Field } from "formik";

import css from "./Contacts.module.css";

export default function Contacts() {
  const initialValues = {
    username: "",
    tel: "",
    email: "",
    message: "",
  };
  const nameFieldId = useId();
  const emailFieldId = useId();
  const telFieldId = useId();
  const msgFieldId = useId();

  const handleSubmit = (values, actions) => {
    const serviceID = "service_e3wpv4k";
    const templateID = "template_vzsra6n";
    const userID = "e12MnpZ3x5N8mVDc9";

    const templateParams = {
      to_name: "Соломія",
      from_name: values.username,
      message: values.message,
      reply_to: values.email,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Ваше повідомлення успішно надіслано!");
        actions.resetForm();
      },
      (error) => {
        console.error("Error sending email:", error);
        alert("Сталася помилка при надсиланні повідомлення. Спробуйте ще раз.");
      }
    );
    actions.resetForm();
  };
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Занадто коротке ім'я")
      .max(50, "Занадто довге ім'я")
      .required("Обов'язкове поле"),
    tel: Yup.string()
      .matches(/^[+0-9]+$/, "Неправильний номер телефону")
      .required("Обов'язкове поле"),
    email: Yup.string()
      .email("Неправильний email!")
      .required("Обов'язкове поле"),
    message: Yup.string()
      .min(3, "Занадто коротке повідомлення")
      .max(256, "Занадто довге повідомлення")
      .required("Обов'язкове поле"),
  });

  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.contactsSection}>
        <h1 className={css.contactsMainTitle}>Контакти компанії 'Соломія'</h1>
        <div className={css.contactsMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96401.81475484133!2d30.396651999999996!3d50.465784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ccf7be32758d%3A0x30f9aa6099a4a52!2z0LLRg9C70LjRhtGPINCc0YDRltGXLCAxMtCcLCDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LAsIDAzMDYy!5e1!3m2!1suk!2sus!4v1736417472973!5m2!1suk!2sus"
            style={{ width: "100%", height: "450px", border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
        <div className="container">
          <div className={css.contactsBox}>
            <div className={css.contactsBoxFirstElement}>
              <h2 className={css.contactsTitleFirst}>Контакти</h2>
              {/* <div className={css.contactsSeparatorFirst}></div> */}
              {/* <div className={css.contactsSeparatorSecond}></div> */}
              <address className={css.contactsAddressSection}>
                <p className={css.contactsAddress}>
                  Юридична адреса:
                  <br /> м.Київ, вул. Берковецька, 6 A
                </p>
                <p className={css.contactsAddress}>
                  Фактична адреса: <br />
                  м.Київ, вул. Мрії, 12 М
                </p>
                <a href="tel:+380664540330" className={css.contactsTel}>
                  тел:
                  <span className={css.contactsSpanAddress}>
                    +38 (066) 454 03 30
                  </span>
                </a>
                <br />
                <a
                  href="mailto:info@solomia.com.ua"
                  className={css.contactsAddress}
                >
                  e-mail:
                  <span className={css.contactsSpanAddress}>
                    info@solomia.com.ua
                  </span>
                </a>
              </address>
              <ul className={css.contactsSocialMediaList}>
                <li className={css.contactsSocialMediaItem}>
                  <a
                    href="https://www.facebook.com/solomia.ukraine/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.socialMediaLink}
                  >
                    {<BsFacebook className={css.socialMediaSvg} />}
                  </a>
                </li>
                <li className={css.contactsSocialMediaItem}>
                  <a
                    href="https://www.instagram.com/solomia.com.ua/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.socialMediaLink}
                  >
                    {<BsInstagram className={css.socialMediaSvg} />}
                  </a>
                </li>
              </ul>
            </div>
            <div className={css.contactsBoxSecondElement}>
              <h2 className={css.contactsTitleSecond}>Напишіть нам</h2>
              {/* <div className={css.contactsSeparatorFirst}></div> */}
              {/* <div className={css.contactsSeparatorSecond}></div> */}

              <div className={css.contactsFormBox}>
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={FeedbackSchema}
                >
                  <Form className={css.contactsForm}>
                    <label htmlFor={nameFieldId}></label>
                    <Field
                      type="text"
                      name="username"
                      className={css.contactsField}
                      id={nameFieldId}
                      placeholder="Ваше ім'я"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className={css.errorMessage}
                    />

                    <label htmlFor={telFieldId}></label>
                    <Field
                      type="tel"
                      name="tel"
                      className={css.contactsField}
                      id={telFieldId}
                      placeholder="Ваш телефон"
                    />
                    <ErrorMessage
                      name="tel"
                      component="div"
                      className={css.errorMessage}
                      pattern="[0-9]{10}"
                    />

                    <label htmlFor={emailFieldId}></label>
                    <Field
                      type="email"
                      name="email"
                      className={css.contactsField}
                      id={emailFieldId}
                      placeholder="Ваш e-mail"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={css.errorMessage}
                    />

                    <label htmlFor={msgFieldId}></label>
                    <Field
                      as="textarea"
                      type="text"
                      name="message"
                      className={`${css.contactsField} ${css.contactsTextArea}`}
                      id={msgFieldId}
                      placeholder="Повідомлення"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className={css.errorMessage}
                    />
                    <button type="submit" className={css.contactsBtn}>
                      Відправити
                    </button>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}
