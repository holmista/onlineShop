import React from "react"
import {arr} from "./PageComponent"
// import { arrPrice } from "./PageComponent"
import axios from "axios"
import NavBar from "./NavBar"
import { Link } from "react-router-dom"
let id = localStorage.getItem('id')


var QuantityCountArray = []



class ShoppingCart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          divedTitles: [],
          quantity: '',
          arrayToMapOver: [],
          totalPrice: "",
          fetchedArray: []
        }
      }

      
      componentDidMount(){
      //  axios.get(`https://datuna-first-api.herokuapp.com/${id}`).then((arr)=>{
      //   this.setState({fetchedArray:arr})
      //  })

       this.ToDivs()
       
      }

     

      ToDivs = () => {
        // console.log(arr)
        // var arr = this.state.fetchedArray
        this.setState({quantity:arr.length})
        QuantityCountArray = arr.map((elem) => elem.title)
        let distribution = QuantityCountArray.reduce((acum,cur) => Object.assign(acum,{[cur]: (acum[cur] || 0)+1}),{});
        let Quantity = Object.values(distribution)
        

        var FilteredObjects = arr.reduce(function (p, c) {
          if (!p.some(function (el) { return el.title === c.title; })) p.push(c);
          return p;
        }, []);
        
        var divToSet = []
        let sumPrice = 0
        for(let i = 0; i < FilteredObjects.length; i++){
          
          divToSet.push(
            <div className="shoppingCartItemWrapperBox">
              <div className="shoppingItemTitleWidth centerText">
              {FilteredObjects[i].title}
              </div>
              <div className="QuantityAndPriceWrapper">
                <div className="centerText">price: ${FilteredObjects[i].price}</div>
                <div className="centerText">Quantity: {Quantity[i]}</div>
              </div>
            </div>
          )
          sumPrice = sumPrice + (Quantity[i] * FilteredObjects[i].price)
          
        }
        sumPrice = Number(sumPrice.toFixed(2))
        this.setState({totalPrice: sumPrice})
        this.setState({divedTitles:divToSet})
        
      }
      render(){
        
          return(
            <div className="OverAllWrapper">
              <div className="NavWrapper">
                <NavBar/>
                <div class="shoppingCartIcon"><Link to="/shoppingcart"><i className="fas fa-shopping-cart adjustIcon">{this.state.quantity}</i></Link></div>
              </div>
              <div className="shoppingCartItemsWrapperBox">
              {this.state.divedTitles}
              </div>
              
              
              <div className="totalWrapper"><div>Total:$</div><div>{this.state.totalPrice}</div></div>
            </div>

          )
      }
}

export default ShoppingCart;