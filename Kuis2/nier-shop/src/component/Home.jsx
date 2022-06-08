import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-black border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="Background" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK THIS OUT</p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    );
}

export default Home;