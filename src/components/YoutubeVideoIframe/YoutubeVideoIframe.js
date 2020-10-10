import React from "react";


class YoutubeVideoIframe extends React.Component {

    state = {
        src: ""
    }

    componentDidMount() {
        const { src } = this.props;
        this.setState({ src: src})
    }

    render() {

        return (
            <div className="youtube-video--container">
                {this.state.src &&
                <iframe src={this.state.src}
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen
                       aria-hidden={this.props.children ? true : undefined}
                       title={this.props.children || undefined}></iframe>}
            </div>
        );
    }

}


export default YoutubeVideoIframe;