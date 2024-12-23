import Link from 'next/link'
import React from 'react'



const articlesPage = () => {
  return (
    <div>
        <h1>articles Page</h1>

        <Link href="/posts">
          <button>Take me to post page </button>
        </Link>

    </div>
  )
}

export default articlesPage
