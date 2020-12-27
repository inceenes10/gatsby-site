import React from "react";
import styles from "./Image.module.css";

class Image extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className={styles.container}>
                <img className={styles.image} src={this.props.src} alt={this.props.alt} width="100%" />
                <div className={styles.caption}>{this.props.alt}</div>
            </div>
        );
    }

}


export default Image;