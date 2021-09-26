import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
    const {name, role, salary, age, img, country} = props.cart;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="cart-body">
                <div className="card-element">
                    <small><img src={img} alt="" /></small> <br />
                    <small>Name: {name}</small> <br />
                    <small>Vocation: {role}</small> <br />
                    <small>Age: {age}</small> <br />
                    <small>Country: {country}</small><br />
                    <small>Salary: ${salary}</small> <br /><br />
                    <button onClick={ () => props.addToCart(props.cart)} className="btn-regular">{element} Hire Me</button>
                </div>
            </div>
    );
};

export default Cart;