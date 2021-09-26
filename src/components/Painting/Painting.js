import React from 'react';
import './Painting.css'

const Painting = (props) => {
    const { name, artist, price, img, year, location } = props.painting
    return (
        <div className="col-md-4">

            <div class="card card-style" style={{ "width": "20 rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body bg-dark text-light">
                    <h5 class="card-title ">Name: {name}</h5>
                    <p class="card-text">Artist: {artist}</p>
                    <p>Year: {year}</p>
                    <p>Location: {location}</p>
                    <p>Price: ${price}M</p>

                    <button class="bg-danger text-light" onClick={() => props.handleCart(props.painting)}
                    ><i class="fas fa-shopping-cart"></i> add to cart</button>
                </div>


            </div>



        </div>
    );
};

export default Painting;