import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
    const [messages, setMessages] = useState([])
    
    useEffect(() => {
        async function fetchData(){
            const data = await fetch('/api/messages')
            setMessages(await data.json())
        }
        fetchData();
    }, [])
  
    if (messages.length === 0) return 'No messages found.'

    return (
        <div>
            <Head>
                <title>Andy Nystrom - Messages</title>
            </Head>
                
            <h1>Messages</h1>
            
            {messages.map((message) =>
            <Link href={`/messages/${message.sys.id}`}><a>
                
                <h2>{message.fields.title}</h2>
                <h3>{message.fields.date.substring(0, 10)}</h3>
                    
                <img src={message.fields.image.fields.file.url} />  
            </a></Link>
            )}
        
            <style jsx>{`
                h1 {
                margin: 2rem 0rem 2rem 1.5rem;
                font-size: 2rem;
                }
                h2 {
                margin: 3rem 0rem 0rem 1.5rem;
                font-size: 1rem;
                }
                h3 {
                margin: 0rem 0rem 0rem 1.5rem;
                font-size: 1rem;
                font-weight: 400;
                }
                img {
                width: 100%;
                max-width: 300px;
                height: auto;
                padding: 0px 0px 0rem 1.5rem;
                }
            `}</style>
        </div>
    )
}
