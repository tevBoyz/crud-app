import React from 'react'
import { Link } from 'react-router-dom'

function Posts() {
  return (
    <div>
      <Link to="PostList">Nested Post List</Link>
    </div>
  )
}

export default Posts