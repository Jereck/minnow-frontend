import React from 'react'
import { useLocation } from 'react-router-dom'
import { DocumentRenderer } from '@keystone-next/document-renderer';

const BlogDetail = () => {
  const location = useLocation();
  const { sentPost } = location.state

  return (
    <div>
      <h1>{ sentPost.title }</h1>
      { console.log("SENT POST: ", sentPost)}
      <img src={ sentPost.image.src } />
      <p>{ sentPost.author.name }</p>
      <hr />
      <DocumentRenderer document={ sentPost.content.document } />
    </div>
  )
}

export default BlogDetail