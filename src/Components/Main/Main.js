import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Total from '../Total/Total';
import './Main.css';

const Main = () => {
    const [carts, setCarts] = useState([]);
    const [total, setTotal] = useState([]);

    useEffect( ()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setCarts(data));
    },[])

    const addToCart = (cart) =>{
        const newTotal = [...total, cart];
        setTotal(newTotal);
    }

    return (
        <div className="main-container">
            <div className="cart-container">
                {
                    carts.map(cart => <Cart 
                        key= {cart.key}
                        cart={cart}
                        addToCart = {addToCart}
                        >
                        </Cart>)
                }
            </div>
            <div className="total-container">
                <Total total ={total}></Total>
            </div>            
        </div>
    );
};

export default Main;