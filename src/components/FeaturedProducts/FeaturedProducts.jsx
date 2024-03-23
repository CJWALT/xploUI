import React from 'react'
import './FeaturedProducts.scss'
import Card from '../../components/Card/Card'
import useFetch from '../../hooks/useFetch'



const FeaturedProducts = ({type}) =>{ 


       const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
    
    

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a quam quasi iste facilis aliquam eaque nulla! Repudiandae consequatur quo reprehenderit excepturi atque odit, adipisci vel, porro doloremque esse distinctio id consectetur debitis enim sed doloribus modi voluptatum nobis aspernatur.</p>
            </div>
            <div className="bottom">
               {error ? <p>Something went wrong</p>
                :
                (loading ? <div> loading</div>
                 : data?.map(item=>(
                    <Card item={item} key={item.id}/>
                )))}
                
            </div>
        </div>
    )
}

export default FeaturedProducts