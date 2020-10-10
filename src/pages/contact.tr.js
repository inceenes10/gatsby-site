import React from "react";
import { setDefaultLanguage } from "../Hooks/Translation"
import Layout from "../layouts"
import SEO from "../components/seo"
import { PageContextProvider } from "../templates/Article/context/PageContext"


function ContactPage(props) {
    const lang = "tr";
    setDefaultLanguage(lang);



    return (
        <PageContextProvider pageContext={{
            ...props.pageContext, location: props.location, lang
        }}>
            <SEO metadata={{
                title: "Benimle İletişime Geç | Enes İnce",
                description: "Benimle iletişime geç Enes İnce, ",
                keywords: [],
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

export default ContactPage;