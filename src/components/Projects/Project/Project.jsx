import React from 'react'
import styles from './Project.module.css'

const Project = (props) => {
    return(
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <div className={styles.name}>{props.title}</div>
                {props.description}
            </div>

        </div>
    );
}

export default Project;