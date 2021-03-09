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
            <Link href={projectContent.fields.projectUrl}><a target="_blank">
                <h2>{projectContent.fields.title}</h2>
                <img src={projectContent.fields.image.fields.file.url} />

                <p>
                    <div dangerouslySetInnerHTML={
                        {
                            __html: documentToHtmlString(projectContent.fields.description)
                        }
                    }></div>
                </p>
            </a></Link>
        )}

        <style jsx>{`
            h1 {
                font-size: 20px;
                font-weight: 400;
                margin: 10px;
                }
            h2 {
                margin-bottom: 0;
                font-size: 12px;
                margin: 10px;
                }
            img {
                width: 100%;
                max-width: 300px;
                height: auto;
                padding: 0px 0px 10px 10px;
                }
            p {
                margin: 10px 0px 10px 20px;
                width: 90%;
                font-size: 12px;
                }
            `}</style>
    </div>
}
