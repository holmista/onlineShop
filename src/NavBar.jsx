import React from "react"
import './App.css';
import { Link} from "react-router-dom";




const NavBar = () => (
    <div className="firstpage">
      <div className="linkWrapperForResponsive"><Link className="removeLinkLine categorycolor " to="/"><h2 className="centerText">Homepage</h2></Link></div>
      <div className="linkWrapperForResponsive"><Link className="removeLinkLine categorycolor" to="/electronics"><h2 className="centerText">Electronics</h2></Link></div>
      <div className="linkWrapperForResponsive"><Link className="removeLinkLine categorycolor" to="/men's clothing" ><h2 className="centerText">men's clothing</h2></Link></div>
      <div className="linkWrapperForResponsive"><Link className="removeLinkLine categorycolor" to="/women's clothing" ><h2 className="centerText">women's clothing</h2></Link></div>
    </div>
  )

  export default NavBar;