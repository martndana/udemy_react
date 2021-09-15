import React from 'react'

import styles from './Demo.module.css';

const Demo = (props) => {
    console.log("Demo");
    const sortedList = props.items.sort((a, b) => a - b);
    return (
        <div className={styles.list}>
            <h2>{props.title}</h2>
            <ul>
                {sortedList.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>

    )
}

export default Demo;
