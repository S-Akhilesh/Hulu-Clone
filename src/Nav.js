import React from 'react'
import './Nav.css'
import instance from './request'
function Nav({ setSelectedOption }) {
    return (
        <div className='nav'>
            <h3 onClick={() => setSelectedOption(instance.fetchTrending)} >Trending</h3>
            <h3 onClick={() => setSelectedOption(instance.fetchActionMovies)} >Action</h3>
            <h3 onClick={() => setSelectedOption(instance.fetchTopRated)} >Top Rated</h3>
            <h3 onClick={() => setSelectedOption(instance.fetchComedyMovies)} >Comedy</h3>
            <h3 onClick={() => setSelectedOption(instance.fetchHorrorMovies)} >Horror</h3>
            <h3 onClick={() => setSelectedOption(instance.fetchRomanceMovies)} >Romance</h3>
            <h3 onClick={() => setSelectedOption(instance.fetchMystery)} >Mystery</h3>
            <h3 onClick={() => setSelectedOption(instance.fetchSciFi)} >Sci-Fi</h3>
            <h3 onClick={() => setSelectedOption(instance.fetchWestern)} >Western</h3>
            <h3 onClick={() => setSelectedOption(instance.fetchAnimation)} >Animation</h3>
            <h3 onClick={() => setSelectedOption(instance.fetchTV)} >TV movies</h3>
        </div>
    )
}

export default Nav
