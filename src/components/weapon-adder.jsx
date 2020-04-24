import React, { Component } from 'react';

class WeaponAdder extends Component {

    state = {
        name: '',
        type: '',
        ammo: '',
        damage: '',
        dps: '',
    };

    render() {
        const { name, type, ammo, damage, dps } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Weapon Name: <input type="text" name="name" onChange={this.handleChange} value={name} /></label>
                <label>Weapon Type: <input type="text" name="type" onChange={this.handleChange} value={type} /></label>
                <label>Ammo Type: <input type="text" name="ammo" onChange={this.handleChange} value={ammo} /></label>
                <label>Base Damage: <input type="text" name="damage" onChange={this.handleChange} value={damage} /></label>
                <label>Damage per Second: <input type="text" name="dps" onChange={this.handleChange} value={dps} /></label>
                <button type="submit" >SUBMIT WEAPON</button>
            </form>
        )
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState(
            {
                [name]: value
            });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewWeapon({ ...this.state });
        this.setState({
            name: '',
            type: '',
            ammo: '',
            damage: '',
            dps: '',
        })
    };
};

export default WeaponAdder;