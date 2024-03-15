import React, { useState } from 'react' 
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'


const Products = () =>{

    const catId = parseInt(useParams().id)

    const [maxPrice, setMaxPrice] = useState(1000)


    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" name="" value={1} id="1" />
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" name="" value={2} id="2" />
                        <label htmlFor="2">Skirts</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" name="" value={3} id="3" />
                        <label htmlFor="3">Coats</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" name="" id="" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" name="price" id="asc" value="asc"  />
                        <label htmlFor="asc">Price (Lowest first) </label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" name="price" id="desc" value="asc"  />
                        <label htmlFor="desc">Price (Highest first) </label>
                    </div>
                </div>
            </div>

            <div className="right">
                <img src='https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600' className='catImg'/>
                <List />
            </div>
        </div>
    )
}


export default Products