import React, { useState, useEffect } from 'react'
import Link from 'next/link'


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
      <h1>Record Collection</h1>

      <p>total collection: {releases.pagination.items}</p>

      <p>page: {page}</p>

      {/* <div>
        <button onClick={() => setPage(page + 1)}>
        Next
        </button>
      </div> */}

    <div className="button">
      <a href="#" onClick={onClickPrevButton}>Prev</a> | <a href="#" onClick={onClickNextButton}>Next</a>
    </div>
      
      {releases.releases.map((release) => (
        
        <ul>
          <li>
          {release.basic_information.artists[0].name.replace(/\s\(\d+\)$/, '')} - {release.basic_information.title} ({release.basic_information.formats[0].descriptions[0]}) {release.basic_information.year}
          </li>
        </ul>
      ))}

      <style jsx>{`
      h1,
      h3,
      p,
      .button {
      margin: 10px 0px 10px 25px;
      }
    `}</style>

    </div>
  )
}