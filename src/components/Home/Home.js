import React from 'react';
import './home.scss'
import './BannerStyle.scss'
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