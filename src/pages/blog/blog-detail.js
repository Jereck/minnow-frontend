import React from 'react'
import { Badge } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { DocumentRenderer } from '@keystone-next/document-renderer';

import getFormattedDate from '../../helpers/dateFormatter'

const BlogDetail = () => {
  const location = useLocation();
  const { sentPost } = location.state

  const formattedDate = getFormattedDate(sentPost.publishDate)

  return (
    <div style={{ margin: '0 auto', padding: 25, textAlign: 'center', width: '85%' }}>
      <p style={{ fontSize: '0.9rem', color: 'gray' }}>Published {formattedDate}</p>
      <h1 style={{ fontSize: '4rem', fontWeight: 100 }}>{ sentPost.title }</h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        { sentPost.tags.map((tag) => (
          <Badge pill bg="secondary" style={{ margin: 3 }}>{tag.name}</Badge>
        ))}
      </div>
      <p style={{ fontSize: '0.9rem' }}>{ sentPost.author.name }</p>
      <DocumentRenderer document={ sentPost.content.document } />
    </div>
  )
}

export default BlogDetail