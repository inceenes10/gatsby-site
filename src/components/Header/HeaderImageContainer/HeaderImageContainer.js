import React from "react";
import Logo from "../../../images/logo.png";
import styles from "./header-image-container.module.css";
import { Link } from "gatsby";
function HeaderImageContainer() {


    return (
        <div className={styles.container}>
            <Link to="/">
                <img src={Logo} alt="Logo" height={141} width={248.8}></img>
            </Link>
        </div>
    );

}


export default HeaderImageContainer;