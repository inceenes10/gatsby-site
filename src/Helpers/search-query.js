

const query = `query ($q: String!, $lang: String!) {
                   searchArticles(filter: { title: { match: $q }, lang: { eq: $lang } }) {
                       items {
                           title
                           description
                       }
                   }
               }`;


export default query;
