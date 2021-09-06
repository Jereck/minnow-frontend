import React from 'react'
import { useQuery, gql } from '@apollo/client'

import BlogCard from './components/blog-card.component';

const BLOG_POSTS = gql`
  query {
    posts {
      id
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
      { data.posts.map(( post ) => (
        <BlogCard key={post.title} post={post} />
      ))}
    </div>
  )
}
