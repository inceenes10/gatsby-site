import React from "react";
import { getDefaultLanguage, setDefaultLanguage, setTranslation, } from "../Hooks/Translation";
import SEO from "../components/seo";
import { PageContextProvider } from "../Context/PageContext";
import en from "../translations/en/layout";
import tr from "../translations/tr/layout";
import query from "../Helpers/search-query";
import CloseIcon from "../images/close.svg";
import SearchIcon from "../images/search.svg";
import AutoForm from "react-auto-form";
import styles from "./styles/search-page.module.css";
import Layout from "../layouts";
import Amplify, { API } from "aws-amplify";
import awsconfig from "../aws-exports";
import Post from "../components/Post/Post";
Amplify.configure(awsconfig);

setTranslation({
    en, tr
});


class SearchPage extends React.Component {

    state = {
        articles: []
    }

    variables = { q: "" };

    constructor(props) {

        super(props);

        this.resetClicked = this.resetClicked.bind(this);
        this.fetchSearchData = this.fetchSearchData.bind(this);
        this.loadMoreData = this.loadMoreData.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.graphQLWithTimeout = this.graphQLWithTimeout.bind(this);

        this.searchInput = React.createRef();
        this.loadingField = React.createRef();
        this.noResultField = React.createRef();
        this.timeoutField = React.createRef();
    }

    componentDidMount() {



        const searchParams = new URLSearchParams(this.props.location.search);

        this.variables.q = searchParams.get("q");

        this.searchInput.current.value = this.variables.q;

        if (document.readyState === "complete" && this.variables.q)
            this.fetchSearchData();
    }

    resetClicked() {
        this.searchInput.current.focus();
    }


    graphQLWithTimeout(promise, ms, onTimeout) {

        const timer = new Promise((resolve) => {
            setTimeout(resolve, ms, {
                timeout: true,
            });
        });
        return Promise.race([
            promise,
            timer
        ]).then(response => {
            if (response.timeout) {
                onTimeout();
            }
            return response;
        });
    }

    fetchSearchData() {

        this.loadingField.current.style.display = "block";
        this.noResultField.current.style.display = "none";
        this.timeoutField.current.style.display = "none";

        const lang = getDefaultLanguage();


        const searchArticlesQuery = API.graphql({
            query: query, variables: { ...this.variables, lang }
        })

        this.graphQLWithTimeout(searchArticlesQuery, 5000, () => {
            this.timeoutField.current.style.display = "block";
        })
            .then(({ data: { searchArticles } }) => {
                const articles = searchArticles.items;

                this.noResultField.current.style.display = articles.length > 0 ? "none" : "block";

                window.history.pushState({}, null, `/${lang}/search?q=${encodeURIComponent(this.variables.q)}`)
                document.title = `${this.variables.q} İçin Arama Sonuçları | Enes İnce`;

                this.setState({
                    articles
                });
            })
            .catch(() => {
                this.setState({
                    articles: []
                })
            })
            .finally(() => {
                this.loadingField.current.style.display = "none";
            })

    }


    handleSearch(e, variables) {

        e.preventDefault();
        this.variables = variables;

        this.fetchSearchData();
    }

    loadMoreData() {

    }

    render() {
        const lang = "tr";
        setDefaultLanguage(lang);

        return (
            <PageContextProvider pageContext={{
                ...this.props.pageContext, location: this.props.location, lang
            }}>
                <SEO metadata={{
                    title: "Arama Sayfası | Enes İnce",
                    description: "Arama sayfasında istediğiniz her şeye kolaylıkla ulaşabilirsiniz.",
                    keywords: ["Ara", "arama sayfası", "Enes İnce"],
                    type: "website",
                    image: {
                        src: ""
                    }
                }}>


                    <Layout>
                        <div className={styles.searchContainer}>
                            <AutoForm onSubmit={this.handleSearch}>
                                <div className={styles.searchBar}>
                                    <input type="text" ref={this.searchInput} name="q" className={styles.searchInput} placeholder="Arama Yap..." required={true}/>
                                    <label htmlFor="reset--search-form" className={styles.resetSearchFormLabel}>
                                        <img src={CloseIcon} alt="reset the form"/>
                                    </label>
                                    <input type="reset" id="reset--search-form" className={styles.resetSearchForm} src={SearchIcon} onClick={this.resetClicked}/>
                                    <input type="image" className={styles.inputImage} src={SearchIcon} alt="search"/>
                                </div>
                            </AutoForm>


                            <div className="posts" style={{ marginTop: 30 }}>

                                <div ref={this.loadingField} className={styles.loadingContainer}>
                                    <div className={styles.skChase} >
                                        <div className={styles.skChaseDot}></div>
                                        <div className={styles.skChaseDot}></div>
                                        <div className={styles.skChaseDot}></div>
                                        <div className={styles.skChaseDot}></div>
                                        <div className={styles.skChaseDot}></div>
                                        <div className={styles.skChaseDot}></div>
                                    </div>
                                </div>


                                <div className={styles.error} ref={this.noResultField}>I am sorry, nothing found</div>

                                <div className={styles.error} ref={this.timeoutField}>Timeout, please check your internet connection</div>

                                {
                                    this.state.articles.map(article => {
                                        return (
                                            <Post article={article} key={Math.random()}></Post>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </Layout>

                </SEO>
            </PageContextProvider>
        )
    }
}

export default SearchPage;
