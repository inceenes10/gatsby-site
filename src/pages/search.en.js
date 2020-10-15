import React from "react";
import { setDefaultLanguage } from "../Hooks/Translation"
import Layout from "../layouts";
import SEO from "../components/seo"
import { PageContextProvider } from "../Context/PageContext"


function SearchPage(props) {
    const lang = "en";
    setDefaultLanguage(lang);

    return (
        <PageContextProvider pageContext={{
            ...props.pageContext, location: props.location, lang
        }}>
            <SEO metadata={{
                title: "Search Page | Enes Ince",
                description: "You can access to whole website content easily from the search page",
                keywords: ["Search", "search page", "Enes", "Ince"],
                type: "website",
                image: {
                    src: ""
                }
            }}>
                <Layout>

                </Layout>
            </SEO>
        </PageContextProvider>
    )

}

export default SearchPage;