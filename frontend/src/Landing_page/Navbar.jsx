import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Pricing  from './Pricing/PricingPage';
const Navbar = () => {
  return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary navContainer navBox">
  <div className="container-fluid row ">
    <div className="col-2">
      <Link to={"/"}> <img src="/assets/logo.svg" alt="" className=' logo' /></Link>
   
    </div>
  
    <div className="col-4"></div>
    <div className="collapse navbar-collapse col-6  m-0 p-0 container  w-auto" id="navbarNavDropdown">
    

     
      <ul className="navbar-nav row flex-end w-100 ">
        
        <li className="nav-item col-2">
          <Link className="nav-link w-auto m-0 p-0" to="/about">About</Link>
        </li>
        <li className="nav-item col-2">
          <Link className="nav-link w-auto m-0 p-0" to="./pricing">Pricing</Link>
         
        </li>
        <li className="nav-item col-2">
          <Link className="nav-link w-auto m-0 p-0" to="./products">Product</Link>
        </li> 
        <li className="nav-item col-2">
          <Link className="nav-link w-auto m-0 p-0" to="./support">Support</Link>
        </li>
         <li className="nav-item col-2">
          <Link className="nav-link w-auto m-0 p-0" to="/signup">Signup</Link>

         </li>
         <li className="nav-item col-1">
  <Link className="nav-link w-auto m-0 p-0" to="/login">Login</Link>
</li>
        <li className="nav-item dropdown col-1 ">
          <Link className="nav-link w-auto m-0 p-0"  to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
              <FontAwesomeIcon icon={faBars}   />
              
             
          </Link>
          <ul className="dropdown-menu dropdown-menu-right ">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</>  )
}

export default Navbar