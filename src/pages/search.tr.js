import React from "react";
import {
    getDefaultLanguage,
    localesInfo,
    setDefaultLanguage,
    setTranslation,
    useTranslation
} from "../Hooks/Translation"
import SEO from "../components/seo";
import { PageContextProvider } from "../Context/PageContext";
import en from "../translations/en/layout";
import tr from "../translations/tr/layout";
import query from "../Helpers/search-query.js";
import moment from "moment";
import LocalizedLink from "../components/LocalizedLink/LocalizedLink";
import { Link } from "gatsby";
import CloseIcon from "../images/close.svg";
import SearchIcon from "../images/search.svg";
import AutoForm from "react-auto-form";
import styles from "./styles/search-page.module.css";
import Layout from "../layouts";
import Amplify, { API } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

setTranslation({
    en, tr
});


class SearchPage extends React.Component {

    state = {
        articles: []
    }

    variables = { q: "" };


    //q = new URLSearchParams(this.props.location.search).get("q");
    constructor(props) {

        super(props);

        this.resetClicked = this.resetClicked.bind(this);
        this.fetchSearchData = this.fetchSearchData.bind(this);
        this.loadMoreData = this.loadMoreData.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.searchInput = React.createRef();
        this.loadingField = React.createRef();

    }

    componentDidMount() {

        const searchParams = new URLSearchParams(this.props.location.search);
        this.q = searchParams.get("q");

        this.searchInput.current.value = this.q;

        if (document.readyState === "complete" && this.q)
            this.fetchSearchData();
    }

    resetClicked() {
        this.searchInput.current.focus();
    }

    async fetchSearchData() {

        this.loadingField.current.style.display = "block";
        const lang = getDefaultLanguage()
        const articles = await API.graphql({
            query, variables: { ...this.variables, lang }
        });

        console.log(articles);

        this.setState(articles);

        this.loadingField.current.style.display = "none";

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
                                    <input type="text" ref={this.searchInput} name="q" className={styles.searchInput} placeholder="Search..." required={true}/>
                                    <label htmlFor="reset--search-form" className={styles.resetSearchFormLabel}>
                                        <img src={CloseIcon} alt="reset the form"/>
                                    </label>
                                    <input type="reset" id="reset--search-form" className={styles.resetSearchForm} src={SearchIcon} onClick={this.resetClicked}/>
                                    <input type="image" className={styles.inputImage} src={SearchIcon} alt="search"/>
                                </div>
                            </AutoForm>

                            <div ref={this.loadingField} style={{ display: "none" }}>
                                Loading...
                            </div>

                        </div>
                    </Layout>

                </SEO>
            </PageContextProvider>
        )
    }
}

export default SearchPage;
