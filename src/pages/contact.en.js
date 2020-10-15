import React from "react";
import { setDefaultLanguage } from "../Hooks/Translation"
import Layout from "../layouts";
import SEO from "../components/seo"
import { PageContextProvider } from "../Context/PageContext"


function ContactPage(props) {
    const lang = "en";
    setDefaultLanguage(lang);

    return (
        <PageContextProvider pageContext={{
            ...props.pageContext, location: props.location, lang
        }}>
            <SEO metadata={{
                title: "Get Contact With Me | Enes Ince",
                description: "Get contact with me Enes Ince, you can ask me whatever you want, you can ask me to make new content, project or you can hire me",
                keywords: ["Contact", "Get contact", "hire me", "Enes"],
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