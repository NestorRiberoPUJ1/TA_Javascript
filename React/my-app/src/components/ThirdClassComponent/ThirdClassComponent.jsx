
import React, { Component } from 'react';
const rowStyle = { display: "flex", flexDirection: "row", backgroundColor: "wheat" }

class ThirdClassComponent extends Component {
    render() {
        return (
            <>
                <h1>Biblioteca de libros</h1>
                <hr></hr>
                <div style={rowStyle}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default ThirdClassComponent;