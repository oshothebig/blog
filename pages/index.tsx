import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <h1 className="title">
      <Link href="/posts/first-post">
        <a>First post</a>
      </Link>
    </h1>
  )
}

export default Home
