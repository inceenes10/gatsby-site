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
                        <h1>Hakkımda</h1>
                        <p>
                            2016 yılından itibaren yazılım geliştirme üzerine çalışıyorum, web programlama, makine öğrenimi, derin öğrenme
                            ve veritabanı sistemleri hakkında bilgilerim var. Kendimi tanıtacak olursam ben İstanbul Teknik Üniversitesi
                            Elektrik Mühendisliğinden Enes İnce. Bugün sana azıcık da olsa geçmişimden ve hemen ardından bugünümden ve gelecek
                            hedeflerimden bahsedeceğim.
                        </p>
                        <p>
                            Bundan yaklaşık olarak 19 yıl önce Gaziantep'in Şahinbey İlçesinde doğdum. Anaokulu, ilkokul ve ortaokulu bitirdikten sonra,
                            2015 yılında liseye başladım ve 2016 yılının ocak ayında aynı yurtta kaldığım bir arkadaşımın önerisiyle C programlama dilinde
                            kod yazmaya başladım, fakat ne ingilizce ne matematik, ne programlama ne de yazılım mühendisliği hakkında hiçbir şey bilmiyordum.
                        </p>
                        <p>
                            Zaman ilerledikçe, bu ihtiyaçları (ingilizce hariç) kapatmaya başladım, ancak bu sefer de dersleri kaçırmaya ve okul bakımından akranlarımın gerisinde kalmaya
                            başladım. 12. sınıfa geldiğimde, Açıköğretim lisesine geçtim ve üniversite sınavına hazırlandım. Sınav sonuçlarıyla
                            İTÜ Elektrik Mühendisliğine yerleşmeye hak kazandım. Üniversiteye girdikten sonra 1 yıl hazırlık okudum ve bugün elektrik mühendisliği
                            bölümünde 1. sınıf öğrencisiyim.
                        </p>
                        <p>
                            Bugün frontend backend geliştirme açısından web programlamada orta ileri düzey bilgim var ve
                            makine öğrenimi üzerine az da olsa sezgiye (intuition) sahibim. Gelecekte, makine öğrenimi ve
                            elektrik mühendisliğinin kesişimine odaklanmak istiyorum. Bu yüzden akıllı şebekeleri kendime hedef olarak
                            seçtim, ki akıllı şebekeler henüz çocukluk döneminde ve ben ilerleyen yıllarda bu şebekelerin geleceğin teknolojileri arasında
                            yer alacağına inanıyorum. Evet, kariyerime akıllı şebekeler alanında yön vereceğim.
                        </p>
                        <p>
                            Bu blogu açmamın amacı fikirlerimi başka insanlarla paylaşma isteğimdir ve ben kendi bilgilerimi
                            başkalarıyla paylaşmaktan da zevk alıyorum. İçeriklerimi severek okuyacağınızı umuyorum.
                            THIS BLOG IS FOR YOU TO DISCOVER MY WORLD
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