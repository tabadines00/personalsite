import React from 'react'
import ListItem from './ListItem'

function List(props: any) {
    const l = [
        {
            title: "Risou",
            description: "An AI-Powered Resume Editor",
            link: "risou"
        },
        {
            title: "BYBYN OCR",
            description: "Handwritten OCR for Baybayin script using CNNs",
            link: "bybyn-ocr"
        },
        {
            title: "Monitico: Ana",
            description: "The handy Accountant Chatbot for Monitico",
            link: "monitico-ana"
        },
        {
            title: "The Algorithm",
            description: "A TikTok-inspired Recommendation algorithm",
            link: "tiktok-algorithm"
        }
    ] //props.items

    return (
        <div>
            {l.map((item, index) => {
                return <ListItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    ></ListItem>
            })}
        </div>
    )
}

export default List