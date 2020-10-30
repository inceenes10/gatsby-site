import React from "react";
import styles from "./styles/purepage-style.module.css";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import axios from "axios";

class ReportContact extends React.Component {


    constructor(props) {
        super(props);

        this.loadingSpannerContainer = React.createRef();
        this.successField = React.createRef();
        this.errorField = React.createRef();
    }

    componentDidMount() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const key = searchParams.get("key");

        if (key) {

            const API_URL = "https://api.ince.guru/e/ReportContactForm";

            axios({
                method: "POST",
                url: API_URL,
                timeout: 4000,
                data: { key },
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(() => {
                    this.successField.current.classList.add(styles.active)
                })
                .catch((e) => {
                    console.error(e.response);
                    this.errorField.current.classList.add(styles.active);
                })
                .finally(() => {
                    this.loadingSpannerContainer.current.classList.add(styles.disabled)
                })

        }
    }


    render() {
        return (
            <div className={styles.wrapper}>
                <Helmet>
                    <title>Report Wrong Contact Form</title>
                </Helmet>
                <div className={styles.loadingSpannerContainer} ref={this.loadingSpannerContainer}>
                    <div className={styles.skChase} >
                        <div className={styles.skChaseDot}></div>
                        <div className={styles.skChaseDot}></div>
                        <div className={styles.skChaseDot}></div>
                        <div className={styles.skChaseDot}></div>
                        <div className={styles.skChaseDot}></div>
                        <div className={styles.skChaseDot}></div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.messageContainer} ref={this.successField}>
                        <h1>Your email address added to my email list</h1>
                        <p>
                            Thanks for your interest in my newsletter
                        </p>
                        <Link to="/" style={{
                            color: "#e57373"
                        }}>Go to Home Page → 🏠️</Link>
                    </div>
                    <div className={styles.messageContainer} ref={this.errorField}>
                        <h1>An undefined error occured</h1>
                        <p>
                            Please, mail to <a
                            href="mailto:inceenes10@gmail.com"
                            style={{ color: "#e57373" }}>inceenes10@gmail.com</a> to report that
                            you didn't send the message to him on the contact page of this website
                        </p>
                        <Link to="/" style={{ color: "#e57373" }}>Go to Home Page → 🏠️</Link>
                    </div>
                </div>
            </div>
        )
    }

}



export default ReportContact;