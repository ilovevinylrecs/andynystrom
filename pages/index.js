import Head from 'next/head'

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
        <h1 className="title my-row col align-items-center my-col">
         ANDY NYSTROM
        </h1>
          <div className="section row align-items-start my-row">
            <h2 className="col-lg-2 align-items-center my-col">
              ABOUT
            </h2>
            <h2 className="col-lg-2 align-items-center my-col">
              CONTACT
            </h2>
            <h2 className="col-lg-2 align-items-center my-col">
              GITHUB
            </h2>
            <h2 className="col-lg-2 align-items-center my-col">
              FLATFILE
            </h2>
            <h2 className="col-lg-2 align-items-center my-col">
              MUSIC
            </h2>
            <h2 className="col-lg-2 align-items-center my-col">
              VINYL
            </h2>
          </div>
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

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}