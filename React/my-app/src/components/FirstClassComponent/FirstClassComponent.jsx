import React, { Component } from 'react';
import styles from './FirstClassComponent.module.css'

class FirstClassComponent extends Component {
    render() {
        return (
            <>
                <div className={styles.titulo}>This is our FirstClass component.</div>
                <div>Texto2 </div>
            </>
        );
    }
}

export default FirstClassComponent;