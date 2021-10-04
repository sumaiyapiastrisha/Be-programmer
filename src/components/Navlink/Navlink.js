import React from 'react';
import './Navlink.css'
import { NavLink } from 'react-router-dom';

const Navlink = () => {
    return (
        <div className=" d-flex   p-4  ">
            <div >
                <p className="text-primary logo">  <span className=" fw-bolder fs-2"> Be</span>  Programmer</p>
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
                <NavLink
                    to="/courses"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                    className="route-link"

                >
                    Courses
                </NavLink>
                <NavLink
                    to="/clientsReview"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                    className="route-link"

                >
                    Clients-Review
                </NavLink>

            </div>

        </div >
    );
};

export default Navlink;