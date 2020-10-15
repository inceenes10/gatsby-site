/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
export const createArticleTag = /* GraphQL */ `
  mutation CreateArticleTag(
    $input: CreateArticleTagInput!
    $condition: ModelArticleTagConditionInput
  ) {
    createArticleTag(input: $input, condition: $condition) {
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
export const updateArticleTag = /* GraphQL */ `
  mutation UpdateArticleTag(
    $input: UpdateArticleTagInput!
    $condition: ModelArticleTagConditionInput
  ) {
    updateArticleTag(input: $input, condition: $condition) {
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
export const deleteArticleTag = /* GraphQL */ `
  mutation DeleteArticleTag(
    $input: DeleteArticleTagInput!
    $condition: ModelArticleTagConditionInput
  ) {
    deleteArticleTag(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
