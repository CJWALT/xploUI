import React from 'react'
import './Footer.scss'

const Footer = () =>{
    return (
        <div className="footer">
            <div className="top">
                <div className="top">
                    <div className="item">
                        <h1>Categories</h1>
                        <span>Women</span>
                        <span>Men</span>
                        <span>Shoes</span>
                        <span>Accessories</span>
                        <span>New Arrivals</span>
                        <span>Women</span>
                    </div>
                    <div className="item">
                        <h1>Links</h1>
                        <span>FAQ</span>
                        <span>Pages</span>
                        <span>Stores</span>
                        <span>Compare</span>
                        <span>Cookies</span>
                    </div>
                    <div className="item">
                        <h1>About</h1>
                        <span>Lorem Lorem ipsum dolor sit amet ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequuntur unde ipsam velit vitae ea atque ratione veniam explicabo mollitia.</span>
                    </div>
                    <div className="item">
                        <h1>Contact</h1>
                        <span>Lorem ipsum dolor sit amet ipsum dolor sit, amet consectetur adipisicing elit. Quisquam repudiandae soluta ducimus quam totam in voluptatibus. Possimus corporis ab ullam?</span>
                    </div>
                </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <span className="logo">Lamastore</span>
                        <span className="copyright">
                            &copy; Copyright 2023. All Rights Reserved
                        </span>
                    </div>
                    <div className="right">
                        <img src="/img/payment.png" alt="payment" />
                    </div>
                </div>
            
        </div>
    )
 }

 export default Footer