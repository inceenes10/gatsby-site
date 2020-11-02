import React from "react";
import { Link } from "gatsby";
import AutoForm from "react-auto-form";
import './footer.css';
import { getDefaultLanguage, useTranslation } from "../../Hooks/Translation"
import LocalizedLink from "../LocalizedLink/LocalizedLink"
import footerCategories from "../Data/categories-footer";
import FacebookIcon from "./social-media-icons/facebook.svg";
import TwitterIcon from "./social-media-icons/twitter.svg";
import InstagramIcon from "./social-media-icons/instagram.svg";
import LinkedInIcon from "./social-media-icons/linkedin.svg";
import GithubIcon from "../../images/social-media-icons/github.svg";
import PatreonIcon from "./social-media-icons/patreon.svg";
import axios from "axios";
import AlertBox from "../AlertBox/AlertBox";
import Recaptcha from "react-recaptcha";
import styles from "../../pages/styles/contact.module.css"

class Footer extends React.Component {


    constructor(props) {
        super(props);

        this.loadingSpanner = React.createRef();
    }



    handleEmailSubmitForm = (event, data) => {
        event.preventDefault();

        const API_URL = "https://api.ince.guru/e/SendEmailMailboxConfirmation";

        const { t } = useTranslation()

        const loadingSpanner = this.loadingSpanner.current;
        loadingSpanner.style.display = "block";


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
                AlertBox.success({
                    title: t("subscribe_email.success"),
                    text: t("subscribe_email.success_message")
                })
            })
            .catch(() => {
                AlertBox.error({
                    title: t("subscribe_email.error"),
                    text: t("subscribe_email.error_message")
                })
            })
            .finally(() => {
                loadingSpanner.style.display = "none";
            })

        return false;
    }

    render() {

        const lang = getDefaultLanguage();
        const { t } = useTranslation();

        const categories = footerCategories[lang];
        return (
            <footer className="footer">
                <div className="footer-hero">
                    <ul>
                        <h4>{ t("category") }</h4>
                        {
                            categories.map(category => <li key={Math.random()}>
                                <LocalizedLink to={`/category/${category.slug}`}>{category.name}</LocalizedLink>
                            </li>)
                        }
                    </ul>
                    <ul>
                        <h4>{ t("personal") }</h4>
                        <li>
                            <LocalizedLink to="/about">{ t("about") }</LocalizedLink>
                        </li>
                        <li>
                            <LocalizedLink to="/contact">{ t("contact") }</LocalizedLink>
                        </li>
                    </ul>
                    <div className="newsletter-subscription">
                        <h4>{ t("newsletter") }</h4>
                        <AutoForm className="newsletter-subscription--form" trimOnSubmit={true} onSubmit={this.handleEmailSubmitForm}>
                            <input type="text" name="fullname" placeholder="Fullname" required={true} />
                            <input type="email" name="email" placeholder={ t("email_address") } required={true}/>
                            <input type="hidden" name="lang" value={lang}/>
                            <input type="submit" value={ t("subscribe") }/>
                            <span style={{
                                display: 'none'
                            }} ref={this.loadingSpanner}>loading...</span>
                        </AutoForm>
                    </div>
                    <div className="social-media-icons--hero">
                        <h4>{t("social_media")}</h4>
                        <div className="social-media-icons">
                            <a href="https://www.facebook.com/inceenes10" target="_blank" rel="noopener noreferrer">
                                <img src={FacebookIcon} alt="Facebook" width="30"/>
                            </a>
                            <a href="https://twitter.com/inceenes10" target="_blank" rel="noopener noreferrer">
                                <img src={TwitterIcon} alt="Twitter" width="30"/>
                            </a>
                            <a href="https://www.instagram.com/inceenes10/" target="_blank" rel="noopener noreferrer">
                                <img src={InstagramIcon} alt="Instagram" width="30"/>
                            </a>
                            <a href="https://github.com/inceenes10" target="_blank" rel="noopener noreferrer">
                                <img src={GithubIcon} alt="Github" width="30"/>
                            </a>
                            <a href="https://www.linkedin.com/in/inceenes10/" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedInIcon} alt="Linkedin" width="30"/>
                            </a>
                            <a href="https://www.patreon.com/inceenes10" target="_blank" rel="noopener noreferrer">
                                <img src={PatreonIcon} alt="Patreon" width="30"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer--copy-right">
                    { t("copy_rights") }
                </div>
            </footer>
        )
    }
}


export default Footer;