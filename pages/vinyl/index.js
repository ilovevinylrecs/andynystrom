import React, { useState, useEffect } from 'react'
import Link from 'next/link'


export default function Vinyl() {

  const [releases, setReleases] = useState([])

  useEffect(() => {
    async function fetchData(){
        const data = await fetch('/api/vinyls')
        setReleases(await data.json())
    }
    fetchData();
  }, [])

  if (releases.length === 0) return 'No records found.'


  return (
    <div>
      <h1>Record Collection</h1>

      <p>total collection: {releases.pagination.items}</p>

      {/* <Link href={releases.pagination.urls.first}><a>
      first page
      </a></Link> */}

      {/* <br></br>

      <Link href={releases.pagination.urls.prev}><a>
      prev page
      </a></Link> */}

      <p>
      <Link href={releases.pagination.urls.next}><a>
      next
      </a></Link>
      </p>
      
      <p>
      <Link href={releases.pagination.urls.last}><a>
      last
      </a></Link>
      </p>
      
      {releases.releases.map((release) => (
        
        <ul>
          <li>
          {release.basic_information.artists[0].name} - {release.basic_information.title} ({release.basic_information.formats[0].descriptions[0]}) {release.basic_information.year}
          </li>
        </ul>
      ))}

      <style jsx>{`
      h1,
      h3,
      p {
      margin: 10px;
      }

    `}</style>

    </div>
  )
}