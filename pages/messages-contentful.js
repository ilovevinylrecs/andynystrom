import Head from 'next/head'
import { fetchEntries } from '../utils/contentfulPosts'
import Post from '../components/post-homepage'

export default function Messages({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Andy Nystrom - Messages</title>
        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/> */}
      </Head>

      <main>
        <h1 className="messages">Messages</h1>
        <div className="posts">
          {posts.map((p) => {
            return <Post date={p.date} image={p.image.fields} title={p.title} />
          })}
        </div>
      </main>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Raleway', sans-serif;
          width: 100%;
          text-align: left;
          position: absolute;
        }

        main {
          padding: 3rem 3rem 3rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: left;
          align-items: left;
        }

        .posts {
          display: flex;
          flex-wrap: wrap;
          padding: 0 4px;
        }

        .messages {
          text-align: left;
          padding: 0px 0px 0px 1rem;
        }

      `}</style>

    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}