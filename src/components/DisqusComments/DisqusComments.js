import React from 'react';
import Disqus from "disqus-react";
import { getDefaultLanguage } from "../../Hooks/Translation";

class DisqusComments extends React.Component {

    render() {

        const { id, title, canonicalURL } = this.props;

        const disqusShortname = "ince-guru";
        const disqusConfig = {
            url: canonicalURL,
            identifier: id,
            title: title,
            language: getDefaultLanguage()
        };


        return (
            <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
        );
    }
}


export default DisqusComments;