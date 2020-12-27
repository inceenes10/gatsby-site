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
                    title: "Mr. Ince Guru | Yazılım Geliştirici | Elektrik Mühendisliği Öğrencisi",
                    description: "Merhaba ben İTÜ Elektrik mühendisliği öğrencisi Enes İnce. Bana Mr. Ince Guru da diyebilirsin. Blogumda yazılım, AWS, derin öğrenme ve makine öğrenimi ve akıllı şebekelerle ilgili içerikler paylaşıyorum",
                    keywords: ["enes ince", "ince guru", "yazılımcı enes", "enes derin öğrenme", "mr ince guru", "enes ince itü", "enes itü", "aws enes", "amazon web servisleri enes"],
                    type: "website"
                }}>
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