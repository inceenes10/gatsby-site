import React from "react";
import QuotationMarks from "./quotation-marks.png";
//import ProfileImage from '../../images/itu-golet.jpg';
import styles from './block-quote.module.css';


function BlockQuote(props) {

    return (
        <fieldset className={styles.blockquoteContainer}>
            <legend>
                <img className={styles.quotationMarks} src={QuotationMarks} alt=""/>
            </legend>
            <figure>
                <blockquote>
                    {props.children}
                </blockquote>
                {props.quotee && <figcaption>
                    &mdash; {props.quotee}
                </figcaption>}
            </figure>

            <div className={styles.legendClose}>
                <img src={QuotationMarks} className={styles.quotationMarks} alt=""/>
            </div>
        </fieldset>
    );
}

export default BlockQuote;