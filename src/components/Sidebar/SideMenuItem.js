import React from 'react';

const SideMenuItem = ({ item }) => {
    const { title, icon } = item;
    return (
        <li className='p-2 cursor-pointer hover:bg-sky-600 hover:text-white hover:rounded-md ease-in duration-200'>
            <span className='me-2'>{icon}</span> {title}
        </li>
    );
};

export default SideMenuItem;