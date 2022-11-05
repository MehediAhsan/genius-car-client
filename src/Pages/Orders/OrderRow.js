import React, { useEffect, useState } from 'react';

const OrderRow = ({order, handleDelete, handleStatusUpdate}) => {
    const { _id, serviceName, phone, customer, price, service, status } = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://genius-car-server-plum-five.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])

    return (
        <tr>
            <th>
            <label>
                <button onClick={ () => handleDelete(_id)} className='btn btn-ghost bg-gray-600 hover:bg-gray-700 rounded-full text-white text-lg'>X</button>
            </label>
            </th>
            <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                <div className="rounded w-24 h-24">
                    {
                        orderService?.img && 
                        <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                    }
                </div>
                </div>
            </div>
            </td>
            <td>
            {customer}
            <br/>
            <span className="badge badge-ghost badge-sm">{phone}</span>
            </td>
            <td>
            {serviceName}
            <br/>
            <span className="badge badge-ghost badge-sm"></span>
            </td>
            <td>${price}</td>
            <th>
                <button 
                onClick={() => handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;