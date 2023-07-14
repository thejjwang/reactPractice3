import React from "react";
import { useState, useEffect } from "react";

const RandomQuote = () => {
    const [quote, setQuote] = useState([]);
    
    useEffect(() => {
        const fetchQuotes = async () => {
            try { 
                const response = await fetch('https://quote-garden.onrender.com/api/v3/quotes');
                const data = await response.json();
                const quoteArr = data.data;
                console.log(quoteArr);
                setQuote(quoteArr);
            } catch (error) {
                console.log(error);
            }
        }
        fetchQuotes();
    }, []);

    return (
        <ul>
            {quote.map((quote) => 
            <li key={quote._id}>{quote.quoteText}</li>)}
        </ul>
    )   
}

export default RandomQuote;

// Build a component that fetches and displays a random quote 
// from an API. Use useEffect to fetch the data and update the 
// component's state. Display the quote on the screen.