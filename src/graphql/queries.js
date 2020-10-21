/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      title
      description
      categoryId
      category {
        id
        name
        slug
        lang
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      slug
      lang
      body
      youtubeVideo
      image
      metadata
      tags {
        items {
          id
          articleId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      redirect
      createdAt
      updatedAt
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        categoryId
        category {
          id
          name
          slug
          lang
          createdAt
          updatedAt
        }
        slug
        lang
        body
        youtubeVideo
        image
        metadata
        tags {
          nextToken
        }
        status
        redirect
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArticleTag = /* GraphQL */ `
  query GetArticleTag($id: ID!) {
    getArticleTag(id: $id) {
      id
      articleId
      tagId
      tags {
        id
        name
        slug
        lang
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      articles {
        id
        title
        description
        categoryId
        category {
          id
          name
          slug
          lang
          createdAt
          updatedAt
        }
        slug
        lang
        body
        youtubeVideo
        image
        metadata
        tags {
          nextToken
        }
        status
        redirect
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listArticleTags = /* GraphQL */ `
  query ListArticleTags(
    $filter: ModelArticleTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticleTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        articleId
        tagId
        tags {
          id
          name
          slug
          lang
          createdAt
          updatedAt
        }
        articles {
          id
          title
          description
          categoryId
          slug
          lang
          body
          youtubeVideo
          image
          metadata
          status
          redirect
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      name
      slug
      lang
      articles {
        items {
          id
          articleId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slug
        lang
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      slug
      lang
      articles {
        items {
          id
          title
          description
          categoryId
          slug
          lang
          body
          youtubeVideo
          image
          metadata
          status
          redirect
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slug
        lang
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchArticles = /* GraphQL */ `
  query SearchArticles(
    $filter: SearchableArticleFilterInput
    $sort: SearchableArticleSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchArticles(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        categoryId
        category {
          id
          name
          slug
          lang
          createdAt
          updatedAt
        }
        slug
        lang
        body
        youtubeVideo
        image
        metadata
        tags {
          nextToken
        }
        status
        redirect
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchTags = /* GraphQL */ `
  query SearchTags(
    $filter: SearchableTagFilterInput
    $sort: SearchableTagSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchTags(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        slug
        lang
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
