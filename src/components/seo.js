import React from "react";
import { Helmet } from "react-helmet";
import { PageContext } from "../Context/PageContext"

/*
*
* <meta property="og:image" content= />
<meta property="og:image:width" content= />
<meta property="og:image:height" content= />
* */


const SEO = (props) => {

    const { pageContext: { lang, location } } = React.useContext(PageContext);
    const { metadata } = props;

    return (
        <>
            <Helmet title={metadata.title} htmlAttributes={{
                lang
            }}>
                <meta name='google-site-verification' content='6Xuuvn3jJvUPQiePGr0eqjRTZ2mQxI7_q6dJLMD7A5s'/>
                <meta property="og:site_name" content="Enes ince bir yazılımcının blogu" />
                {metadata.description && <meta name="description" content={metadata.description} />}
                {metadata.keywords && <meta name="keywords" content={metadata.keywords.join(", ")} />}
                <meta property="og:title" content={metadata.title} />
                <meta property="og:url" content={`${location.origin}${location.pathname}`} />
                {metadata.description && <meta property="og:description" content={metadata.description} />}
                <meta property="og:type" content={metadata.type || "article"} />
                <meta name="twitter:site" content="@inceenes10" />
                
                <meta name="twitter:creator" content="@inceenes10" />
                <meta name="twitter:card" content={metadata.player ? "player" : (metadata.twitterCardtype || "summary_large_image")} />

            </Helmet>

            {props.children}

        </>
    )
}


export default SEO;