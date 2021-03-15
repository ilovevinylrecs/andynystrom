import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default function Projects() {
    const [project, setProject] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('/api/projects')
            setProject(await data.json())
        }
        fetchData();
    }, [])

    if (project.length === 0) return 'Loading projects hang tight!'

    return <div>
        <Head>
            Andy Nystrom - Projects
        </Head>

        <h1>Projects</h1>

        {project.map((projectContent) =>
            <React.Fragment>
                <h2>{projectContent.fields.title}</h2>
                <Link href={projectContent.fields.projectUrl}><a target="_blank">
                    <img src={projectContent.fields.image.fields.file.url} />
                </a></Link>
                <p>
                    <div dangerouslySetInnerHTML={
                        {
                            __html: documentToHtmlString(projectContent.fields.description)
                        }
                    }></div>
                </p>
            </React.Fragment>
        )}

        <style jsx>{`
            h1 {
                font-size: 2rem;
                margin: 1rem 1rem 0rem 2rem;
                }
            h2 {
                font-size: 1.5rem;
                margin: 1rem 1rem 1rem 2rem;
                }
            img {
                width: 100%;
                max-width: 300px;
                height: auto;
                padding: 0rem 1rem 0rem 2rem;
                }
            p {
                width: 90%;
                font-size: 1rem;
                margin: 0rem 1rem 3rem 2rem;
                }
            `}</style>
    </div>
}
