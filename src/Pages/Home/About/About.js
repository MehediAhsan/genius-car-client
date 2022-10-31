import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <div className='w-1/2 relative'>
                <img src={person} alt="" className="w-4/5 rounded-lg shadow-2xl" />
                <img src={parts} alt="" className="w-3/5 absolute top-32 right-12 rounded-lg shadow-2xl border-8" />
            </div>
            <div className='w-1/2'>
                <p className='font-bold text-orange-600 text-xl mb-2'>About Us</p>
                <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <button className="btn btn-warning">Get More Info</button>
            </div>
        </div>
        </div>
    );
};

export default About;