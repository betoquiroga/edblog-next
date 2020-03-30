import fetch from 'node-fetch'
import Post from '../components/blog/Post'
import { NextSeo } from "next-seo"

const Home = ({ posts }) => (
  <div>
    <NextSeo
      title="Bienvenido a EDblog"
      description="EDblog es una creacion del curso de Next en EDteam"
      openGraph={{
        url: "https://ed.team",
        title: "Bienvenido a EDblog",
        description: "EDblog es una creacion del curso de Next en EDteam",
        images: [
          {
            url: "https://ed.team/images/algo.jpg",
            width: 1280,
            height: 720,
            alt: "Foto de perfil de EDteam"
          }
        ],
        site_name: "EDblog"
      }}
      twitter={{
        handle: "@edteamlat",
        site: "@edteamlat",
        cardType: "summary_large_image"
      }}
    />
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
