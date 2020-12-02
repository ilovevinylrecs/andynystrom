import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


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

  let record = null

  // for (let i = 0; i < releases.length; i++) {
  //     if (releases[i].id === router.query.id) {
  //         record  = releases[i]
  //     }
  // }
  
  // if (!record) return 'Collection not found.'

  console.log(releases)

  console.log(record)

  return (
    <div>
      <h1>Record Collection</h1>

      {/* {releases.map((record) =>
        <h2>{record.releases.basic_information}</h2>
      )} */}

    </div>   
  )
}