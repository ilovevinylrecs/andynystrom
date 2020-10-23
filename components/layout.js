import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Messages'
export const siteTitle = 'Andy Nystrom'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        
        <meta
          name="Messages"
          content="Blog of things I like by Andy Nystrom"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
     
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/messages">
            <a>← Back to Messages</a>
          </Link>
        </div>
      )}
    </div>
  )
}