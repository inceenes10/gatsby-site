import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from "../../layouts";
import { getDefaultLanguage } from "../../Hooks/Translation";
import { PageContext } from "../../Context/PageContext";


const ArticleSEO = (props) => {

    const { pageContext: { location, article } } = React.useContext(PageContext)
    const { metadata } = article;
    const canonicalURL = `${location.origin}${location.pathname}`;

    const lang = getDefaultLanguage();
    return (
        <Layout>
            <Helmet htmlAttributes={{ lang }} title={article.title}>
                <meta property="og:site_name" content="Enes ince bir yazılımcının blogu" />
                <meta name='google-site-verification' content='6Xuuvn3jJvUPQiePGr0eqjRTZ2mQxI7_q6dJLMD7A5s'/>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords.join(", ")} />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:url" content={canonicalURL} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:type" content={metadata.type || "article"} />
                <meta name="twitter:site" content="@inceenes10" />
                <meta name="twitter:creator" content="@inceenes10" />
                <meta name="twitter:card" content={metadata.player ? "player" : (metadata.twitterCardtype || "summary_large_image")} />
            </Helmet>
            {metadata.image && (
                <Helmet>
                    {metadata.image.image700 && <meta property="og:image" content={metadata.image.image700} />}
                    {metadata.image.width && <meta property="og:image:width" content={metadata.image.width} />}
                    {metadata.image.height && <meta property="og:image:height" content={metadata.image.height} />}
                </Helmet>
            )}

            {metadata.player && (
                <Helmet>
                    <meta property="og:video:type" content="application/x-shockwave-flash"/>
                    <meta property="og:video" content={metadata.player.src}/>
                    <meta property="og:video:width" content={metadata.player.width} />
                    <meta property="og:video:height" content={metadata.player.height} />
                    <meta name="twitter:player" content={metadata.player.src}/>
                    <meta name="twitter:player:width" content={metadata.player.width} />
                    <meta name="twitter:player:height" content={metadata.player.height} />
                </Helmet>
            )}

            {article && (
                <Helmet>
                    <meta property="article:published_time" content={article.createdAt} />
                    {(article.updatedAt !== article.createdAt) && <meta property="article:modified_time" content={article.updatedAt } />}
                    {(article.tags.items.length > 0) && article.tags.items.map(item => (<meta property="article:tag" content={item.tags.name} key={Math.random()} />))}
                    <meta property="article:author" content="Enes ince" />
                    <meta property="article:publisher" content="facebook sayfa urlsi"/>
                </Helmet>
            )}
            {props.children}
        </Layout>
    )
}


export default ArticleSEO;