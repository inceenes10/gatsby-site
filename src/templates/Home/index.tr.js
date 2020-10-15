import React from "react";
import Layout from "../../layouts";
import { setDefaultLanguage } from "../../Hooks/Translation"
import SEO from "../../components/seo";
import { PageContextProvider } from "../../Context/PageContext";
import Post from "../../components/Post/Post"
import Pagination from "../../components/Pagination/Pagination"
import SGK40AdvertiseImage from "../../images/sgk40.jpg"


class Home extends React.Component {


    render() {
        const lang = "tr";
        setDefaultLanguage(lang);
        const { articles, pageNum, currentPage } = this.props.pageContext;

        return (

            <PageContextProvider pageContext={{...this.props.pageContext, location: this.props.location, lang}}>
                <SEO metadata={{
                    title: "Enes Ince | Electrical Engineering Student, Software Developer",
                    description: "",
                    keywords: [],
                    type: "website"
                }}>
                    <Layout>
                        <div className="container">

                            <section className="posts">
                                {
                                    articles.map((article) => (<Post key={Math.random()} article={article}/>))
                                }
                                <Pagination currentPage={currentPage} pageNum={pageNum}>

                                </Pagination>
                            </section>
                            <section className="sidebar">
                                <section>
                                    <span>sponsorlu</span>
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