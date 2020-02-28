import React from 'react'
import Nav from './Nav/Nav'
import Logo from '../../../gfx/runinc_logo.svg';
import '../Header/header.scss';
import LogoHover from '../../../gfx/runinc_logo_hover.svg';
import SearchBar from './SearchBar/SearchBar';

export const Header = () => {
  return (
      <header>
          <div className="logo">
              <img src={Logo} alt="RunInclogo"
                  onMouseEnter={e => (e.currentTarget.src = LogoHover)}
                  onMouseLeave={e => (e.currentTarget.src = Logo)}
                    />
              </div>
              <Nav />
      <SearchBar />
      </header>
    )
}

export default Header
