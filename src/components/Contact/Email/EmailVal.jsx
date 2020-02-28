import React from 'react'
import '../Email/EmailVal.scss'

const EmailVal = () => {
    return (
        <div className="email-val">
        <h5>Send en besked</h5>
            <form>
                <p>Navn:</p>
                <input type="text" name="Name" id="name"/>

                <p>Email:</p>
                <input type="email" name="Email" id="email" required/>

                <p>Telefonnr:</p>
                <input type="text" name="Tel" id="number"/>

                <p>Besked:</p>
                <textarea name="Message" id="message" rows="10"/>
            
                <div className="contact-button">
                    <input type="submit" value="SEND BESKED"/>
                </div>
            </form>
        </div>
    )
}

export default EmailVal
