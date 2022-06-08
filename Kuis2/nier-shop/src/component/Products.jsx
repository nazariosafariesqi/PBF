import React, { useState, useEffect } from 'react';

const Products = () => {

    const [state, setdata] = useState([]);
    const [filter, setFilter] = useState();
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch();
            if (componentMounted) {
                setdata(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading . . .
            </>
        )
    }


    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Nier Novel </h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                </div>

                <div className="buttons d-flex justify-content-center mb-5 -pb5">
                <button className="btn btn-outline-dark me-2">All</button>
                <button className="btn btn-outline-dark me-2">Nier Novel</button>
                <button className="btn btn-outline-dark">Nier Game</button>
            </div>
            </div>
        </div>
    );
}

export default Products;