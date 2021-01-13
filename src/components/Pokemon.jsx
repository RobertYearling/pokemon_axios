import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1200")
        .then(res => {setPokemon(res.data.results)})
        .catch(err => {console.log(err);
        })
    }, [])

    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=1200")
            .then(res => res.json())
            .then(res => {setPokemon(res.results)})
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="container">
            <div>
                <h1>Pokemon</h1>
                <button onClick={getPokemon}>Fetch Pokemon</button>
                    {
                        pokemon.map((pokemonName, i) => {
                            return <div key = {i}>
                                <p>{pokemonName.name}</p>
                                </div>
                        })
                    }
            </div>
        </div>
    );
};

export default Pokemon;