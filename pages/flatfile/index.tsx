import React, { useState, useEffect } from 'react'
import FadeIn from 'react-fade-in'
import Head from 'next/head'

export default function Home() {
    const [posters, setPosters] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('/api/flatfile')
            setPosters(await data.json())
        }
        fetchData();
    }, [])

    if (posters.length === 0) return 'loading all my posters, hang tight.'

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
            margin: 2rem 0rem 2rem 1.5rem;
            }
            ul {
            margin: 2rem 0rem 2rem -1.5rem;
            text-align: left;
            }
            img {
            max-width: 95%;
            display: block;
            width: auto;
            height: auto;
            }
            .description {
            padding: 0.5rem 0rem 1rem 0rem;
            }
            `}</style>
        </div>
    )
}
