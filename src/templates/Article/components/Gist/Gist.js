import React from "react";
import GistContainer from "react-gist";
import styles from "./gist.module.css";


class Gist extends React.Component {

    state = {
        id: "", file: ""
    }

    constructor(props) {
        super(props)
    }


    componentDidMount() {
        const { id, file } = this.props;
        this.setState({
            id, file
        })
    }


    render() {
        const { id, file } = this.state;

        return (
             <div className={styles.gistContainer} >
                 {id && <GistContainer id={id} file={file || null}></GistContainer>}
            </div>
        )
    }
}

export default Gist;