import React from 'react';
import profileImg from '../../assets/profile.png';
const Navbar = () => {
    return (
        <div className='px-10 py-2 bg-gray-400 h-20 w-full flex justify-end items-center'>
            <img className='h-16 w-16 rounded-full' src={profileImg} alt="" />
        </div>
    );
};

export default Navbar;