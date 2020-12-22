import Head from 'next/head'

export default function About() {
    return (
      <div>
        <Head> 
          <title>Andy Nystrom - About</title>       
        </Head>

        <main className="about">
            <p>Andy Nystrom is a husband and father to yellow lab / german shepherd mix named Lucy.
            </p>

            <p>
            Previously he was a Director at Insound.com / Warner Music Group as was a Director of Audience Growth, Ad Operations, E-commerce, and Digital
            Marketing at The FADER. 
            </p>
            
            <p>
            Andy is mostly obsessed with music and vinyl records (all genres, mostly 1970 - today), alternative movie posters and pop art, comic books and
            graphic novels, and web development.
            </p>
            
            <p>
            Originally from Long Island, NY, he now lives in Long Island City, NY.
            </p>
            
            <p>
            Email: <a href="mailto:andrew.nystrom@gmail.com" target="_blank" style={{ color: "black" }}>andrew.nystrom@gmail.com</a>
            </p>         
        </main>

        <style jsx>{`

            .about {
            font-family: monospace, sans-serif;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: left;
            align-items: left;
            width: 85%;
            padding: 25px 0px 0px 25px;
            text-align: left;
            position: absolute;
            }

        `}</style>
      </div>
  )
}
