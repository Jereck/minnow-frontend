import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GET_BLOGS } from './constants';

import BlogCard from './components/blog-card.component';

const Blog = () => {
  const dispatch = useDispatch();
  const { loading, posts } = useSelector(state => state.blogs );

  console.log("POSTS: ", posts)

  useEffect(() => {
    dispatch({ type: GET_BLOGS })
  }, [])
  
  if (loading) return <p>Loading...</p>

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 25 }}>
        <h1 style={{ fontSize: 64, fontWeight: 100 }}>Blog</h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        { posts.map(( post ) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
      

    </div>
  )
}

export default Blog