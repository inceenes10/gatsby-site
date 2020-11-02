

const query = `query ($q: String!, $lang: String!) {
                   searchArticles(filter: { title: { match: $q }, lang: { eq: $lang } }) {
                       items {
                           title
                           description
                           category {
                               name
                               lang
                               slug
                           }
                           image
                           slug
                           youtubeVideo
                           createdAt
                       }
                   }
               }`;


export default query;
