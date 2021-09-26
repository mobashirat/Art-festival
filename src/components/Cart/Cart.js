import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // showing total
    const totalReduce = (preValue, currentValue) => preValue + currentValue.price

    const total = cart.reduce(totalReduce, 0)
    return (
        <div>
            <div className="cart-design">
                <h5 className="cart-color">Artpiece: 0{cart.length}</h5>
                <br />
                <h5 className="cart-color">Total Ammount: ${total}M</h5>

            </div>
            <ul className="name-show">
                {
                    cart.map(painting => <li>{painting.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;