import React from 'react';
import './home.css'
import './BannerStyle.css'
import Banner from "./Banner";
import Cards from "./Cards"



export default function Home() {
    return (
        <div className="Home">
            <Banner />
            <Cards />
        </div>
    )
}