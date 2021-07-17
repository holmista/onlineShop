// import React from "react"
// import './App.css';
// import NavBar from "./NavBar";

// class WomansClothingDetail extends React.Component {
//     constructor(props){
//       super(props)
//       this.state = {
//         array: []
//       }
//     }
//     componentDidMount(){
//       fetch('https://fakestoreapi.com/products')
//               .then(res=>res.json())
//               .then(json=>this.setState({data:json}))
//               .then(() => this.WomansClothing())      
//     }
  
//     WomansClothing(){
//       var array1 = []
//       var dat = this.state.data
//       for(var i of dat){
//         if(i.category == "women's clothing"){
//           array1.push(
//               i
            
//           )
//         }  
//       }
//       this.setState({array: array1})
//     }
  
//     render(){
//         let coreNum = this.props.match.params.id
//         console.log(this.state.array)
//         let currentArr = this.state.array
  
//         return (
//           <div>
//               <NavBar />
//               {currentArr.map(elem => {
//                 if(elem.id == coreNum){
//                   return (
//                   <div className="innerParent">
//                         <div className="innerItemImageBox">
//                           <img className="innerImage" src={elem.image}></img>
//                         </div>
//                         <div className="innerTexts">
//                           <h1 >{elem.title}</h1>
//                           <h1>{elem.price}$</h1>
//                           <h3>{elem.description}</h3>
//                         </div>  
                          
//                   </div>
//                   )
//                 }
//               })}
//           </div>
//         );
//       }  
    
//   }



// export default WomansClothingDetail;