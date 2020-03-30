import Head from 'next/head'
import fetch from 'node-fetch'
import Post from '../components/blog/Post'

const Home = ({ posts }) => (
  <div>
    <Head>
      <title>Home | {process.env.SITE_NAME} </title>
    </Head>
    <main>
      <h1>EDblog</h1> 
      <div className="ed-grid m-grid-3 row-gap">
        {
          posts.map(p => <Post key={p.id} post={p} /> )
        }
      </div>
    </main>
  </div>
)

export async function getStaticProps() {

  const resp = await fetch(`${process.env.API_BLOG}/posts`)
  const posts = await resp.json()

  return {
    props: {
      posts
    }
  }
}

export default Home
