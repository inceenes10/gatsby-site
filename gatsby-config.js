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
                // The property ID; the tracking code won't be generated without it
                trackingId: "UA-178402091-2",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                //exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "example.com",
            },
        },
    ],
    siteMetadata: {
        siteUrl: 'https://ince.guru'
    }
}
