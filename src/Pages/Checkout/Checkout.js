import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {_id, title, price} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('https://genius-car-server-plum-five.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)
        })
        .then( res => res.json())
        .then( data => {
            if(data.acknowledged){
                alert('Order place successfully');
                form.reset();
            }
        })
        .catch( error => console.error(error))
    }

    return (
        <div className='w-9/12 mx-auto my-20'>
            <form onSubmit={handlePlaceOrder}>
                <div className='text-3xl text-orange-600'>You are about to order: {title}</div>
                <div className='text-2xl text-gray-700 my-6'>Price: {price}</div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full" />
                    <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full" />
                    <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered w-full" />
                    <input type="email" name='email' defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered w-full h-44 my-6" placeholder="Your Message"></textarea>
                <input className='btn btn-warning w-full' type="submit" value="Order Confirm" />
            </form>
        </div>
    );
};

export default Checkout;