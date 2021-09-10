import React from 'react'
import { Link } from 'react-router-dom'

import { DocumentRenderer } from '@keystone-next/document-renderer';

function BlogCard({ post }) {
  return (
    <div style={{ margin: 20, border: '1px solid black', padding: 15 }}>
      <h1>{ post.title }</h1>
      <span>{ post.author.name }</span>
      <DocumentRenderer document={post.content.document} />
      <Link to='/blogs' params={{ id: post.id }}>Read More...</Link>
    </div>
  )
}

export default BlogCard