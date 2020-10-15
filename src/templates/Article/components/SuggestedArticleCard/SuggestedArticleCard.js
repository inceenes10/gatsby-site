import React  from "react";
import { API } from "aws-amplify";
import styles from "./suggested-article.module.css";
import query from "./suggested-article--query";
import isEmptyObject from "is-empty-object";
import { Link } from "gatsby";
import moment from "moment";

class SuggestedArticleCard extends React.Component {

    state = {
        article: {
            title: "Manage Your Passwords Better with Enpass Password Manager, Now 58 Percent Off",
            description: "We all have enough going on in our lives without having to worry about how we get into all of our online accounts. Keeping a notebook full of passwords isn't exactly the ",
            image: {
                image700: "https://assets.entrepreneur.com/content/3x2/2000/1601919557-GettyImages-1163132207.jpg?format=jpg&width=500&crop=3:2",
                image200: "https://assets.entrepreneur.com/content/3x2/2000/1601919557-GettyImages-1163132207.jpg?format=jpg&width=500&crop=3:2"
            },
            lang: "tr",
            slug: "girisimcilik-dersleri",
            createdAt: "2020-10-03T16:16:24.408Z",
            category: {
                name: "Veri Yapıları Ve Algoritmalar",
                slug: "girisimcilik",
                lang: "tr"
            }
        }
    }




    shouldComponentUpdate(nextProps, nextState, nextContext) {

        if (this.state.article === nextState.article)
            return false;
        return true;
    }

    componentDidMount() {

        this.fetchData()

    }


    fetchData = () => {
        return false;
        const { slug, lang } = this.props;

        API.graphql({
            query, variables: {
                slug, lang
            }
        }).then(result => {
            const article = {
                ...result.data.listArticles.items[0],
                image: JSON.parse(result.data.listArticles.items[0].image)
            };
            this.setState({ article: article })
        }).catch(() => {
            alert("Sunucudan veri çekilirken bir hata oluştu");
        })
    }

    render() {
        const { article } = this.state;

        const date = new Date(article.createdAt);
        const createdAt = moment(date).fromNow();


        if (article.image && !isEmptyObject(article.image)) {
            return (
                <div className={styles.container}>
                    <div className={styles.hero}>
                        <img src={article.image.image700} alt="" width="100%"/>
                    </div>
                    <div className={styles.block}>
                        <Link className={styles.category} to={`/${article.category.lang}/category/${article.category.slug}`}>
                            {article.category.name}
                        </Link>
                        <Link to={`/${article.lang}/article/enes-ince`} className={styles.title}>
                            <h3>
                                {article.title}
                            </h3>
                        </Link>
                        <p className={styles.description}>
                            {article.description}
                        </p>
                        <p className={styles.date}>
                            {createdAt}
                        </p>

                    </div>
                    <div className={styles.relatedContentContainer}>
                        İLGİLİ İÇERİK
                    </div>
                </div>
            );
        }

        return (
            <div className={`${styles.container} ${styles.flexColumn}`}>
                <div className={styles.relatedContentContainer}>
                    İLGİLİ İÇERİK
                </div>


                <Link className={styles.category} to={`/${article.category.lang}/category/${article.category.slug}`}>
                    {article.category.name}
                </Link>


                <Link to={`/${article.lang}/article/${article.slug}`} className={styles.title}>
                    <h3>
                        {article.title}

                    </h3>
                </Link>
                <p className={styles.description}>
                    {article.description}

                </p>
                <p className={styles.date}>
                    {createdAt}
                </p>

            </div>
        );

    }


}

export default SuggestedArticleCard;
