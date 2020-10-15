import React  from "react";
import ArticleSEO from "./ArticleSEO";
import { setDefaultLanguage } from "../../Hooks/Translation";
import "./article-page.css";
import JsxParser from "react-jsx-parser";
import DisqusComments from "../../components/DisqusComments/DisqusComments";
import Tags from "../../components/Tags/Tags";
import Share from "./components/Share/Share";
import BlockQuote from "./components/BlockQuote/BlockQuote";
import YoutubeVideoIframe from "../../components/YoutubeVideoIframe/YoutubeVideoIframe";
import ArticlePageInfoAndTitle from "./components/ArticlePageInfoAndTitle/ArticlePageInfoAndTitle";
import HashTitle from "./components/HashTitle/HashTitle";
import SuggestedArticleCard from "./components/SuggestedArticleCard/SuggestedArticleCard";
import Gist from "./components/Gist/Gist";
import { PageContextProvider } from "../../Context/PageContext";

function Article(props) {

    React.useEffect(() => {

        if (document.readyState === "complete") {
            setTimeout(() => {
                const id = window.location.hash.slice(1);
                const el = document.getElementById(id);

                if (!el) return;

                const headerOffset = 70;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elPosition = el.getBoundingClientRect().top - bodyRect;
                const offsetPosition = elPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition
                })
            }, 100);
        }

    })
    const article = props.pageContext.article;

    setDefaultLanguage(article.lang);

    // <PageTitle>Merhaba page title</PageTitle>
    // <YoutubeVideoIframe src="https://www.youtube.com/embed/3ryohiCVq3M">Youtube video title</YoutubeVideoIframe>
    // <BlockQuote quotee="Enes ince">Bir merhaba dünya hikayeleri</BlockQuote>
    // <HashTitle located={true} hash="alt-baslik2">Merhaba dünya</HashTitle>
    // <Gist id="inceenes10/922c48e476a7c4e5a58fabe45ddb653a" file="hello-world.js"/>
    // <SuggestedArticleCard lang="tr" slug="enes-ince"></SuggestedArticleCard>


    const tags = props.pageContext.article.tags.items.map(item => {
        return item.tags;
    });

    return (

        <PageContextProvider pageContext={{...props.pageContext, location: props.location}}>

            <ArticleSEO article={article}
                        canonicalURL={`${props.location.origin}${props.location.pathname}`}
            >
                <article className="article">
                    <JsxParser jsx={article.body}
                               components={{
                                   BlockQuote, YoutubeVideoIframe, PageTitle: ArticlePageInfoAndTitle, HashTitle, SuggestedArticleCard, Gist
                               }}
                    />

                    <div className="three-dot--container">
                        <img src={require("./three-dots.svg")} alt="Three Dots" height={64} width={64}/>
                    </div>

                    <Share source={props.location.origin}
                           title={article.metadata.title}
                           description={article.metadata.description}
                           canonicalURL={`${props.location.origin}${props.location.pathname}`}
                    />
                    <Tags tags={tags}></Tags>
                </article>
                <div className="article-comment--container">
                    <DisqusComments id={article.id} title={article.title} canonicalURL={`${props.location.origin}${props.location.pathname}`} />
                </div>
            </ArticleSEO>
        </PageContextProvider>
    )
}



export default Article;