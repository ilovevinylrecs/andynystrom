import React, { useState, useEffect } from 'react'
import Link from 'next/link'


export default function Home() {
    const [messages, setMessages] = useState([])
    
    // useEffect(async() =>  {
    //     const data = await fetch(`/api/messages`)
    //     setMessages(await data.json())
    // }, [])

    useEffect(() => {
        async function fetchData(){
            const data = await fetch('/api/messages')
            setMessages(await data.json())
        }
        fetchData();
    }, [])
  
    if (messages.length === 0) return 'No messages found.'
    
    console.log(messages)

    return (
        <div className="post">
            
        <h1>Messages</h1>
        
            {messages.map((message) =>
            <Link href={`/messages/${message.sys.id}`}><a>
                
                <h2>{message.fields.title}</h2>
                <h3>{message.fields.date.substring(0, 10)}</h3>
                  
                <img src={message.fields.image.fields.file.url} />

            
            </a></Link>
            )}
        

            <style jsx>{`
                .post {
                position: relative;
                margin: 10px;
                width: 300px;
                color: black;
                cursor: pointer;
                }
                .description {
                position: absolute;
                top: 0;
                padding: 10px;
                box-sizing: border-box;
                background: linear-gradient(0deg, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 100%);
                height: 100px;
                opacity: 0;
                transition: opacity 0.5s;
                }
                .text {
                position: absolute;
                bottom: 0px;
                padding: 20px 0px 5px 10px;
                box-sizing: border-box;
                width: 100%;
                height: 70px;
                background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0) 100%);
                }
                h1,
                h2,
                h3 {
                margin: 10px;
                }
                h2 {
                margin-bottom: 0;
                font-size: 12px;
                }
                h3 {
                margin-top: 0;
                font-size: 10px;
                font-weight: 400;
                }
                img {
                width: 100%;
                max-width: 300px;
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