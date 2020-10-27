import React from "react";
import axios from 'axios';
import styles from "./styles/confirm-email.module.css";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

function ConfirmEmail(props) {

    const loadingSpannerContainer = React.createRef();
    const successField = React.createRef();
    //const errorField = React.createRef();

    React.useEffect(() => {

        const urlParams = new URLSearchParams(props.location.search);

        console.log(urlParams);

        const key = urlParams.get("key")

        if (key) {
            console.log(key)

            axios.get(`https://api.ince.guru/e/ConfirmMailboxEmail?key=${key}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((result) => {
                    console.log(result);
                })
                .catch(e => {
                    if (e.response.status === 400) {
                        console.log("Böyle bir email adresi bulunamadı")
                    }

                })
                .finally(() => {
                    successField.current.classList.add(styles.active);
                    loadingSpannerContainer.current.classList.add(styles.disabled);
                    console.log("işlem bitti");
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
                <div className={styles.successContainer} ref={successField}>
                    <h1>Your email address added to my email list</h1>
                    <p>
                        Thanks for your interest in my newsletter
                    </p>
                    <Link to="/" style={{
                        color: "#e57373"
                    }}>Go to Home Page → 🏠️</Link>
                </div>
            </div>
        </div>
    )

}

export default ConfirmEmail;