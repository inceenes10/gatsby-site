/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "Appsync",
                fieldName: "appsync",
                url: process.env.APPSYNC_API_URL,
                headers: {
                    "x-api-key": process.env.APPSYNC_API_KEY
                }
            }
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-react-helmet-canonical-urls`,
            options: {
                siteUrl: `https://www.ince.guru`,
                noHash: true,
                noQueryString: true,
                noTrailingSlash: true
            },
        },
        {
            resolve: 'gatsby-plugin-i18n',
            options: {
                langKeyDefault: 'en',
                useLangKeyLayout: false
            }
        },
        `gatsby-plugin-remove-trailing-slashes`,
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                createLinkInHead: true,
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Enes Ince | Electrical Engineering Student, Software Developer`,
                short_name: `Enes Ince - ince.guru`,
                description: `some description`,
                lang: `en`,
                display: `standalone`,
                icon: `./static/EI16.png`,
                icons: [
                    {
                        src: `./static/EI192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `./static/EI512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#fff`,
                cache_busting_mode: `none`,
                localize: [{
                    start_url: '/tr/',
                    lang: 'tr',
                    name: 'Enes İnce | Elektrik Mühendisliği Öğrencisi, Yazılım Geliştirici',
                    short_name: 'Enes İnce - ince.guru',
                    description: 'bir açıklama'
                }]
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [
                    '/*/category/*',
                    '/', "/tr", '/*/about'
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-178402091-2",
                head: true,
                anonymize: true,
            },
        },
    ],
    siteMetadata: {
        siteUrl: 'https://ince.guru'
    }
}
