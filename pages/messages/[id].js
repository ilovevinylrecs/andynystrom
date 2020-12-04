import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import Head from 'next/head'


export default function Home() {
    const router = useRouter()
    const [messages, setMessages] = useState([])
    
    useEffect(() => {
        async function fetchData(){
            const data = await fetch('/api/messages')
            setMessages(await data.json())
        }
        fetchData();
    }, [])
    
    let message = null

    for (let i = 0; i < messages.length; i++) {
        if (messages[i].sys.id === router.query.id) {
            message  = messages[i]
        }
    }

    if (!message) return 'Message not found.'

    // const Code = ({ children }) => <p className="code">{children}</p>;
    
    // const options = {
    // renderMark: {
    //     [MARKS.CODE]: text => <Code>{text}</Code>
    // }
    // renderNode: {
    //     [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    // },
    // renderText: text => text.replace('!', '?'),
    // }

    return <div>
       
            <h1>{message.fields.title}</h1>
            <h2>{message.fields.date.substring(0, 10)}</h2>
            <img src={message.fields.image.fields.file.url} />
            <p>{documentToReactComponents(message.fields.body)}</p>

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

}