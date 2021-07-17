import './App.css';
import {Link} from "react-router-dom";
import React from 'react';


class Box extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          cart: [],
          quantity: 0
        }
      }


      // PushItem = () => {
      //     arr.push(this.props.title) 
          
      // }

      render(){
        //   console.log(this.state.cart)
          return(
            <div className="childwrapper">
                
                    <div className="childdiv">
                        <img src={this.props.image} className="styleanimg"/>
                        <Link className="removeLinkLine" to={`/${this.props.category}/item/${this.props.id}`}><p>{this.props.title}</p></Link>
                        <div className="priceBox">
                        <p>{this.props.price}$</p>
                        </div>
                    </div>
                        
                    
                </div>  
          )
      }
    

}

export default Box;



 