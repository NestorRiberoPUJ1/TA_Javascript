
import React, { Component } from 'react';
import styles from './SecondClassComponent.module.css'

class SecondClassComponent extends Component {
    render() {
        return (
            <div style={{ border: "2px solid black", width: "fit-content", margin: "4px", padding: "4px" }}>
                <h1 className={styles.titulo}>Titulo:{this.props.title} </h1>
                <img src={this.props.url} alt="Portada" onClick={(e) => alert("Clicked Image")} />
                <h2>Autor:{this.props.author}</h2>
                <input type="text" onChange={(e) => console.log(e.target.value)} />
                <a href={this.props.url} >Ver</a>
            </div>
        );
    }
}

export default SecondClassComponent;