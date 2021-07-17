// import React from 'react';
// import './App.css';
// import Box from "./BoxComponent"
// import NavBar from './NavBar';
// import { Link} from "react-router-dom";

// class PageComponentV2 extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//           data: [],
//           Boxes: [],
//           prop: ""
//         }
//       }


//       componentDidMount(){
//         fetch('https://fakestoreapi.com/products')
//                 .then(res=>res.json())
//                 .then(json=>this.setState({data:json}))  
//                 .then(() => this.MakeBoxPage()) 
                
                    
//       }


//       MakeBoxPage = () => {
        
//         var data = this.state.data
//           var boxes = data.map((elem) => (
//              <Box category={elem.category} key={elem.id}image={elem.image} id={elem.id} title={elem.title} price={elem.price}/>
//             )
//           )
//           // .filter((elem) => (elem.category == this.props.category))
//           var FilteredBoxes = boxes.filter( (elem) => {
           
//             if(elem.props.category == this.props.category){
//               return elem
//             }
//           })
            
//           this.setState({Boxes: FilteredBoxes})
          
//       }



//       HandleClick = () => {
        
//         this.setState({prop: this.props.category})
//         console.log(this.state.prop)
//       }
      

//       render(){
        
//         // this.setState({prop: this.props.category})
        
//         return(
            
//             <div>
//               <Link onClick={this.HandleClick} className="removeLinkLine categorycolor" to="/"><h2>Homepage</h2></Link>
//               <Link onClick={this.HandleClick} className="removeLinkLine categorycolor" to="/Electronics"><h2>Electronics</h2></Link>
//               <Link onClick={this.HandleClick} className="removeLinkLine categorycolor" to="/men's clothing" ><h2>men's clothing</h2></Link>
//               <Link onClick={this.HandleClick} className="removeLinkLine categorycolor" to="/women's clothing" ><h2>women's clothing</h2></Link>
//                {this.state.Boxes}
//             </div>  
//         )  
//       }  

// }


// export default PageComponentV2;