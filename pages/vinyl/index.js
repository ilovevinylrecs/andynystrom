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

  console.log(releases)

  return (
    <div>
      <h1>Record Collection</h1>
      
      {releases.releases.map((release) => (
        
        <ul>
          <li>
            {release.basic_information.artists.name} - {release.basic_information.title} {release.basic_information.formats.descriptions} {release.basic_information.year}
          </li>
        </ul>
      ))}

    </div>
  )
}