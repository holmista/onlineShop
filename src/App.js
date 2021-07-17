
import './App.css';
import React from "react"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Details from './Details';
// import MensClothingDetail from "./MensClothingDetail"
// import WomansClothingDetail from './WomansClothingDetail';
import NavBar from './NavBar';
import HomePage from './HomePage';
import PageComponent from './PageComponent';
// import PageComponentV2 from './PageComponentV2.jsx';
import ShoppingCart from './ShoppingCart';
import SignIn from "./login.jsx"


// var arrayOfCart = []

class App extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     array: []
  //     data: [],
  //     page: "",
  //     menscloth: [],
  //     womancloth: [],
  //     cart: []
  //   }
  //   this.Electonics = this.Electonics.bind(this)
  // }

  // componentDidMount(){
  //   fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then(json=>this.setState({data:json}))
  //           .then(() => this.Electonics())
  //           .then(() => this.MenCloth())
  //           .then(() => this.WomanCloth())
            
            
  // }

  // Electonics(){
  //   var array1 = []
  //   var dat = this.state.data
  //   for(var i of dat){
  //     if(i.category == "electronics"){
  //       array1.push(
  //         <div className="childwrapper">
  //           <div className="childdiv">
  //               <img src={i.image} className="styleanimg"/>
  //               <Link className="removeLinkLine" to={`/Electronics/item/${i.id}`}><p>{i.title}</p></Link>
  //               <p>{i.price}$</p>
  //             </div>
              
  //             <div className="addtocart"> add to cart</div>
              
            
  //         </div>   
            
          
  //       )
  //     }  
  //   }
  //   this.setState({array: array1})
    
  // }

  // addToCart = (props) => {
  //   console.log(props.value)
  // }



  // MenCloth = () => {
  //   var array1 = []
  //   var dat = this.state.data
  //   for(var i of dat){
  //     if(i.category == "men's clothing"){
  //       array1.push(
  //         <div className="childdiv">
  //             <img src={i.image} className="styleanimg"/>
  //             <Link className="removeLinkLine" to={`/men's clothing/item/${i.id}`}><p>{i.title}</p></Link>
  //             <p>{i.price}$</p>
  //           </div>
          
  //       )
  //     }  
  //   }

  //   this.setState({menscloth:array1})
  // }

  // WomanCloth = () => {
  //   var array1 = []
  //   var dat = this.state.data
  //   for(var i of dat){
  //     if(i.category == "women's clothing"){
  //       array1.push(
  //         <div className="childdiv">
  //             <img src={i.image} className="styleanimg"/>
  //             <Link className="removeLinkLine" to={`/woman's clothing/item/${i.id}`}><p>{i.title}</p></Link>
  //             <p>{i.price}$</p>
              
  //           </div>
          
  //       )
  //     }  
  //   }

  //   this.setState({womancloth:array1})
  // }
  


// MensClothPage = () => (
//   <div>
//     <NavBar />
//     <div className="parentdiv">{this.state.menscloth}</div>
//   </div>  
// )

// ElectronicsPage = () => (
//   <div>
//     <NavBar />
//     <div className="parentdiv">{this.state.array}</div>
//   </div>  
//   )


// WomanClothPage = () => (
//   <div>
//     <NavBar />
//     <div className="parentdiv">{this.state.womancloth}</div>
//   </div>  
//   )  



  render(){
    
    return (
      <Router>
        <Route exact path="/e-commerce" component = {HomePage}>
          </Route>

          <Route exact path="/e-commerce/signin" component = {SignIn}>
          </Route>

      <Route exact path="/e-commerce/shoppingcart" component = {ShoppingCart}>
          </Route>

        <Route path="/e-commerce/:category/item/:id" component = {Details}>
          </Route>
        <Route exact path="/e-commerce/electronics">
          <PageComponent category="electronics" />
        </Route>
        <Route exact path="/e-commerce/men's clothing">
          <PageComponent category="men's clothing" />
        </Route>
        <Route exact path="/e-commerce/women's clothing">
          <PageComponent category="women's clothing" />
        </Route>
        
      </Router>
      
      // <Router>
        
      //   <Switch>
      //   {/* <Route exact path="/" component={Slider} /> */}


      //     <Route exact path="/Electronics">
      //       <PageComponent category="electronics" />
      //     </Route>

      //     <Route exact path="/men's clothing">
      //       <PageComponent category="men's clothing" />
      //     </Route>

      //     <Route exact path="/women's clothing">
      //       <PageComponent category="women's clothing" />
      //     </Route>

      
           
          




      //     <Route path="/Electronics/item/:id" component={ElectronicsDetails} />
      //     {/* {<Route exact path="/men's clothing" component={this.MensClothPage} />
      //     <Route path="/men's clothing/item/:id" component={MensClothingDetail} />
      //     <Route exact path="/woman's clothing" component={this.WomanClothPage} />
      //     <Route path="/woman's clothing/item/:id" component={WomansClothingDetail} /> */}
        
      //   </Switch>  
      // </Router>   
    );
    }  
  
}

export default App;
