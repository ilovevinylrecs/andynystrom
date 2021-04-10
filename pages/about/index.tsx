import React, { useState, useEffect } from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Head from 'next/head'

export default function Home() {
    const [about, setAbout] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('/api/about')
            setAbout(await data.json())
        }
        fetchData();
    }, [])

    if (about.length === 0) return 'No about section found.'

    return (
        <div>
            <Head>
                <title>Andy Nystrom - About</title>
            </Head>

            <h1>About</h1>

            {about.map((aboutContent) =>
                <p>
                    <div dangerouslySetInnerHTML={
                        {
                            __html: documentToHtmlString(aboutContent.fields.about)
                        }
                    }></div>
                </p>
            )}

            <style jsx>{`
            h1 {
            margin: 2rem 0rem 2rem 1.5rem;
            font-size: 2rem;
            }
            p {
            margin: 2rem 0rem 2rem 1.5rem;
            width: 90%;
            font-size: 1rem;
            }
            `}</style>
        </div>
    )
}
