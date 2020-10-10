import React from "react";
import Layout from "../layouts";
import { setDefaultLanguage } from "../Hooks/Translation"
import SEO from "../components/seo";
import { PageContextProvider } from "../templates/Article/context/PageContext";


function Home(props) {
    const lang = "en";
    setDefaultLanguage(lang);
    return (

        <PageContextProvider pageContext={{...props.pageContext, location: props.location, lang}}>
            <SEO metadata={{
                title: "Enes Ince | Electrical Engineering Student, Software Developer",
                description: "",
                keywords: [],
                type: "website"
            }}>
                <Layout>
                    En
                </Layout>
            </SEO>
        </PageContextProvider>
    );

}

export default Home;