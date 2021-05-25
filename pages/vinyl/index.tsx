import React, { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Vinyl() {

  const [releases, setReleases] = useState<any>([])

  useEffect(() => {
    async function fetchData(){
        const data = await fetch(`/api/postgres`)
        setReleases(await data.json())
    }
    fetchData();
  }, [])

  // if (releases.length === 0) return 'loading records (there are a lot of them), hang tight.'

  return (
    <div>
      <Head>
        <title>Andy Nystrom - Vinyl</title>
      </Head>
      
      <h1>Record Collection</h1>

       <p>Total Collection: {releases.length}</p> 

          <div className="container">
            {releases.map((release) => (
              <ul>
                <img src={release.basic_information_thumb} />
                {release.basic_information_artists} 
                <br />
                {release.basic_information_title}  
                <br />
                {release.basic_information_formats_text.replace("undefined", "")} {release.basic_information_formats}
                <br />
                {release.basic_information_labels}
                <br />
                {release.basic_information_year} 
              </ul>
            ))} 
          </div>

      <style jsx>{`
        h1 {
        font-size: 2rem;
        margin: 2rem 0rem 2rem 1rem;
        }
        p,
        .button {
        margin: 1rem 0rem 1rem 1rem;
        font-size: 1rem;
        }
        ul {
        margin: 1rem 0rem 0rem -2rem; 
        }
        .container {
        width: 95%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-auto-rows: auto;
        grid-row-gap: 0px;
        grid-column-gap: 0px;
        }
        img {
        max-width: 100%;
        display: block;
        width: auto;
        height: auto;
        }
      `}</style>
    </div>
  )
}
