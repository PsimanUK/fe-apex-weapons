import React, { Component } from 'react';

class WeaponAdder extends Component {

    state = {
        name: '',
        type: 'Sub Machine Gun',
        ammo: 'Light Ammo',
        damage: '',
        dps: '',
    };

    render() {
        const { name, damage, dps } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Weapon Name: <input type="text" name="name" onChange={this.handleChange} value={name} /></label>
                <label name="type">Weapon Type:
                    <select name="type" id="type" onChange={this.handleChange}>
                        <option name="type" selected value="Sub Machine Gun">SMG</option>
                        <option name="type" value="Assualt Rifle">ASSAULT</option>
                        <option name="type" value="Light Machine Gun">LMG</option>
                        <option name="type" value="Sniper Rifle">SNIPER</option>
                        <option name="type" value="Shotgun">SHOTGUN</option>
                    </select>
                </label>
                <label name="ammo">Ammo Type:
                <select name="ammo" id="ammo" onChange={this.handleChange}>
                    <option name="ammo" selected value="Light Ammo">LIGHT</option>
                    <option name="ammo" value="Heavy Ammo" >HEAVY</option>
                    <option name="ammo" value="Energy Cells" >ENERGY</option>
                    <option name="ammo" value="Sniper Ammo" >SNIPER</option>
                    <option name="ammo" value="Shotgun Shells" >SHELLS</option>
                </select>
                </label>
                <label>Base Damage: <input type="text" name="damage" onChange={this.handleChange} value={damage} />
                </label>
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