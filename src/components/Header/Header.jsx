import React from 'react'
import styles from './Header.module.css'
import Navbar from "../NavigationBar/Navbar";

const Header = (props) => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logo}>LOGO</div>
                <div className={styles.nameContainer}>
                    <div className={styles.ooo}>OOO</div>
                    <div className={styles.name}>Горизонт</div>
                </div>
            </header>
                <Navbar/>
        </div>

    )
}

export default Header