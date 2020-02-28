import React from 'react'
import './Footer.scss'
import FooterLogo from './/../../../gfx/runinc_logo.svg'

const Footer = () => {
    return (
        <footer>
            <div className="footer-text">
                <h4>Runinc</h4>
                <p>Kannikegade 12</p>
                <p>8000 Århus C</p>
                <a href="tel:123-456-7890">Telefon 123-456-7890</a>
                <a href="mailto:info@runinc.dk">info@runinc.dk</a>
            </div>
        </footer>
    )
}

export default Footer
