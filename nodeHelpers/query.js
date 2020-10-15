
const query = `
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
    `
module.exports = query;