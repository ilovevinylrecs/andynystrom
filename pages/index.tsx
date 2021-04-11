import Head from 'next/head'

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Andy Nystrom - Home</title>
      </Head>

      <h1>ANDY NYSTROM</h1>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');

        .home {
          font-family: 'Raleway', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          font-size: 5vw;
        }
      `}</style>
    </div>
  )
}
