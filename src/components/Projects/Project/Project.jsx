import React from 'react'
import styles from './Project.module.css'
import {NavLink} from "react-router-dom";

const Project = (props) => {
    return(
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <div className={styles.name}>{props.title}</div>
                {props.description}
            </div>
            <div>
                <NavLink to='/projects' activeClassName={styles.activeLink}>Проекты</NavLink>
            </div>
        </div>
    );
}

export default Project;