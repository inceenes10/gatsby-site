import React from "react";
import { setDefaultLanguage, useTranslation } from "../Hooks/Translation"
import Layout from "../layouts";
import SEO from "../components/seo";
import { PageContextProvider } from "../Context/PageContext";
import AutoForm from "react-auto-form";
import styles from "./styles/contact.module.css";
import TextareaAutosize from 'react-textarea-autosize';
import Me from "../images/itu-ari-kapi2020.jpg";
import Recaptcha from "react-recaptcha";
import axios from "axios";
import AlertBox from "../components/AlertBox/AlertBox";


function ContactPage(props) {
    const lang = "tr";
    setDefaultLanguage(lang);

    const [recaptchaVerified, setRecaptchaVerified] = React.useState(false);
    const gRecaptchaErrorField = React.createRef();

    const { t } = useTranslation()

    const resetButton = React.createRef();

    const submitContactForm = (e, data) => {

        e.preventDefault();

        if (!recaptchaVerified) {

            gRecaptchaErrorField.current.classList.add(styles.active);
            return false;

        }

        const API_URL = "https://api.ince.guru/e/SendContactForm";
        axios({
            method: "POST",
            url: API_URL,
            data,
            timeout: 4000,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(() => {
                resetButton.current.click();
                AlertBox.success({
                    title: t("contact_page.success"),
                    text: t("contact_page.success_message")
                })
            })
            .catch(() => {
                AlertBox.error({
                    title: t("contact_page.error"),
                    text: t("contact_page.error_message")
                })
            })
            .finally(() => {
                // some loading spanner settings
            });

        return false;


    };
    const verifyCallback = (response) => {
        if (response) {
            gRecaptchaErrorField.current.className = styles.gRecaptchaError;
            setRecaptchaVerified(true);
        }
    };

    return (
        <PageContextProvider pageContext={{
            ...props.pageContext, location: props.location, lang
        }}>
            <SEO metadata={{
                title: "Benimle İletişime Geç | Enes İnce",
                description: "Benimle iletişime geç Enes İnce, ",
                keywords: [],
                type: "website",
                image: {
                    src: ""
                }
            }}>
                <Layout>
                    <div className={styles.container}>
                        <div className={styles.contactInfoContainer}>
                            <div className={styles.meImage}>
                                <img src={Me} alt="Enes ince"/>
                                <span>Enes ince</span>
                            </div>
                            <div className={styles.info}>
                                <a className={styles.infoSection} href="https://www.facebook.com/inceenes10/" target="_blank" rel="noopener noreferrer">
                                    <img src={require("../images/social-media-icons/facebook.svg")} alt=""/>
                                    <span>inceenes10</span>
                                </a>
                                <a className={styles.infoSection} href="https://www.twitter.com/inceenes10" target="_blank" rel="noopener noreferrer">
                                    <img src={require("../images/social-media-icons/iconfinder_social_media_applications_6-twitter_4102580.svg")} alt=""/>
                                    <span>inceenes10</span>
                                </a>
                                <a className={styles.infoSection} href="https://www.instagram.com/inceenes10" target="_blank" rel="noopener noreferrer">
                                    <img src={require("../images/social-media-icons/iconfinder_social_media_applications_3-instagram_4102579.svg")} alt=""/>
                                    <span>inceenes10</span>
                                </a>
                                <a className={styles.infoSection} href="https://www.linkedin.com/in/inceenes10" target="_blank" rel="noopener noreferrer">
                                    <img src={require("../images/social-media-icons/iconfinder_social_media_applications_14-linkedin_4102586.svg")} alt=""/>
                                    <span>inceenes10</span>
                                </a>
                                <a className={styles.infoSection} href="https://www.github.com/inceenes10/" target="_blank" rel="noopener noreferrer">
                                    <img src={require("../images/social-media-icons/github.svg")} alt=""/>
                                    <span>inceenes10</span>
                                </a>
                                <a className={styles.infoSection} href="mailto:dev@ince.guru">
                                    <img src={require("../images/social-media-icons/gmail.svg")} alt=""/>
                                    <span>dev@ince.guru</span>
                                </a>
                            </div>
                        </div>
                        <AutoForm onSubmit={submitContactForm} trimOnSubmit>
                            <h1>Nasıl Yardımcı Olabilirim?</h1>
                            <p style={{ lineHeight: 1.5, marginBottom: 10 }}>
                                Herhangi bir sorun varsa, sadece formu doldur ve bana gönder, en kısa zamanda sana dönüş yapacağım.
                            </p>
                            <label htmlFor="fullname">
                                <span>İsim Soyisim</span>
                                <input type="text" id="fullname" placeholder="İsim Soyisim" required={true}/>
                            </label>
                            <label htmlFor="email">
                                <span>Email Adresiniz</span>
                                <input type="email" id="email" placeholder="Email" required={true}/>
                            </label>
                            <label htmlFor="website">
                                <span>Website (İsteğe bağlı)</span>
                                <input type="text" id="website" placeholder="Website" pattern="^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$" title="This must be url"/>
                            </label>

                            <label htmlFor="description">
                                <span>Mesajınız</span>
                                <TextareaAutosize id="description" placeholder="Mesajınız" required={true}></TextareaAutosize>
                            </label>
                            <div>
                                <Recaptcha
                                    sitekey="6Le1k9wZAAAAAMHCzmeLfvJ_a36t_GcGgPMz5q0k"
                                    render="explicit"
                                    verifyCallback={verifyCallback}
                                />
                                <div className={styles.gRecaptchaError} ref={gRecaptchaErrorField}>
                                    Lütfen robot olmadığınızı doğrulayın
                                </div>
                            </div>
                            <input type="submit" value="GÖNDER"/>
                            <input type="reset" ref={resetButton} value="reset" style={{ height: 0, width: 0, padding:0, position: "absolute", top: -1000 }}/>
                        </AutoForm>
                    </div>
                </Layout>
            </SEO>
        </PageContextProvider>
    )

}

export default ContactPage;