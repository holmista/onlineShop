import React from "react"
import { Link } from "react-router-dom";
// import NavBar from "./NavBar";
import './App.css';
import { Redirect } from "react-router-dom";




class HomePage extends React.Component{
    constructor(){
        super()
        this.state = {
          categorys:["Electronics","Men's Clothing","Women's Clothing"],
          DivedBoxes: [],
          links: ["electronics","men's clothing","women's clothing"],
          Authintificated: true
          
        }
      }

  componentDidMount(){
    
    if(!localStorage.getItem("userEmail")){
      console.log(localStorage.getItem("userEmail"))
      this.setState({Authintificated: false})
    }
    this.MakeCategoryBoxes()
  }
      
  MakeCategoryBoxes = () => {
    let tempArray = [];
    for(let i = 0; i < this.state.categorys.length; i++){
      tempArray.push(
        <Link className = "centerlink removeLinkLine categorycolor changecolor"to={`/${this.state.links[i]}`}><div className="categoryBoxes">
          {this.state.categorys[i]}
        </div>
        </Link>
      )
    }
    this.setState({DivedBoxes: tempArray})
  }
      


      render(){
        // if(this.state.Authintificated){
          return(
              <div className="ParentWrapper">
                  <div className="ParentOfCategorys">
                    {this.state.DivedBoxes}
                  
                  </div> 
              </div> 
             
          )
        // }else{
          //return <Redirect to="/signin"/>
        //}
      }               
}


export default HomePage;