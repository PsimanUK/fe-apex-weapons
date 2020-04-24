import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx'
import WeaponTable from './components/weapon-table.jsx'
import WeaponAdder from './components/weapon-adder.jsx';

class App extends Component {

  state = {
    weaponData: [
      { name: 'R-99', type: 'SMG', ammo: 'Light', damage: '12', dps: '100', },
      { name: 'Hemlock', type: 'Assault Rifle', ammo: 'Heavy', damage: '22', dps: '88', },
      { name: 'Peacekeeper', type: 'Shotgun', ammo: 'Shells', damage: '100', dps: '100', },
      { name: 'Havoc', type: 'Energy Weapon', ammo: 'Plasma', damage: '18', dps: '120', },
      { name: 'Sentinal', type: 'Sniper', ammo: 'Bolts', damage: '75', dps: '75', },
      { name: 'Wingman', type: 'Pistol', ammo: 'Heavy', damage: '45', dps: '90', },
    ]
  }

  addNewWeapon = (newWeapon) => {
    this.setState((currentState) => {
      return { weaponData: [...currentState.weaponData, newWeapon] };
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <h2>Your online resource for Apex Legends weapons data</h2>
        <WeaponTable weapons={this.state.weaponData} />
        <WeaponAdder addNewWeapon={this.addNewWeapon} />
      </div>
    );
  };


}

export default App;

