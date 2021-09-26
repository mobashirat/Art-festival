import React from 'react';
import './Painting.css'

const Painting = (props) => {
    const { name, artist, price, img, year, location } = props.painting
    return (
        <div className="col-md-4">
            <div class="card mb-3" style={{
                "max-width":
                    "540px"
            }}>
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src={img} class="img-fluid img-size" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">Name: {name}</h6>
                            <p class="card-text">Artist: {artist}</p>
                            <p>Location : {location}</p>
                            <p class="card-text"> Year: {year}</p>
                            <h6>Price: ${price}million</h6>
                            <button onClick={() => props.handleCart(props.painting)}
                            ><i class="fas fa-shopping-cart"></i>add to cart</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Painting;