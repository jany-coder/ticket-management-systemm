import React from 'react';
import { Link } from 'react-router-dom';

const SideMenuItem = ({ item }) => {
    const { title, icon, link } = item;
    return (
        <li className='p-2 cursor-pointer hover:bg-sky-600 hover:text-white hover:rounded-md ease-in duration-200'>
            <Link to={link}><span className='me-2'>{icon}</span> {title}</Link>
        </li>
    );
};

export default SideMenuItem;