import React from "react";
import { PageContextProvider } from "../../Context/PageContext";
import SEO from "../../components/seo";
import Layout from "../../layouts";
import SGK40AdvertiseImage from "../../images/sgk40.jpg";
import Post from "../../components/Post/Post";
import { setDefaultLanguage, useTranslation } from "../../Hooks/Translation"
import Pagination from "../../components/Pagination/Pagination"



class CategoryPage extends React.Component {

    constructor(props) {
        super(props);
        setDefaultLanguage(this.props.pageContext.lang);
    }

    render() {

        const { t } = useTranslation()

        const { articles, pageNum, currentPage, slug } = this.props.pageContext;



        return (
            <PageContextProvider pageContext={{...this.props.pageContext, location: this.props.location}}>
                <SEO metadata={{
                    title: "Enes ince",
                    description: "Enes ince",
                    keywords: ["Enes", "ince"],
                    type: "website"
                }}>
                    <Layout>
                        <div className="container">

                            <section className="posts">
                                {
                                    articles.map((article) => (<Post key={Math.random()} article={article}/>))
                                }
                                <Pagination currentPage={currentPage} pageNum={pageNum} pathPrefix={`/category/${slug}`}>

                                </Pagination>
                            </section>
                            <section className="sidebar">
                                <section>
                                    <span>{t("sponsored")}</span>
                                    <a href="http://sgk40.com" rel="noopener noreferrer" target="_blank">
                                        <img width="100%" src={SGK40AdvertiseImage} alt="Sgk 4.0"/>
                                    </a>
                                </section>
                            </section>
                        </div>
                    </Layout>
                </SEO>
            </PageContextProvider>
        )

    }

}

export default CategoryPage;