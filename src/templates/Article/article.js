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
import Image from "./components/Image/Image";
import HashLink from "./components/HashLink/HashLink";

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
/*
    article.tags.items = [
        { tags: { "name": "Artificial Intelligence" } },
        { tags: { "name": "Machine Learning" } },
        { tags: { "name": "Deep Learning" } },
        { tags: { "name": "Neural Network" } },
        { tags: { "name": "Deep Neural Networks" } }
    ]
*/

    const tags = props.pageContext.article.tags.items.map(item => {
        return item.tags;
    });


/*
    article.metadata = {
        "description": "In this article, we're gonna write an tensorflow application",
        "keywords": ["Deep Learning", "Prerequisites for deep learning", "Deep learning applications", "Basic deep learning application", "Neural networks", "Neuron", "Deep neural networks"],
        "title": "Deep Learning 101: What is Deep Learning? Prerequisites For Deep Learning",
        "twitterCardType": null, // default: "summary_large_image"
        "image": {
            "image700": "https://ince-guru-files.s3.eu-central-1.amazonaws.com/deep-learning-files/deep-learning-101-diagram.png",
            "width": 800,
            "height": 600
        }
    }


    article.body = `
    <PageTitle>Deep Learning 101: What is Deep Learning? Prerequisites For Deep Learning</PageTitle>
    <p>If you love tech, learning deep learning may be a beautiful choice for you.
    It's also something you can do provided a math-lover.</p>
    <p>Deep learning is a field of artificial intelligence that makes more complex problems like image classification,
    self driving car solvable by machines using basically neural networks.
    In this article, we will be looking at:</p>
    <ul>
        <li><HashLink hash="deep-learning-applications-in-our-casual-life">Deep learning applications in our casual life</HashLink></li>
        <li><HashLink hash="prerequisites-for-deep-learning-before-diving-into-this-field">Prerequisites for deep learning before diving into this field</HashLink></li>
        <li><HashLink hash="basic-deep-learning-application-diagram">Basic deep learning application diagram</HashLink></li>
        <li><HashLink hash="the-bottom-line">The Bottom Line</HashLink></li>
    </ul>
    <p>Come on let's jump right into the deep learning applications in our casual life.</p>
    
    <HashTitle hash="deep-learning-applications-in-our-casual-life">Deep learning applications in our casual life</HashTitle>
    
    <p>We can see any deep learning application everywhere.
    To illustrate, distinguishing between spam mail from normal mail is an deep learning application.
    Google, Instagram, Facebook show you things that attracts your attention with deep learning,
    which serves better user experience. Siri, alexa can speak with you thanks to deep learning.
    Self driving cars can determine which action they have to take in the road because of deep learning.</p>
    
    <p>Deep learning is not only for casual users but also is for experts. For example,
    doctors use deep learning for understanding
    whether cancer cell is malicious or not. Electrical engineers can predict energy usage from time to time
    with deep learning. In business life, deep learning have a huge importance and have an infinite examples.</p>
    
    <HashTitle hash="prerequisites-for-deep-learning-before-diving-into-this-field">Prerequisites for deep learning before diving into this field</HashTitle>
    <p>I am not from those of who thinking that basic programming and math knowledge is enough for deep learning,
    because deep learning is not only deep learning. It is a part of a whole software application. Therefore,
     before diving into this field, you should know software development tools like:</p>
    <ul>
        <li>Cloud platforms like AWS, GCP, Azure, IBM (Preferable GCP to others in deep learning)</li>
        <li>Unit testing, TDD (Test driving development)</li>
        <li>Containerization (Docker, kubernetes)</li>
        <li>CI/CD (Continuous Integration / Continuous Development)</li>
        <li>Data structures and algorithms</li>
        <li>Basic mathematics involved in linear algebra, calculus, probability and statistics</li>
        <li>At least one programming language (python preferable)</li>
    </ul>
    <p>and other stuff concerning software development to some extent.</p>
    
    <p>In the way of me thinking that may not reflect the real life, but I think so.
    Reading this article, don't forget some facts depend on person's views and context.</p>
    <HashTitle hash="basic-deep-learning-application-diagram">Basic deep learning application diagram</HashTitle>
    <p>
        Deep learning applications consist of layers that is composed of neurons.
        Each layer has a weights, bias and an activation function assigned them. We multiply inputs by
        weights and add a bias to it. Then, the result is passed to an activation function which can
        be taken derivative as we want to measure the instantaneous change of the result.
    </p>
    <Image src="https://ince-guru-files.s3.eu-central-1.amazonaws.com/deep-learning-files/deep-learning-101-diagram.png" alt="Basic deep learning application diagram" />
    <p>Then, we take derivative of the activation function with respect to weights and biases and
    multiply inputs with derivate of the activation function.
    After that, we take the result from weights and bias. So, we train our models by updating weights and bias.</p>
    
    <p>I know, I know it's so confusing but in the forthcoming days, we learn deep learning by deepening dive into it and exercising.
    Thus, don't worry. Calm down and continue to get your hands dirty on it</p>
    
    <HashTitle hash="the-bottom-line">The Bottom Line</HashTitle>
    <p>Deep learning has become more and more popular over the past decade. If you'd like to advance in deep learning,
    check out the <a href="https://www.coursera.org/specializations/deep-learning" target="_blank">Andrew NG's deep learning course</a> and write so much code everyday.</p>
    
    <p>If you have any question about deep learning after reading this article, please leave a comment. I will reach out to you in a very short time.</p>  
`;
*/

    return (

        <PageContextProvider pageContext={{...props.pageContext, location: props.location}}>

            <ArticleSEO article={article}
                        canonicalURL={`${props.location.origin}${props.location.pathname}`}
            >
                <article className="article">
                    <JsxParser jsx={article.body}
                               components={{
                                   BlockQuote, YoutubeVideoIframe, PageTitle: ArticlePageInfoAndTitle, HashTitle, SuggestedArticleCard, Gist, Image, HashLink
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