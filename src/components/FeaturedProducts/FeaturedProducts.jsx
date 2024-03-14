import React from 'react'
import './FeaturedProducts.scss'
import Card from '../../components/Card/Card'



const FeaturedProducts = ({type}) =>{ 


    const data = [
        {
            id:1, 
            title:"Long sleeve Graphic Tshirt",
            img:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew:true,
            oldPrice: 19, 
            price:12
        },
        {
            id:2, 
            title:"Denim Jeans",
            img:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew:true,
            oldPrice: 19, 
            price:12
        },
        {
            id:3, 
            title:"Short sleeve Graphic Tshirt",
            img:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew:false,
            oldPrice: 19, 
            price:12
        },
        {
            id:4, 
            title:"Coat",
            img:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew:false,
            oldPrice: 19, 
            price:12
        }
    ]
  
    

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a quam quasi iste facilis aliquam eaque nulla! Repudiandae consequatur quo reprehenderit excepturi atque odit, adipisci vel, porro doloremque esse distinctio id consectetur debitis enim sed doloribus modi voluptatum nobis aspernatur.</p>
            </div>
            <div className="bottom">
                {data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
                
            </div>
        </div>
    )
}

export default FeaturedProducts