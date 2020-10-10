import React from "react";
import { PageContextProvider } from "../Article/context/PageContext";
import SEO from "../../components/seo";
import capitalize from "../../Helpers/capitalize";
import Layout from "../../layouts";
import { setDefaultLanguage } from "../../Hooks/Translation";

function Tag(props) {
    setDefaultLanguage(props.pageContext.lang);

    return (
        <PageContextProvider pageContext={{...props.pageContext, location: props.location}}>
            <SEO metadata={{
                title: `${props.pageContext.name.toUpperCase()} | ${capitalize(`enes ince`)}`,
                type: "website"
            }}>
                <Layout>

                </Layout>
            </SEO>
        </PageContextProvider>
    )
}

export default Tag;