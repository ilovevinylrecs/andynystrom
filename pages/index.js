import Head from 'next/head'
import Link from 'next/link'


const Menu = () => {
    return <div className="section align-items-start row">
      <Link href="/about">
        <a className="h2 col-lg align-items-center" style={{ color: "black" }} target="_blank">
        ABOUT</a>
      </Link>
      
      <Link href="/flatfile">
        <a className="h2 col-lg align-items-center" style={{ color: "black" }} target="_blank">
          FLATFILE</a>
      </Link>

      
      <a href="https://github.com/ilovevinylrecs" className="h2 col-lg align-items-center" style={{ color: "black" }} target="_blank">
        GITHUB</a>
      
      
      <Link href="/messages">
      <a className="h2 col-lg align-items-center" style={{ color: "black" }} target="_blank">
        MESSAGES
      </a>
      </Link>

      <Link href="/vinyl">
        <a className="h2 col-lg align-items-center" style={{ color: "black" }} target="_blank">
          VINYL</a>
      </Link>
    </div>
}

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Andy Nystrom - Home</title>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
      </Head>

      <main>
        <h1 className="title container-fluid align-items-center">
         ANDY NYSTROM
        </h1>
        <Menu />             
      </main>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');

        .home {
          font-family: 'Raleway', sans-serif;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 85%;
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
        .title {
          font-size: 10vw;
          padding: 0px 0px 0px 0px;
        }
      `}</style>
    </div>
  )
}