import React, { useState, useEffect } from 'react'
import FadeIn from 'react-fade-in';


export default function Home() {
    const [posters, setPosters] = useState([])
    
    useEffect(() => {
        async function fetchData(){
            const data = await fetch('/api/flatfile')
            setPosters(await data.json())
        }
        fetchData();
    }, [])
  
    if (posters.length === 0) return 'No posters found.'
    
    console.log(posters)

    return (
        <div>
            
            <h1>Flatfile</h1>

            <FadeIn delay={200} transitionDuration={1000}>

                <div className="container">
                    {posters.map((poster) => 
                        <ul>
                        <img src={poster.fields.posterImage.fields.file.url} />
                        {poster.fields.artist} - {poster.fields.title} 
                        <br />
                        {poster.fields.posterSize}
                        <br />
                        Run Size: {poster.fields.runSize}
                        <br />
                        {poster.fields.version} | {poster.fields.format} | {poster.fields.year}
                        </ul>    
                    )}
                </div>

            </FadeIn>

            <style jsx>{`
            h1 {
            margin: 10px 0px 10px 25px;
            }
            ul {
            margin: 10px 0px 0px -15px;
            text-align: justify;
            }
            img  {
            border: 1px solid #CCC;
            }
            .container {
            width: 95%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-auto-rows: auto;
            grid-row-gap: 5px;
            grid-column-gap: 5px;
            }
            `}</style>
        </div>
    )
}