import React from "react";
import { setDefaultLanguage } from "../Hooks/Translation";
import Layout from "../layouts";
import SEO from "../components/seo";
import styles from "./styles/styles.module.css";
import { PageContextProvider } from "../Context/PageContext"

function AboutPage(props) {
    const lang = "tr";
    setDefaultLanguage(lang);

    return (
        <PageContextProvider pageContext={{
            ...props.pageContext, location: props.location, lang
        }}>
            <SEO metadata={{
                title: "Hakkımda | Enes İnce",
                description: "Hakkımda Enes İnce, 2016'dan beri yazılım geliştirme ile ilgileniyorum. İTÜ'de elektrik mühendisliği okuyorum. Gaziantep'te yaşıyorum",
                keywords: ["Hakkımda", "Yazılım Geliştirme", "Gaziantep", "Enes İnce", "Enes", "İnce", "Enes İnce kimdir"],
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

export default AboutPage;