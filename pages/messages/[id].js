import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

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
    
    return <div>
        <h1>{message.fields.title}</h1>
        <h2>{message.fields.date.substring(0, 10)}</h2>

        <nav>
            <Link href="/messages"><a>Return to messages</a></Link>
        </nav>
    </div>
}