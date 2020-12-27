import React from "react";
import Layout from "../../layouts";
import { setDefaultLanguage } from "../../Hooks/Translation"
import SEO from "../../components/seo";
import { PageContextProvider } from "../../Context/PageContext";
import Post from "../../components/Post/Post"
import Pagination from "../../components/Pagination/Pagination"
import SGK40AdvertiseImage from "../../images/sgk40.jpg"
import { Helmet } from 'react-helmet';
class Home extends React.Component {


    render() {
        const lang = "en";
        setDefaultLanguage(lang);
        const { articles, pageNum, currentPage } = this.props.pageContext;

        return (

            <PageContextProvider pageContext={{...this.props.pageContext, location: this.props.location, lang}}>
                <SEO metadata={{
                    title: "Mr. Ince Guru | Software Developer | Electrical Engineering Student",
                    description: "Hi, I am Enes Ince from Istanbul Technical University Electrical Engineering Department. You can call me Mr. Ince Guru. In my blog, I'll share content related to deep learning, machine learning, software development, smart grids",
                    keywords: ["enes ince", "ince guru", "developer enes", "enes deep learning", "mr ince guru", "enes ince ITU", "aws enes", "amazon web services enes"],
                    type: "website"
                }}>
                    <Helmet>
                        <meta name="yandex-verification" content="2abcdf66c68f1b71" />
                        <script type="application/ld+json">
                            {
                                `{
                                    "@context": "https://schema.org",
                                    "@type": "WebSite",
                                    "url": "https://www.ince.guru/",
                                    "name": "Enes Ince",
                                    "potentialAction": {
                                        "@type": "SearchAction",
                                        "target": "https://www.ince.guru/search?q={search_term_string}",
                                        "query-input": "required name=search_term_string"
                                    }
                                }`
                            }
                        </script>
                    </Helmet>
                    <Layout>
                        <div className="container">

                            <section className="posts">
                                {
                                    articles.map((article) => (<Post key={article.id} article={article}/>))
                                }
                                <Pagination currentPage={currentPage} pageNum={pageNum} pathPrefix="/page">

                                </Pagination>
                            </section>
                            <section className="sidebar">
                                <section>
                                    <span>sponsored</span>
                                    <a href="http://sgk40.com" rel="noopener noreferrer" target="_blank">
                                        <img width="100%" src={SGK40AdvertiseImage} alt="Sgk 4.0"/>
                                    </a>
                                </section>
                            </section>
                        </div>
                    </Layout>
                </SEO>
            </PageContextProvider>
        );

    }
}

export default Home;