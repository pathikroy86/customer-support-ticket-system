import React from 'react';
import './banner.css';

const Banner = ({ progress }) => {
    return (
        <div className='counter-container'>
            <div className='progress-container flex flex-col justify-center items-center py-20 rounded'>
                <h4 className='text-2xl text-white'>In-Progress</h4>
                <h1 className='text-6xl font-semibold text-white'>{progress.length}</h1>
            </div>
            <div className='resolved-container flex flex-col justify-center items-center py-20 rounded'>
                <h4 className='text-2xl text-white'>Resolved</h4>
                <h1 className='text-6xl font-semibold text-white'>0</h1>
            </div>
        </div>
    );
};

export default Banner;