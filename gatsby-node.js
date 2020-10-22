const path = require(`path`)
const isEmptyObject = require("is-empty-object")
const query = require('./nodeHelpers/query');

const groupByLang = require("./nodeHelpers/groupByLang");



exports.onCreatePage = function ({ actions: { deletePage }, page }) {
    if (page.componentPath.includes("index")) {
        deletePage(page)
    }
}

exports.createPages = async ({ graphql, actions}) => {

    const { createPage } = actions

    const result = await graphql(query);

    const { listArticles, listCategorys, listTags } = result.data.appsync;

    listArticles.items.map(item => {
        item.metadata = JSON.parse(item.metadata);
        item.image = JSON.parse(item.image);
        item.youtubeVideo = JSON.parse(item.youtubeVideo);
        return item;
    })

    const articlesByLanguage = groupByLang(listArticles.items);


    const itemPerPage = 10;

    for (let i = 0; i < Object.keys(articlesByLanguage).length; i++) {
        const lang = Object.keys(articlesByLanguage)[i];

        const pageNum = Math.ceil(articlesByLanguage[lang].length / itemPerPage)
        for (let j = 0; j < pageNum; j++) {
            const articlesByLangByPage = articlesByLanguage[lang].slice(j * itemPerPage, j * itemPerPage + itemPerPage);

            let _path = '';

            if (j === 0) {

                if (lang === "en") {
                    _path = "/"
                } else
                    _path = `/${lang}`
            }
            else
                _path = `/${lang}/page/${j + 1}`

            createPage({
                context: {
                    articles: articlesByLangByPage, currentPage: j + 1, pageNum
                },
                path: _path,
                component: path.resolve(`./src/templates/Home/index.${lang}.js`)
            })

        }
    }


    listArticles.items.map(item => {
        createPage({
            context: { article: { ...item } },
            path: `/${item.lang}/article/${item.slug}`,
            component: path.resolve("./src/templates/Article/article.js")
        })
    })

    listCategorys.items.map(item => {

        const articles = item.articles.items
        const articleCount = articles.length;
        const itemPerPage = 10;
        const articlePageCount = Math.ceil(articleCount / itemPerPage);

        for (let i = 0; i < articlePageCount; i++) {
            let pageArticles = articles.slice(i * itemPerPage, i * itemPerPage + itemPerPage)
                .map(pageArticle => {
                    pageArticle.image = JSON.parse(pageArticle.image)
                    pageArticle.youtubeVideo = JSON.parse(pageArticle.youtubeVideo)
                    pageArticle.category = {
                        name: item.name,
                        slug: item.slug,
                        lang: item.lang
                    }
                    return pageArticle
                })

            let pageExt = ""
            let currentPage = 1
            if (i !== 0) {
                pageExt = `${i + 1}/`
                currentPage = i + 1
            }

            createPage({
                path: `/${item.lang}/category/${item.slug}/${pageExt}`,
                component: path.resolve("./src/templates/Category/category.js"),
                context: { ...item, articles: pageArticles, currentPage, pageNum: articlePageCount }
            })
        }
    })

    listTags.items.map(item => {
        const articles = item.articles.items

        const articleCount = articles.length;
        const itemPerPage = 10;
        const articlePageCount = Math.ceil(articleCount / itemPerPage)

        for (let i = 0; i < articlePageCount; i++) {
            const pageArticles = articles.slice(i * itemPerPage, i * itemPerPage + itemPerPage)
                .map(pageArticle => {
                    pageArticle.image = (!isEmptyObject(pageArticle.image) && pageArticle.image) ? JSON.parse(pageArticle.image) : null
                    pageArticle.youtubeVideo = (!isEmptyObject(pageArticle.youtubeVideo) && pageArticle.youtubeVideo) ? JSON.parse(pageArticle.youtubeVideo) : null
                    return pageArticle
                })

            let pageExt = ""
            if (i !== 0) {
                pageExt = `${i + 1}/`
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

}

