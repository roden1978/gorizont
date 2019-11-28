import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    )
    const scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    )
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to='/news' activeClassName={styles.activeLink}>Новости</NavLink></li>
                    <li><NavLink to='/projects' activeClassName={styles.activeLink}>Проекты</NavLink></li>
                    <li><NavLink to='/gallery' activeClassName={styles.activeLink}>Галерея</NavLink></li>
                    <li><NavLink to='/contacts' activeClassName={styles.activeLink}>Контакты</NavLink></li>
                    <li><NavLink to='/about' activeClassName={styles.activeLink}>О компании</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;