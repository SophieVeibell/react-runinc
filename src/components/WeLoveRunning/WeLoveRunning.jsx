import React from 'react'
import Hero from '../../gfx/hero.jpg';
import '../WeLoveRunning/WeLoveRunning.scss'

const WeLoveRunning = () => {
    return (
        <section className="WeLoveRunningSection">
        <div className="hero-banner">
                    <h2>We love</h2><span> running</span>
                </div>
            <div className="hero-picture">
                <img src={Hero} alt=""/>
            </div>
            
        </section>
    )
}


export default WeLoveRunning
