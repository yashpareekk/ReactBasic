import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info p-3">
      <div className="container-fluid">
        
        <a className="navbar-brand" href="#"><b>Project Cart</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <a className="nav-link mx-2 active" href="">Home</a>
            </li>
            <li className="nav-item">
            <Link to="/text" className="nav-link mx-2 active">Event Handler</Link>
            </li>
            <li className="nav-item">
              <Link to='/hooks' className="nav-link mx-2 active" >Hooks</Link>
            </li>
            <li className="nav-item">
              <Link to='/redux' className="nav-link mx-2 active" >Redux</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link mx-2 dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Api
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link to='/useEffect' className="dropdown-item" >UseEffect</Link></li>
                <li><Link to='/useMemo' className="dropdown-item" >UseMemo</Link></li>
                
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
            <li className="nav-item mx-2">
              <a className="nav-link text-dark h5" href="" target="blank"><i className="fab fa-google-plus-square"></i></a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-dark h5" href="" target="blank"><i className="fab fa-twitter"></i></a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-dark h5" href="" target="blank"><i className="fab fa-facebook-square"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar;
