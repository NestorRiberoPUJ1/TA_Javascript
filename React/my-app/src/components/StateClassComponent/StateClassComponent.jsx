import react, { Component } from 'react';
import button from '../Botones.module.css'

class StateClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            available: false,
            buttonText: "Surtir Inventario"
        };
    }

    render() {
        return (
            <fieldset>
                <p>Estado: {this.state.available ? "Disponible" : "No Disponible"}</p>
                <button className={button.mainButton} onClick={(e) => this.setState({ available: !this.state.available, buttonText: this.state.buttonText === "Surtir Inventario" ? "Vender" : "Surtir Inventario" })} >{this.state.buttonText}</button>
            </fieldset>
        );
    }
}

export default StateClassComponent;