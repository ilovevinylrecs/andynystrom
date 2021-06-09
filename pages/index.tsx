import Head from 'next/head'

export default function Home() {
  return (
    <div className="page">
      <Head>   
          <title>Andy Nystrom - Home</title>
      </Head>

      <div className="home">
        ANDY NYSTROM
      </div>

      <style jsx>{`
       
        .home {
          @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');
          font-family: 'Raleway', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          font-size: 10vw;
          margin: 4rem 0rem 0rem 0rem;
        }
      `}</style>
    </div>
  )
}
