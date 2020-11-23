import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Head from 'next/head'


export default function Home() {
    const router = useRouter()
    const [messages, setMessages] = useState([])
    
    useEffect(async () => {
        const data = await fetch('/api/messages')
        setMessages(await data.json())
    }, [])
    
    let message = null

    for (let i = 0; i < messages.length; i++) {
        if (messages[i].sys.id === router.query.id) {
            message  = messages[i]
        }
    }

    if (!message) return 'Message not found.'
    
    return (<div>
        <h1>{message.fields.title}</h1>
        <h2>{message.fields.date.substring(0, 10)}</h2>
        <img src={message.fields.image.fields.file.url} />
        
        {/* const document = {
            nodeType: 'document',
            content: [
                {
                nodeType: 'paragraph',
                content: [
                    {
                    nodeType: 'text',
                    value: 'Hello world!',
                    marks: [],
                    },
                ],
                },
            ],
        }
            
        documentToHtmlString(document); */}

        <nav>
            <h2><Link href="/messages"><a>return to messages</a></Link></h2>
        </nav>

        <style jsx>{`
                h1,
                h2,
                h3 {
                margin: 10px;
                }
                h2 {
                font-size: 12px;
                }
                h3 {
                margin-top: 0;
                font-size: 10px;
                font-weight: 400;
                }
                img {
                width: 85%;
                max-width: 500px;
                height: auto;
                padding: 0px 0px 10px 10px;
                }
                h1 {
                font-size: 20px;
                font-weight: 400;
                }
            `}</style>        
        </div>
    )
}