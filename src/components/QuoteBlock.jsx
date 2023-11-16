import { useEffect, useState } from "react";
import './sass/QuoteBlock.sass'
import { useUpdateTheme } from "./ThemeProvider";

export default function Quoteblock(){
    const [quote, setQuote ] = useState('')
    const [author, setAuthor ] = useState('')

    const updateTheme = useUpdateTheme()

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

    const getNewQuoteAndUpdateTheme =  async () => {
        await setQuote('')
        await setAuthor('')
        await getRandomQuote()
        updateTheme()
    }

    return (
        <div id="quote-box">
            {quote ? <p id="text"><i className="fa fa-quote-left"></i> {quote}</p> : <p className="text"><i className="fa fa-quote-left"></i></p>}
            {author ? <p id="author">{author}</p> : <></>}
            <div className="social-media-and-button-container">
                <div className="social-media">
                    <a id="tweet-quote" className="social-media-button"><i className="fa-brands fa-twitter"></i></a>
                    <a id="tumblr-quote" className="social-media-button"><i className="fa-brands fa-tumblr"></i></a>
                </div>
                <button id="new-quote" onClick={getNewQuoteAndUpdateTheme}>New Quote</button>
            </div>
        </div>
    )
}