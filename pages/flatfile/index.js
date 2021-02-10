import React, { useState, useEffect } from 'react'
import FadeIn from 'react-fade-in'
import Head from 'next/head'

export default function Home() {
    const [posters, setPosters] = useState([])
    
    useEffect(() => {
        async function fetchData(){
            const data = await fetch('/api/flatfile')
            setPosters(await data.json())
        }
        fetchData();
    }, [])
  
    if (posters.length === 0) return 'loading all my posters, hang tight.'
    
    console.log(posters)

    return (
        <div>
            <Head>
                <title>Andy Nystrom - Flatfile</title>
            </Head>
            
            <h1>Flatfile</h1>

            <FadeIn delay={200} transitionDuration={1000}>

                <div className="container">
                    {posters.map((poster) => 
                        <ul>
                        <img src={poster.fields.posterImage.fields.file.url} />
                        <div className="description">
                        {poster.fields.title} ({poster.fields.year})
                        <br />
                        {poster.fields.artist}
                        <br />
                        {poster.fields.posterSize}, {poster.fields.version} {poster.fields.format}
                        <br />
                        Run: {poster.fields.runSize}
                        </div>
                        </ul>    
                    )}
                </div>

            </FadeIn>

            <style jsx>{`
            h1 {
            margin: 10px 0px 10px 20px;
            }
            ul {
            margin: 10px 0px 0px -20px;
            text-align: left;
            }
            .container {
            width: 90%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            grid-auto-rows: auto;
            grid-row-gap: 0px;
            grid-column-gap: 0px;
            }
            img {
            max-width: 95%;
            display: block;
            width: auto;
            height: auto;
            }
            .description {
            padding: 5px 0px 10px 0px;
            }
            `}</style>
        </div>
    )
}
