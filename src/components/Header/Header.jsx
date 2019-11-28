import React from 'react'
import styles from './Header.module.css'
import Navbar from "../NavigationBar/Navbar";

const Header = (props) =>{
    return (
        <header className={styles.header}>
            <h1>ООО Горизонт</h1>
            <Navbar/>
        </header>
    )
}

export default Header