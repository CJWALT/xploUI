import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'



   


const Cart = () =>{ 

   const data = [
        {
            id:1, 
            title:"Long sleeve Graphic Tshirt",
            img:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew:true,
            desc:"oringinal gucci jacket chalotte '0'`",
            oldPrice: 19, 
            price:12
        },
        {
            id:2, 
            title:"Denim Jeans",
            desc:"Denim Jeans",
            img:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew:true,
            oldPrice: 19, 
            price:12
        },    
    ];

    return(
        <div className="cart">
            <h1>Products in Cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.key}>
                <img src="{item.img}" alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className="price">
                        1 x ${item.price}
                    </div>
                </div>
            <DeleteOutlinedIcon className="delete"/>
        </div>
        ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT </button>
            <span className="reset">Reset Cart</span>  
        </div>
    )
}

export default Cart;            