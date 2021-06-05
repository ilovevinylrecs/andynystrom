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
                <meta property="og:url" content="https://andynystrom.com/about" key="ogurl" />
                <meta property="og:site_name" content="https://andynystrom.com" key="ogsitename" />
                <meta property="og:title" content="Andy Nystrom - About" key="ogtitle" />
    +           <meta property="og:description" content="My name is Andy Nystrom and I am a Software Engineer based in Long Island City, New York. 
                I am currently looking to land a job as a Junior Software Engineer, where I can leverage my experience and background to help build well-designed web applications. 
                I look forward to working with you on your next exciting project." 
                key="ogdesc" />
 
                <meta property="og:url" content="https://andynystrom.com/about" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Andy Nystrom - About" />
                <meta property="og:description" content="My name is Andy Nystrom and I am a Software Engineer based in Long Island City, New York. 
                I am currently looking to land a job as a Junior Software Engineer, where I can leverage my experience and background to help build well-designed web applications. 
                I look forward to working with you on your next exciting project." />
                <meta property="og:image" content="" />
                 
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="" />
                <meta property="twitter:url" content="https://andynystrom.com/about" />
                <meta name="twitter:title" content="Andy Nystrom - About" />
                <meta name="twitter:description" content="My name is Andy Nystrom and I am a Software Engineer based in Long Island City, New York. 
                I am currently looking to land a job as a Junior Software Engineer, where I can leverage my experience and background to help build well-designed web applications. 
                I look forward to working with you on your next exciting project." />
                <meta name="twitter:image" content="" />
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
