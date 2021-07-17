import React from "react"
import './App.css';
import { Link} from "react-router-dom";




const NavBar = () => (
    <div className="firstpage">
      <div className="linkWrapperForResponsive"><Link className="removeLinkLine categorycolor " to="/e-commerce"><h2 className="centerText">Homepage</h2></Link></div>
      <div className="linkWrapperForResponsive"><Link className="removeLinkLine categorycolor" to="/e-commerce/electronics"><h2 className="centerText">Electronics</h2></Link></div>
      <div className="linkWrapperForResponsive"><Link className="removeLinkLine categorycolor" to="/e-commerce/men's clothing" ><h2 className="centerText">men's clothing</h2></Link></div>
      <div className="linkWrapperForResponsive"><Link className="removeLinkLine categorycolor" to="/e-commerce/women's clothing" ><h2 className="centerText">women's clothing</h2></Link></div>
    </div>
  )

  export default NavBar;