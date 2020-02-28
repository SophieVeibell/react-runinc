import React from 'react'
import Map from '../../gfx/map.jpg'
import '../Contact/Contacts.scss'
import Footer from '../Layout/Footer/Footer'
import EmailVal from './Email/EmailVal'


const Contacts = () => {
    return (
        <section className="contactsection">
                <div className="contact-map">
                    <img src={Map} alt=""/>
                        <div className="contact-banner">
                            <h2>Contact</h2>
                        </div>
                </div>
                
                <Footer />
                <EmailVal />
                
        </section>
    )
}


export default Contacts
