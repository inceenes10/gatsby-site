import React from "react";
import { setDefaultLanguage } from "../Hooks/Translation";
import Layout from "../layouts";
import SEO from "../components/seo";
import styles from "./styles/styles.module.css";
import { PageContextProvider } from "../Context/PageContext"
import DisqusComments from "../components/DisqusComments/DisqusComments"

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
                    <article className={styles.container}>
                        <h1>About Me</h1>
                        <p>
                            I've been working on software development since 2016,
                            I'm interested in web programming, machine learning, deep learning and database systems.
                            I'm <strong>Enes Ince</strong> from Istanbul Technical University in the Department of Electrical Engineering.
                            Today, I'm going to talk about my past a little bit, then talk about my today and my future
                            goals.
                        </p>
                        <p>
                            I was born in <strong>Gaziantep/Şahinbey</strong> before about 19 years ago from today. In the year of 2015,
                            I started to high school and in January of 2016, with the suggestion of my friend with whom I'm in same
                            dormitory, I started to write code with <strong>C programming language</strong>, but I don't know English, math
                            and the needs for <strong>programming</strong> and <strong>software engineering</strong>.
                        </p>
                        <p>
                            Over time, I began to complete these needs, but this time I missed the classes and
                            I was behind my peers in terms of classes. When I came to 12. grade, I switched to open education
                            high school and I began to prepare university exam (YKS). With the exam results, I entered
                            Istanbul Technical University Electrical Engineering Department.
                            After entering the university, I studied in one-year preparation school (YDY)
                            and today, I'm a freshman in electrical engineering department.
                        </p>
                        <p>
                            Today, I have a intermediate-advanced insight into web development (frontend - backend)
                            and basic understanding of machine learning (python).
                            Among my future goals, I will focus on the intersect of machine learning and
                            electrical engineering. That's why I chose Smart Grids, which it is even its infant,
                            and I think that Smart Grids is technology of upcoming years and
                            I will continue my career in Smart Grids.
                        </p>
                        <p>
                            The goal of opening up this blog is that I'd like to
                            share my ideas with people and I like to share my knowledge
                            with others. I hope you enjoy reading my contents. This blog is for you
                            to discover my world.
                        </p>
                    </article>
                    <section className={styles.commentContainer}>
                        <DisqusComments canonicalURL={`${props.location.origin}${props.location.pathname}`} id="hakkimda234824" title="About Me | Enes Ince"/>
                    </section>
                </Layout>
            </SEO>
        </PageContextProvider>
    )

}

export default AboutPage;