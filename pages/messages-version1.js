

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export default function Messages ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Andy Nystrom - Messages</title>
      </Head>
      <section className={utilStyles.headingMd}>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>MESSAGES</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
}


// export default function ContentfulTest() {
//     return (
//       <div>
//         <h1>Messages</h1>       
//       </div>
//     )
// }

// const contentful = require("contentful");

// const client = contentful.createClient({
//   space: "fzwk2xh0k7xd",
//   accessToken: "Q23CSlyV-qu0cpn4kaiGUHjadwRnnW9E3I7L7_MNVDs"
// });

// client.getEntries()
// .then((response) => console.log(response.items))
// .catch(console.error)
