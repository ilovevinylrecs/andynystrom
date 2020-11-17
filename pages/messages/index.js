import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
    const [messages, setMessages] = useState([])
    
    useEffect(async() =>  {
        const data = await fetch(`/api/messages`)
        setMessages(await data.json())
    }, [])
  
    if (messages.length === 0) return 'No messages found.'
     
    return <ul>
        <h1>Messages</h1>
        {messages.map((message) =>
        <li><Link href={`/messages/${message.sys.id}`}>
            <a>{message.fields.title} - {message.fields.date.substring(0, 10)}</a>
            </Link>
        </li>
        )}
    </ul>
}