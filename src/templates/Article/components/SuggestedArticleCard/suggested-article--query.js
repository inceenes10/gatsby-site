
const query = `query ($slug: String, $lang: String) {
    
    listArticles(filter: {slug: {eq: $slug}, lang: {eq: $lang}}) {
        items {
            title
            description
            slug
            image
            lang
            createdAt
            category {
                name
                slug
                lang
            }
        }
    }

}
`;

export default query;