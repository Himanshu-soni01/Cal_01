import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';

const Layout = () => {
    // function logout(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    //     throw new Error('Function not implemented.');
    // }

    return (
        <><Navbar />
            <Outlet /></>

    )
}

export default Layout