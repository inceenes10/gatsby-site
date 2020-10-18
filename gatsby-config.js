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
                query: `
                {
                  site {
                    siteMetadata {
                      siteUrl
                    }
                  }
                  allSitePage {
                    nodes {
                      path
                    }
                  }
                  appsync {
                    listArticles {
                      items {
                        updatedAt
                        slug
                      }
                    }
                  }
                }
                `,
                serialize({ site, allSitePage, appsync: { listArticles: { items } } }) {
                    return allSitePage.nodes.map((node) => {

                        const isTag = node.path.includes('/tag/')
                        const isArticle = node.path.includes('/article/')
                        const isCategory = node.path.includes('/category/')

                        const obj = {
                            url: `${site.siteMetadata.siteUrl}${node.path}`
                        };

                        if (isArticle) {
                            const slug = node.path.split('/').slice(-1)[0];

                            const el = items.find(el => {
                                return el.slug === slug
                            });

                            const date = new Date(el.updatedAt);

                            const day = date.getDate();
                            const month = date.getMonth() + 1;
                            const year = date.getFullYear();

                            obj.lastmod = `${year}-${month}-${day}`;
                            obj.priority = 0.7;
                        }

                        else if (isTag) {
                            obj.priority = 0.9;
                            obj.changefreq = 'weekly';
                        }

                        else if (isCategory) {
                            obj.priority = 0.8;
                            obj.changefreq = 'weekly';
                        }

                        else {
                            obj.priority = 1;
                            obj.changefreq = 'weekly';
                        }

                        return obj;
                    })
                }
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
        },/*
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-178402091-2",
                head: true,
                anonymize: true,
            },
        },*/
        'gatsby-plugin-robots-txt',
    ],
    siteMetadata: {
        siteUrl: 'https://ince.guru'
    }
}
