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
        }
    ],
    siteMetadata: {
        siteUrl: 'https://ince.guru',
        categories: {
            tr: {},
            en: {}
        }
    }
}
