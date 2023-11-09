import React, { useState, useEffect } from 'react';
import './Joke.css'
const Joke = () => {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        fetchApi();
    }, []);

    // const fetchApi = () => {
    //     fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
    //         .then((res) => console.log(res.json()))
    //         // .then((data) => setJoke(data.joke));
    // };


    const fetchApi = async() => {
      try {
      let response =   await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single");
      let data = await response.json();
      setJoke(data.joke)
      } 
      catch (error) {
        console.log(error)
      }
            
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
