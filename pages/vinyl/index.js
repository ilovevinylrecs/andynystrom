import React, { useState, useEffect } from 'react'
import FadeIn from 'react-fade-in';
import Head from 'next/head'


export default function Vinyl() {

  const [releases, setReleases] = useState([])

  const [page, setPage] = useState(1)

  const onClickNextButton = () => setPage(page + 1)

  const onClickPrevButton = () => {
    if (page > 1) setPage(page - 1)
  }

  useEffect(() => {
    async function fetchData(){
        const data = await fetch(`/api/vinyls?page=${page}`)
        setReleases(await data.json())
    }
    fetchData();
  }, [page])

  if (releases.length === 0) return 'No records found.'


  return (
    <div>
      <Head>
        <title>Andy Nystrom - Vinyl</title>
      </Head>
      
      <h1>Record Collection</h1>

      <p>total collection: {releases.pagination.items}</p>

      <p>page: {page}</p>

      <div className="button">
        <a href="#" onClick={onClickPrevButton}>prev </a> | <a href="#" onClick={onClickNextButton}> next</a>
      </div>
      
      <FadeIn delay={200} transitionDuration={1000}>

          <div className="container">
            {releases.releases.map((release) => (
              <ul>
                <img src={release.basic_information.thumb} />
                {release.basic_information.artists[0].name.replace(/\s\(\d+\)$/, '')} 
                <br />
                {release.basic_information.title}  
                <br />
                {release.basic_information.formats[0].text} {release.basic_information.formats[0].descriptions[0]}
                <br />
                {release.basic_information.labels[0].name.replace(/\s\(\d+\)$/, '')}
                <br />
                {release.basic_information.year} 
              </ul>
            ))} 
          </div>

      </FadeIn>

      <div className="button">
        <a href="#" onClick={onClickPrevButton}>prev </a> | <a href="#" onClick={onClickNextButton}> next</a>
      </div>

      <style jsx>{`
      h1,
      h3,
      p,
      .button {
      margin: 10px 0px 10px 25px;
      }
      ul {
      margin: 10px 0px 0px -15px; 
      }
      .container {
      width: 95%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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