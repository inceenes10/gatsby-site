/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
export const onCreateArticleTag = /* GraphQL */ `
  subscription OnCreateArticleTag {
    onCreateArticleTag {
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
export const onUpdateArticleTag = /* GraphQL */ `
  subscription OnUpdateArticleTag {
    onUpdateArticleTag {
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
export const onDeleteArticleTag = /* GraphQL */ `
  subscription OnDeleteArticleTag {
    onDeleteArticleTag {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
