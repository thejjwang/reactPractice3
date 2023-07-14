// Build a component that fetches and displays a random quote from an API. 
// Use useEffect to fetch the data and update the component's state. 
// Display the quote on the screen.
import { useEffect } from "react";
import { useState } from "react";
import React from "react";

const RandomQuote = () => {
    const [randomQuote, setRandomQuote] = useState('');
    useEffect(() => {
        const fetchJokes = async () => {
            try { 
                const response = await fetch("https://api.chucknorris.io/jokes/random");
                const data = await response.json();
                const quote = data.value;
                setRandomQuote(quote);
            } catch (error) {
                console.error(error);
            }
        }
        fetchJokes();
        // [] to only render ONCE!
    }, []);
    
    return <p>The random quote is: {randomQuote}</p>

}

export default RandomQuote;