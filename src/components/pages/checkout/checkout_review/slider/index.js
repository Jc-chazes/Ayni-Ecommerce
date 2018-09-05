import React ,{Component} from 'react'
import './index.css';



export default class Carousel extends Component {
        constructor(){
            super()
            this.data= [
                {
                    name: 'Floral Off-the-Shoulder Romper',
                    image: 'http://localhost:3000/Images/Image49.png',
                    price: 'S/69.00',
                },
                {
                    name: 'Striped Flounce Jumpsuit',
                    image: 'http://localhost:3000/Images/Image49.png',
                    price: 'S/69.00',
                },
                {
                    name: 'Striped Flounce Jumpsuit',
                    image: 'http://localhost:3000/Images/Image49.png',
                    price: 'S/69.00',
                },
                {
                    name: 'Producto',
                    image: 'http://localhost:3000/Images/Image49.png',
                    price: 'S/69.00',
                },
                {
                    name: 'Producto',
                    image: 'http://localhost:3000/Images/Image49.png',
                    price: 'S/69.00',
                },
            ]       
        
        
        } 
       render(){
        var card_arrivals = this.data.map((val, index)=>
        <div className ="card-carousel">
            <div key={index} style={
                {
                    width: 172,
                    height: 250,
                    backgroundImage: 'url(' + val.image + ')',
                    backgroundPosition: "center",
                    backgroundSize:'contain',
                    backgroundRepeat: "no-repeat",
                    backgroundColor:'#FAF8F7'
                }
            }/>
            <div className ="card-carousel__text">{val.name}</div>
            <div className ="card-carousel__text">{val.price}</div>
        </div> );
           return(
            <div className='carousel'>
                <div className='container-carousel__items'>
               <div className='container-carousel'>
               {card_arrivals}
                </div>     
                </div>
            </div>         
        );
                
        
       }
}
