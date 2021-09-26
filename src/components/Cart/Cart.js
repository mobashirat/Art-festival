import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    const totalReduce = (preValue, currentValue) => preValue + currentValue.price

    const total = cart.reduce(totalReduce, 0)
    return (
        <div>
            <h2>Total:{cart.length}</h2>
            <h3>Total Ammount:{total}</h3>

            <ul>
                {
                    cart.map(painting => <li>{painting.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;