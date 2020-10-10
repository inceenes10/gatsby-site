import React from "react";
import { setDefaultLanguage } from "../Hooks/Translation"
import Layout from "../layouts";
import SEO from "../components/seo"
import { PageContextProvider } from "../templates/Article/context/PageContext"


function SearchPage(props) {
    const lang = "tr";
    setDefaultLanguage(lang);

    return (
        <PageContextProvider pageContext={{
            ...props.pageContext, location: props.location, lang
        }}>
            <SEO metadata={{
                title: "Arama Sayfası | Enes İnce",
                description: "Arama sayfasında istediğiniz her şeye kolaylıkla ulaşabilirsiniz.",
                keywords: ["Ara", "arama sayfası", "Enes İnce"],
                type: "website",
                image: {
                    src: ""
                }
            }}
            >
                <Layout>

                </Layout>
            </SEO>
        </PageContextProvider>
    )

}

export default SearchPage;