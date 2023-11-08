import React, { useState, useEffect } from 'react';
import './Joke.css'
const Joke = () => {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };

    return (
        <div className="Appp">
            <h1>API using UseEffect</h1>
            <div className="joke">
                <button onClick={fetchApi}>
                    Click to generate a joke.
                </button>
                
                <p>{joke}</p>    
            </div>
        </div>
    );
}

export default Joke;
