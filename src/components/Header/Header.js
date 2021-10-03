import React from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=" d-flex  bg-black p-4  ">
            <div >
                <p className="text-whit w-100 h-100">  <span className=" fw-bolder fs-2"> Be</span>  Programmer</p>
            </div >

            <div className="nav-item">
                <NavLink
                    to="/home"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                    className="route-link"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                    className="route-link"

                >
                    About
                </NavLink>
                <NavLink className="m-2"
                    to="/courses"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                    className="route-link"

                >
                    Courses
                </NavLink>

            </div>

        </div >
    );
};

export default Header;