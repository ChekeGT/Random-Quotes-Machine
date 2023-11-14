import { useEffect, useState } from "react";

export default function Quoteblock(){
    const [quote, setQuote ] = useState('')
    const [author, setAuthor ] = useState('')

    const getRandomQuote = async () => {
        await fetch('https://api.quotable.io/random').then(
            res => res.json()
        ).then(data => {
            setQuote(data.content)
            setAuthor(data.author)
        })
    }
    useEffect(() => {
        getRandomQuote()
    }, [])

    return (
        <>
        <p>{quote}</p>
        <p>{author}</p>
        </>
    )
}