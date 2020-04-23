import React, { Component } from 'react';

class WeaponAdder extends Component {

    state = {
        weapon: '',
        type: '',
        ammo: '',
        damage: '',
        dps: '',
    };

    render() {
        <form action="submit" onSubmit={this.handleSubmit}>
            <label>Weapon Name: <input type="text" name="weaponName" /></label>

            <label>Weapon Type: <input type="text" name="weaponType" /></label>
            <label>Ammo Type: <input type="text" name="ammoType" /></label>
            <label>Base Damage: <input type="text" name="damage" /></label>
            <label>Damage per Second: <input type="text" name="damagePerSecond" /></label>
            <button type="submit" >SUBMIT WEAPON</button>
        </form>
    };

    handleSubmit = (event) => {
        const { weaponName, weaponType, ammoType, damage, damagePerSecond } = event.target.value;
        this.setState(
            {
                weapon: weaponName,
                type: weaponType,
                ammo: ammoType,
                damage: damage,
                dps: damagePerSecond
            });
    };
};

export default WeaponAdder;