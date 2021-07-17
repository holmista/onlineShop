import axios from 'axios'
import React from 'react';
import './App.css';
import Box from "./BoxComponent"
import NavBar from './NavBar';
import { Link} from "react-router-dom";
import ShoppingCart from './ShoppingCart';
import { Redirect } from "react-router-dom";
var counter = 0;
// var actualQuantity = []
let id = localStorage.getItem('id')


// Getdata().then((arr)=>{

//   export var arr = [...arr]
// })
export var arr = []

var itemsFromStorage =  localStorage.getItem("items") 
itemsFromStorage ? arr =  JSON.parse( itemsFromStorage) : arr = []


var quantityFromStorage = localStorage.getItem("quantity") 
quantityFromStorage ? counter = quantityFromStorage : counter = 0





class PageComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          data: [],
          Boxes: [],
          prop: "",
          cart: "",
          quantity: '',
          Authintificated:true,
          exportArray: []
        }
      }

      
      // Getdata = async()=>{
      //   const data = await axios.get(`https://datuna-first-api.herokuapp.com/${id}`)
      //   const arr = await data.array
      //   this.setState({exportArray:arr})
      // }

      componentDidUpdate(){
        
        //this.SendUppdatedAray()
        //axios.get(`https://datuna-first-api.herokuapp.com/${id}`)
        //.then((res) => console.log("this is response:",res.data.array))
        localStorage.setItem('items', JSON.stringify (arr))
        localStorage.setItem('quantity', JSON.stringify (arr.length))
        

      }

      // SendUppdatedAray = async() => {
      //    await axios.post('https://datuna-first-api.herokuapp.com/updateArr',{email: localStorage.getItem("userEmail"), arr: arr })
      // }

      componentDidMount(){
        // if(!localStorage.getItem("userEmail")){
        //   this.setState({Authintificated: false})
        // }else{
          
          fetch('https://fakestoreapi.com/products')
                  
                  .then(res=>res.json())
                  .then(json=>this.setState({data:json}))  
                  .then(() => this.MakeBoxPage()) 
                  //.then(() => axios.get(`https://datuna-first-api.herokuapp.com/${id}`))

                  .then(() => this.setState({quantity: counter}))
                  // .then(async() => await axios.get(`https://datuna-first-api.herokuapp.com/${id}`))
                  // .then((data) =>  arr = data.data.array)
                  // .then(()=>this.Getdata())
        // }
                
        
      }


      MakeBoxPage = () => {
        
        var data = this.state.data
          var boxes = data.map((elem) => (
            <div category={elem.category} className="componentparent">
             <Box category={elem.category} key={elem.id}image={elem.image} id={elem.id} title={elem.title} price={elem.price}/>
             <button className="addtocart" onClick={() => {
              counter ++
              let obj = {
                title:elem.title,
                price: elem.price
              }
              arr.push(obj)
              
               this.setState({quantity: counter})
               
               }}> add to cart</button>
             </div> 
            )
          )
          // .filter((elem) => (elem.category == this.props.category))
          var FilteredBoxes = boxes.filter( (elem) => {
           
            if(elem.props.category == this.props.category){
              return elem
            }
          })
            
          this.setState({Boxes: FilteredBoxes})
          
      }

      

      render(){
        
        

          return(
              
              <div className="OverAllWrapper">
                
                <div className="NavWrapper">
                  <NavBar/>
                  <div class="shoppingCartIcon"><Link to="/shoppingcart"><i className="fas fa-shopping-cart adjustIcon">{this.state.quantity}</i></Link></div>
                </div>
            
            
                 <div className="CategoryBoxItems">{this.state.Boxes}</div>
              </div>  
          )  
        }
        
       
        
      }  



//////








export default PageComponent;