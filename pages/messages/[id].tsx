import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'


const dev = process.env.NODE_ENV !== 'production';

const server = dev ? 'http://localhost:3000' : 'https://andynystrom.com/';

export async function getServerSideProps(context) {
    const {id} = context.query

    const res = await fetch(`${server}/api/messages/${id}`)
    const post = await res.json()
 
    return { props: { post } }
}

export default function Post({ post }) {
    return (
            <div>
                <h1>{post.fields.title}</h1>
                <h2>{post.fields.date.substring(0, 10)}</h2>
                <img src={post.fields.image.fields.file.url} />
                <p>
                    <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(post.fields.body)}}></div>
                </p>
                <nav>
                <h3 className="nav"><Link href="/messages"><a>return to messages</a></Link></h3>
                </nav>
                <style jsx>{`
                    h1 {
                    margin: 10px;
                    font-size: 20px;
                    font-weight: 10000;
                    }
                    h2 {
                    margin: 10px;
                    font-size: 16px;
                    font-weight: 800;
                    }
                    h3 {
                    margin: 10px;
                    font-size: 14px;
                    font-weight: 400;
                    }
                    p {
                    margin: 10px;
                    width: 85%;
                    font-size: 12px;
                    }
                    img {
                    width: 85%;
                    max-width: 500px;
                    height: auto;
                    padding: 0px 0px 10px 10px;
                    }
                    nav {
                    padding: 50px 0px 50px 0px;    
                    }             
                `}</style>
            </div>
    )
}

