import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';



const Main = () => {
    return (
        <div>
            <Dashboard></Dashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;