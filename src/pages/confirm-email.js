import React from "react";
import axios from 'axios';
import styles from "./styles/confirm-email.module.css";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

function ConfirmEmail(props) {

    const loadingSpannerContainer = React.createRef();
    const successField = React.createRef();
    const errorField = React.createRef();

    React.useEffect(() => {

        const urlParams = new URLSearchParams(props.location.search);

        const key = urlParams.get("key")

        if (key) {

            axios.get(`https://api.ince.guru/e/ConfirmMailboxEmail?key=${key}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((result) => {
                    successField.current.classList.add(styles.active);
                })
                .catch(e => {
                    errorField.current.classList.add(styles.active);
                })
                .finally(() => {
                    loadingSpannerContainer.current.classList.add(styles.disabled);
                })
        }
    })

    return (
        <div className={styles.wrapper}>
            <Helmet>
                <title>Confirm Your Email Address to receive my emails</title>
            </Helmet>
            <div className={styles.loadingSpannerContainer} ref={loadingSpannerContainer}>
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
                <div className={styles.messageContainer} ref={successField}>
                    <h1>Your email address added to my email list</h1>
                    <p>
                        Thanks for your interest in my newsletter
                    </p>
                    <Link to="/" style={{
                        color: "#e57373"
                    }}>Go to Home Page → 🏠️</Link>
                </div>
                <div className={styles.messageContainer} ref={errorField}>
                    <h1>When adding your email address to my list, an undefined error occured</h1>
                    <p>
                        Please, <Link to="/" style={{ color: "#e57373" }}>Go to Home Page → 🏠️</Link>
                        and refill the form and resubscribe
                    </p>
                    <p>
                        Thank you for your interest
                    </p>
                </div>
            </div>
        </div>
    )

}

export default ConfirmEmail;