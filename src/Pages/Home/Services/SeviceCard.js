import React from 'react';
import { Link } from 'react-router-dom';

const SeviceCard = ({service}) => {
    const {_id, img, title, price} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-5 border">
        <figure><img src={img} alt="Shoes" className='rounded-xl h-52 w-full' /></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className='font-semibold text-xl text-orange-600'>Price : ${price}</p>
            <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
                <button className="btn btn-primary">Checkout</button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default SeviceCard;