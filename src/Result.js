import React, { useEffect, useState } from 'react'
import './Result.css'
import VideoCard from './VideoCard'
import instance from './axios'
import FlipMove from 'react-flip-move'

function Result({ selectedOption }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await instance.get(selectedOption);
            setMovies(res.data.results);
            console.log(res.data.results);
            return res;
        }
        fetchData();
    }, [selectedOption]);

    return (
        <div className='result'>
            <FlipMove>
                {movies.map((movie) => (
                    < VideoCard key={movie.id} movie={movie} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Result
