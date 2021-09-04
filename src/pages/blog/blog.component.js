import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { DocumentRenderer } from '@keystone-next/document-renderer';

const BLOG_POSTS = gql`
  query {
    posts {
      author {
        name
      }
      title
      content {
        document 
      }
    }
  }
`

export default function Blog() {
  const { loading, error, data } = useQuery(BLOG_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }
  
  return (
    <div>
      <h1>Blog</h1>
      { data.posts.map(({ author, title, content }) => (
        <div style={{ margin: 25, padding: 15, border: '1px solid black' }}>
          <h1>{ title }</h1>
          <p style={{ fontSize: 12, color: 'grey' }}>{ author.name }</p>
          <DocumentRenderer document={content.document} />
        </div>
      ))}
    </div>
  )
}
