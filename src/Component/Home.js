import React, { useState } from 'react'
import '../Component/Home.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Favo from './Favorite';
import mg from '../image/hhhhhh.jpg' 

function Home() {
    const [movie, setMovie] = useState("");
    const [data, setData] = useState([]);
    const [favorites, setFavorites] = useState([]);
    console.log(favorites.length)
    let fetchData = async () => {
        let fetchData = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ef3a9515&s=${movie}`);
        let jsonData = await fetchData.json();
        // console.log(typeof(jsonData))
        setData(jsonData.Search);
        setTimeout(() => {
            window.scrollTo({
                top: 800,
                behavior: 'smooth'
            })
        }, 2000)
    }
    function movieName(e) {
        setMovie(e.target.value)
    }
    function menu_Button(e) {
        alert('You have pressed menu button')
    }
    function back_To_Top(e) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        setMovie('');
    }
    function favorite_button(movieID) {
        if (favorites.includes(movieID)) {
            // Remove from favorites
            setFavorites(favorites.filter(Title => Title !== movieID));
        } else {
            // Add to favorites
            setFavorites([...favorites, movieID]);
        }
    }
    return (
        <>
            <BrowserRouter >
                <div className='main'>
                    <div className='movieFinder'>

                        {/* ----NAVBAR---- */}
                        <div className="navBar">
                
                            <h1>M S</h1>
                            <div className="navBarSide">
                                <input type="checkbox" className='toggle-menu' />
                                <div className="hamburger"></div>
                                <ul className="menu">
                            <li><Link to="/" style={{ textDecoration: "none", color:"bisque"}}><a>Home</a></Link></li>
                            <li><Link to="/Favorite" style={{ textDecoration: "none", color:"bisque" }}><a>Favorite</a></Link></li>
                            </ul>
                            </div>
                        </div>
                        {/* ----content---- */}
                        <Routes>
                        <Route path='/' element ={
                        <div className="contentmain">
                            <div className="content">
                                <div className="mainSearch">
                                    <div className="heading">
                                        <h1>WELCOME TO MOVIE FINDER</h1>
                                    </div>
                                    <div className="searchBar">
                                        <input type="text" placeholder='Search any movie' value={movie} onChange={movieName} required />
                                        <button onClick={fetchData}>Search</button>
                                    </div>
                                </div>
                            </div>
                            <div className="main1">
                                {
                                    data && data.map((e, index) => (
                                        <div className="subclass1">
                                            <div className="sub">
                                                <div className="poster">
                                                    <img src={e.Poster} alt="" />
                                                </div>
                                                <div className="data">
                                                    <h6>Title: {e.Title}</h6>
                                                    <h6>Year of release:{e.Year}</h6>
                                                    <button onClick={() => favorite_button({ "Poster": e.Poster, "Title": e.Title, "Year": e.Year })}>Favorite</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="backToTop">
                                    <div className="buttton">
                                        <button onClick={back_To_Top}><i class="ri-arrow-up-line"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                            }/>
                        <Route path='/Favorite' element={<Favo props={{favorites}}/>}/>  
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </>
    )
}

export default Home