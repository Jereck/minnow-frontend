import gql from 'graphql-tag';

export const getBlogsQuery = gql`
query {
  posts {
    id
    title
    image {
      src
    }
    content {
      document 
    }
    publishDate
    author {
      name
      email
    }
    tags {
      name
    }
    tagsCount
  }
}
`

export const getBlogQuery = gql`
query($id: ID) {
  post(where: { id: $id }) {
    id
    title
    image {
      src
    }
    content {
      document
    }
    publishDate
    author {
      name
      email
    }
    tags {
      name
    }
    tagsCount
  }
}
`