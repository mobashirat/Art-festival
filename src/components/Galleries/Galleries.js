import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Painting from '../Painting/Painting';

// for paintings
const Galleries = () => {
    const [paintings, setPaintings] = useState([])
    const [cart, setCart] = useState([])
    // for eventhandler
    const handleCart = (painting) => {
        const newCart = [...cart, painting]

        setCart(newCart)
        console.log(newCart)

    }
    useEffect(() => {
        fetch('./galleries.json')
            .then(res => res.json())
            .then(data => setPaintings(data))
    }, [])


    return (
        <div>
            {/* painting */}
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            paintings.map(painting => <Painting
                                key={painting.id}

                                painting={painting}
                                handleCart={handleCart}>
                            </Painting>)
                        }
                    </div>
                </div>
                {/* cart */}
                <div className="col-md-3">
                    <Cart
                        cart={cart}>

                    </Cart>
                </div>
            </div>

        </div>
    );
};

export default Galleries;