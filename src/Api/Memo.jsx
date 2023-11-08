import React, { useState, useEffect, useMemo } from "react"; 
import { getRandom, getAll } from "@divyanshu013/inspirational-quotes"; 
import './Memo.css'; 

const Memo = () => { 
    const [currentIndex, setCurrentIndex] = useState(0); 

    const quotes = useMemo(() => getAll(), []); 

    const handleNextClick = () => { 
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length); 
    }; 

    const handlePreviousClick = () => { 
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? quotes.length - 1 : prevIndex - 1 
        ); 
    }; 

    const currentQuote = quotes[currentIndex]; 

    // const backgroundColors = ["#8cc084", "#b7ebc3", "#ffb37e", "#7fa8d7"]; 

    // const currentBackgroundColor = useMemo(() => 
    //     backgroundColors[currentIndex % backgroundColors.length], [currentIndex, backgroundColors]
    // ); style={{ background: currentBackgroundColor }}

    return ( 
        <div className="content" > 
            <h1 id="top">ThinkUP</h1> 
            <h1>Inspirational Quote Generator</h1> 
            {currentQuote && ( 
                <blockquote> 
                    <p>"{currentQuote.quote}"</p> 
                </blockquote> 
            )} 
            {currentQuote && <h2>{currentQuote.author}</h2>} 
            {currentQuote && <h3>{currentQuote.source}</h3>} 
            <div className="button-container"> 
                <button onClick={handlePreviousClick}>Previous</button> 
                <button onClick={handleNextClick}>Next</button> 
            </div> 
        </div> 
    ); 
} 

export default Memo;
