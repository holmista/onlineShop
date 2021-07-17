 import React from "react"
 import './App.css';
 import NavBar from "./NavBar";



class Details extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      item: {}
    }
  }

  componentDidMount(){
    let path = (this.props.match.params.category).toLowerCase()
    console.log(path)
    fetch(`https://fakestoreapi.com/products/category/${path}`)
            .then(res=>res.json())
            .then(json=> this.setState({data:json}))
            .then(()=> this.setItemData())
               
  }

  setItemData=()=>{
    let localitem = this.state.data.find((elem)=> elem.id == this.props.match.params.id)
    this.setState({item:localitem})
  }

  render(){
    
      
    return (
      <div>
          <NavBar />
          
          <div className="innerParent">
                <div className="innerItemImageBox">
                  <img className="innerImage" src={this.state.item.image}></img>
                </div>
                <div className="innerTexts">
                  <h1 >{this.state.item.title}</h1>
                  <h1>{this.state.item.price}$</h1>
                  <h3>{this.state.item.description}</h3>
                </div>  
                  
          </div>
              
            
          
      </div>
    );
    }  
  
}
  
  export default Details;
  