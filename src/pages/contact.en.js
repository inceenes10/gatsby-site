import React from "react";
import { setDefaultLanguage } from "../Hooks/Translation"
import Layout from "../layouts";
import SEO from "../components/seo";
import { PageContextProvider } from "../Context/PageContext";
import AutoForm from "react-auto-form";
import styles from "./styles/contact.module.css";
import TextareaAutosize from 'react-textarea-autosize';
import Me from "../images/itu-ari-kapi2020.jpg";

function ContactPage(props) {
    const lang = "en";
    setDefaultLanguage(lang);

    const submitContactForm = (e, data) => {
        e.preventDefault()
        alert("merhaba dünya");

        return false;
    };

    return (
        <PageContextProvider pageContext={{
            ...props.pageContext, location: props.location, lang
        }}>
            <SEO metadata={{
                title: "Get Contact With Me | Enes Ince",
                description: "Get contact with me Enes Ince, you can ask me whatever you want, you can ask me to make new content, project or you can hire me",
                keywords: ["Contact", "Get contact", "hire me", "Enes"],
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
                            <h1 style={{ color: "rgba(0,0,0,.7)", fontSize: 28 }}>Nasıl Yardımcı Olabilirim</h1>
                            <label htmlFor="fullname">
                                <span>Fullname</span>
                                <input type="text" id="fullname" placeholder="Fullname" required={true}/>
                            </label>
                            <label htmlFor="email">
                                <span>Email Address</span>
                                <input type="email" id="email" placeholder="Email" required={true}/>
                            </label>
                            <label htmlFor="website">
                                <span>Website (Optional)</span>
                                <input type="text" id="website" placeholder="Website"/>
                            </label>

                            <label htmlFor="description">
                                <span>Description</span>
                                <TextareaAutosize id="description" placeholder="Description" required={true}></TextareaAutosize>
                            </label>

                            <input type="submit" value="Send"/>
                        </AutoForm>
                    </div>
                </Layout>
            </SEO>
        </PageContextProvider>
    )

}

export default ContactPage;