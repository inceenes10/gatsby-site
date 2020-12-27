import React from "react";
import styles from "./HashLink.module.css";


class HashLink extends React.Component {

    constructor(props) {
        super(props);
    }

    gotoHashTitle(event, hash) {

        event.preventDefault();

        const title = document.title;
        const url = `${window.location.origin}${window.location.pathname}#${hash}`;
        window.history.pushState({}, title, url);

        const el = document.querySelector(`[data-hash="${hash}"]`);

        const headerOffset = 70;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elPosition = el.getBoundingClientRect().top - bodyRect;
        const offsetPosition = elPosition - headerOffset;

        if (el) {
            window.scrollTo({
                behavior: "smooth",
                top: offsetPosition
            });
        }
    }

    render() {
        return (
            <span className={styles.hashLink}
                  onClick={(event) => this.gotoHashTitle(event, this.props.hash)}>
                {this.props.children}
            </span>
        );
    }

}

export default HashLink;