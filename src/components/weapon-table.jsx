import React from 'react';

function WeaponTable() {
    return (
        <table class="weaponTable">
            <tr>
                <th>Weapon Name</th>
                <th>Weapon Type</th>
                <th>Ammo Type</th>
                <th>Base Damage</th>
                <th>Damage Per Second</th>
            </tr>
            <tr>
                <td>Hemlock</td>
                <td>Assault Rifle</td>
                <td>Heavy</td>
                <td>22</td>
                <td>88</td>
            </tr>
        </table>
    )
};

export default WeaponTable;