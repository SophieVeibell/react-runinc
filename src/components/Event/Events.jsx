import React from 'react'
import './Events.scss'
import EventPic from '../../gfx/event.jpg';

const Events = () => {
    return (
        <section className="EventSection">
        <div className="event-banner">
                    <h2>Next Event</h2>
             </div>
            <div className="event-picture">
                <img src={EventPic} alt="People that are running"/>
            </div>
            
            <div className="marathon">
                <div className="marathon-text">
                    <h3>Events</h3>
                    <h4>Copenhagen marathon</h4>
                    <p>Den 29. maj 2018</p>
                    <h5>Aarhus City Run</h5>
                    <p>Den 1 juni 2018</p>
                    <h5>Berlin Marathon</h5>
                    <p>Den 6 juni 2018</p>


                </div>
            </div>
        </section>
    )
}

export default Events
