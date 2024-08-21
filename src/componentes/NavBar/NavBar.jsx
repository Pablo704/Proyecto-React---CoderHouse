import React from 'react'
import './NavBar.css'
import CarWidget from '../CarWidget/CarWidget'
import { CiSearch } from "react-icons/ci";
import sefasLogo from '../../assets/img/sefas.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navTop'>
        <Link to={'/'} className='navItem'>
        <img src={sefasLogo} alt="logo sefas" width={150} />
        </Link>
        <div className='navItem'>
          <div className='search'>
              <input type="text" placeholder='Buscar...' className='searchInput'/>
              <CiSearch />
          </div>
        </div>
        <div className='navItem'>
          <CarWidget />
          </div>
      </div>
          <div className='navSport'>
            <Link to={'/categoria/E-sport'} className='menuItem'>E-sports</Link>
            <Link to={'/categoria/Basketball'} className='menuItem'>Basketball</Link>
            <Link to={'/categoria/Futbol'} className='menuItem'>Futbol</Link>
            <Link to={'/categoria/Hockey'} className='menuItem'>Hockey</Link>
            <Link to={'/categoria/Rugby'} className='menuItem'>Rugby</Link>
            <Link to={'/categoria/MotorSport'} className='menuItem'>Motorsports</Link>
          </div>
      
    </nav>

  )
}

export default NavBar