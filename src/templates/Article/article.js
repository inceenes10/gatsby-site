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

    const body = `
<PageTitle>Merhaba page title</PageTitle>

<p>
We all have enough going on in our lives without having to worry about how we get into all of our online accounts. Keeping a notebook full of passwords isn't exactly the most secure method of tracking all of your accounts, and just holding them in your brain is a surefire way to constantly hit the "Forget Password" button. There's a better way.
</p>

<YoutubeVideoIframe src="https://www.youtube.com/embed/3ryohiCVq3M">Youtube video title</YoutubeVideoIframe>

<p>
Enpass Password Manager is a premium service that has earned 4.5/5 stars from G2. Enpass helps you organize all of your logins, credit cards, and other credentials in one ultra-secure, easily-accessible location. You can store payment methods, files, identities, your social security number, and virtually anything else you need handy in your daily life.

</p>

<BlockQuote quotee="Enes ince">
Bir merhaba dünya hikayeleri
</BlockQuote>
<HashTitle located={true} hash="alt-baslik2">Merhaba dünya</HashTitle>

<p>
Best of all, none of your data is stored on servers. It's all stored locally on your device, but you can still sync and access it on all of your devices using your trusted cloud account. Enpass offers multiple vaults to separate your personal, family, and work data, and supports login with Face ID or Touch ID for added security and convenience.

</p>
<Gist id="inceenes10/922c48e476a7c4e5a58fabe45ddb653a" file="hello-world.js"/>
<p>
Enpass also works actively to identify your weak, duplicate, or compromised passwords so you're never lax on your security. When it finds a bad one, it will help you generate a random, strong password and store it in your vault for instant access. With the desktop app, you can import any data from Enpass directly into Google Chrome, Excel, or any other password manager.

</p>

<HashTitle located={true} hash="alt-baslik">Merhaba dünya</HashTitle>
<SuggestedArticleCard lang="tr" slug="enes-ince"></SuggestedArticleCard>
<p>
Make your digital life more secure and more convenient. Normally $59, a lifetime license to Enpass Password Manager is now 58 percent off at just $24.99.
</p>


`;


    const tags = props.pageContext.article.tags.items.map(item => {
        return item.tags;
    });

    return (

        <PageContextProvider pageContext={{...props.pageContext, location: props.location}}>

            <ArticleSEO article={article}
                        canonicalURL={`${props.location.origin}${props.location.pathname}`}
            >
                <article className="article">
                    <JsxParser jsx={body}
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