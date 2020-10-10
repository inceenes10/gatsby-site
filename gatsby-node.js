const path = require(`path`);
const isEmptyObject = require("is-empty-object");

exports.onCreatePage = function () {
    console.log('merhaba dünya');
}

exports.createPages = async ({ graphql, actions}) => {

    const { createPage } = actions;

    const result = await graphql(`
        query {
            appsync {
                listArticles {
                    items {
                        id
                        title
                        description
                        category {
                            name
                            slug
                            lang
                        }
                        slug
                        lang
                        body
                        youtubeVideo
                        image
                        metadata
                        tags {
                            items {
                                tags {
                                    slug
                                    name
                                    lang
                                }
                            }
                        }
                        status
                        redirect
                        createdAt
                        updatedAt
                    }
                }
                listCategorys {
                    items {
                        name
                        slug
                        lang
                        articles {
                            items {
                                title
                                description
                                image
                                createdAt
                                status
                                slug
                                redirect
                                lang
                                updatedAt
                                youtubeVideo
                            }
                        }
                    }
                }
                listTags {
                    items {
                        name
                        slug
                        lang
                        articles {
                            items {
                                articles {
                                    title
                                    description
                                    image
                                    createdAt
                                    status
                                    slug
                                    redirect
                                    lang
                                    updatedAt
                                    youtubeVideo
                                    category {
                                        name
                                        slug
                                        lang
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const { listArticles, listCategorys, listTags } = result.data.appsync;

    const indexPageCount = Math.ceil(listArticles.items.length / 10);



    listArticles.items.map(item => {
        createPage({
            context: { article: { ...item, metadata: JSON.parse(item.metadata) } },
            path: `/${item.lang}/article/${item.slug}`,
            component: path.resolve("./src/templates/Article/article.js")
        })



    })

    listCategorys.items.map(item => {

        const articles = item.articles.items;
        const articleCount = articles.length;
        const articlePageCount = Math.ceil(articleCount / 10);

        for (let i = 0; i < articlePageCount; i++) {
            let pageArticles = articles.slice(i * 10, i * 10 + 10)
                .map(pageArticle => {
                    pageArticle.image = JSON.parse(pageArticle.image);
                    pageArticle.youtubeVideo = JSON.parse(pageArticle.youtubeVideo);
                    pageArticle.category = {
                        name: item.name,
                        slug: item.slug,
                        lang: item.lang
                    }
                    return pageArticle;
                })

            let pageExt = "";
            if (i !== 0)
                pageExt = `${i + 1}/`;

            createPage({
                path: `/${item.lang}/category/${item.slug}/${pageExt}`,
                component: path.resolve("./src/templates/Category/category.js"),
                context: { ...item, articles: pageArticles }
            })
        }
    })

    listTags.items.map(item => {
        //console.log(item);
        const articles = item.articles.items;

        const articleCount = articles.length;
        const articlePageCount = Math.ceil(articleCount / 10);

        for (let i = 0; i < articlePageCount; i++) {
            const pageArticles = articles.slice(i * 10, i * 10 + 10)
                .map(pageArticle => {
                    pageArticle.image = (!isEmptyObject(pageArticle.image) && pageArticle.image) ? JSON.parse(pageArticle.image) : null;
                    pageArticle.youtubeVideo = (!isEmptyObject(pageArticle.youtubeVideo) && pageArticle.youtubeVideo) ? JSON.parse(pageArticle.youtubeVideo) : null;
                    return pageArticle;
                });

            let pageExt = "";
            if (i !== 0) {
                pageExt = `${i + 1}/`;
            }

            createPage({
                path: `/${item.lang}/tag/${item.slug}/${pageExt}`,
                component: path.resolve("./src/templates/Tag/tag.js"),
                context: {
                    ...item, articles: pageArticles
                }
            })
        }

    })

};

