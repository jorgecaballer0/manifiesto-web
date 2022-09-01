import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import { Link, NavLink } from "react-router-dom";
import {useEffect, useState} from 'react';


const Burger = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    
    if ( windowSize.innerWidth < 768) {
        return (
            <Menu right>
                <ul>
                    <li className='burger-list'>
                        <Link to="/" className="btn-nav">
                            Home
                        </Link>
                    </li>
                    <li className='burger-list'>
                        <NavLink
                        to="/servicios"
                        activeClassName="active"
                        className="btn-nav"
                        >
                            Servicios
                        </NavLink>
                    </li>
                    <li className='burger-list'>
                        <NavLink
                        to="/portfolio"
                        activeClassName="active"
                        className="btn-nav"
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li className='burger-list'>
                        <Link to="/" className="btn-contact">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </Menu>
        );
    }
};

export default Burger;