import Head from 'next/head'

const Menu = () => {
    return <div className="section align-items-start">
    <a className="h2 col-lg-2 align-items-center" style={{ color: "black" }}>
      ABOUT
    </a>
    <a className="h2 col-lg-2 align-items-center" style={{ color: "black" }}>
      CONTACT
    </a>
    <a className="h2 col-lg-2 align-items-center" style={{ color: "black" }}>
      GITHUB
    </a>
    <a className="h2 col-lg-2 align-items-center" style={{ color: "black" }}>
      FLATFILE
    </a>
    <a className="h2 col-lg-2 align-items-center" style={{ color: "black" }}>
      MUSIC
    </a>
    <a className="h2 col-lg-2 align-items-center" style={{ color: "black" }}>
      VINYL
    </a>
  </div>
}

export default function Home() {
  return (
    <div className="home">
      <Head>
        <meta
        charSet="UTF-8"
        name="viewport"
        content="width=device-width, initial-scale=1"
        />

        <title>Andy Nystrom - Home</title>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
      </Head>

      <main>
        <h1 className="title align-items-center">
         ANDY NYSTROM
        </h1>
          <Menu />             
      </main>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');

        .home {
          font-family: 'Raleway', sans-serif;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: 0;
          padding: 0;
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }

        .title {
          font-size: 10vw;
        }

      `}</style>
    </div>
  )
}