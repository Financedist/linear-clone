import React from 'react'
import Logo from '../images/linear-logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container py-2">
                <div className="logo text-light d-flex align-items-center" style={{ fontSize: "1.4rem" }}>
                    <img src={Logo} alt="logo" width="25px" style={{ borderRadius: '10px' }} />
                    <span className="px-2">Linear</span>
                </div>
                <ul className="main-menu d-lg-flex align-items-center ms-auto d-none">
                    <li>
                        <a href="/">Method</a>
                    </li>
                    <li>
                        <a href="/">Changelog</a>
                    </li>
                    <li>
                        <a href="/">Customers</a>
                    </li>
                    <li>
                        <a href="/">About us</a>
                    </li>
                    <li>
                        <a href="/">Pricing</a>
                    </li>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                    <li>
                        <a href="/">We're hiring</a>
                    </li>
                </ul>
                <ul className="cta d-flex mx-2 ms-auto align-items-center">
                    <li>
                        <a className="login" href="/">Login</a>
                    </li>
                    <li>
                        <a className="sign-up btn btn-primary py-1" href="/">Sign up</a>
                    </li>
                </ul>
                <button className="btn btn-light d-block d-lg-none">=</button>
            </div>
        </nav>
    )
}

export default Navbar
