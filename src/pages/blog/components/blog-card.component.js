import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { DocumentRenderer } from '@keystone-next/document-renderer';

import getFormattedDate from '../../../helpers/dateFormatter'

const BlogCard = ({ post }) => {
  const formattedDate = getFormattedDate(post.publishDate)
  return (
    <div style={{ 
      margin: 5, 
      border: '1px solid rgba(0, 0, 0, 0.25)', 
      // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', 
      padding: 15, 
      width: '80%' 
    }}>
      <p>{ post.author.name } | { formattedDate }</p>
      <h1>{ post.title }</h1>
      {/* <DocumentRenderer document={post.content.document} /> */}
      <Link to={{ pathname: `/blog/${post.id}`, state: { sentPost: post } }}>Read More...</Link>
    </div>
  )
}

export default withRouter(BlogCard)