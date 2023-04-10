import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);
  // Au début le state prend la largeur de notre Media
  const [large, setLarge] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }

  const changeWidth = () => {
    setLarge(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }
  }, [])

  return (
    <nav>
      {(toggleMenu || large > 500) && 
        <ul className='nav__list'>
          <li className='nav__item'>Accueil</li>
          <li className='nav__item'>Services</li>
          <li className='nav__item'>Contact</li>
        </ul>
      }
      <button
      onClick={toggleNav}
       className='nav__btn'>BTN</button>
    </nav>
  )
}

export default Navbar;
