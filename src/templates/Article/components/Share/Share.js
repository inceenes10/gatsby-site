import React from "react";
import TwitterIcon from './icons/twitter.svg';
import LinkedInIcon from './icons/linkedin.svg';
import WhatsappIcon from './icons/whatsapp.svg';
import FacebookIcon from './icons/facebook.svg';
import MailIcon from './icons/mail.svg';
import styles from './share.module.css';
import { PageContext } from "../../../../Context/PageContext"
import { useTranslation } from "../../../../Hooks/Translation"

const { t } = useTranslation();

class Share extends React.Component {

    state = {
        webShareAPISupportStatus: false
    }

    static contextType = PageContext

    constructor(props) {
        super(props);
        this.shareWithWebAPI = this.shareWithWebAPI.bind(this);
    }

    componentDidMount() {
        if (navigator.share) {
            this.setState({
                webShareAPISupportStatus: true
            })
        }
    }

    shareWithWebAPI() {
        const { title, description } = this.context.pageContext.article;
        const url = this.context.pageContext.location.origin + this.context.pageContext.location.pathname;

        navigator.share({ title, text: description, url })
            .then(() => console.log("sharing successful"))
            .catch(console.error);
    }

    //<meta property="fb:app_id" content="your_app_id" /> daha sonra sağlanacak
    render() {

        const { canonicalURL, title, description, source } = this.props;
        if (!this.state.webShareAPISupportStatus) {
            return (
                <div className={styles.shareContainer}>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${canonicalURL}`} target="_blank" rel="noreferrer">
                        <img src={FacebookIcon} alt="share on facebook" width={40} height={40}/>
                    </a>
                    <a href={`https://www.twitter.com/share?url=${canonicalURL}&text=${description}`} target="_blank" rel="noreferrer">
                        <img src={TwitterIcon} alt="share on twitter" width={40} height={40}/>
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${canonicalURL}source=${source}&title=${title}&summary=${description}`} rel="noreferrer" target="_blank">
                        <img src={LinkedInIcon} alt="share on linkedin" width={40} height={40}/>
                    </a>
                    <a href={`whatsapp://send?text=${canonicalURL}`} target="_blank" data-action="share/whatsapp/share" rel="noreferrer">
                        <img src={WhatsappIcon} alt="share with whatsapp" width={40} height={40}/>
                    </a>
                    <a href="mailto:">
                        <img src={MailIcon} alt="share with mail" width={40} height={40} rel="noreferrer"/>
                    </a>
                </div>
            )
        }
        else {
            return (
                <div className={styles.shareContainer}>
                    <button onClick={() => this.shareWithWebAPI()} className={styles.webshareApiButton}>{t("share_with_web_api")}</button>
                </div>
            );
        }
    }
}

export default Share;