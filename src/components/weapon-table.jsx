import React from 'react';

function WeaponTable(props) {
    const { weapons } = props;
    return (
        <table class="weaponTable">
            <tr>
                <th>Weapon Name</th>
                <th>Weapon Type</th>
                <th>Ammo Type</th>
                <th>Base Damage</th>
                <th>Damage Per Second</th>
            </tr>
            {weapons.map(({ name, type, ammo, damage, dps }) => {
                return (
                    <tr>
                        <td>{name}</td>
                        <td>{type}</td>
                        <td>{ammo}</td>
                        <td>{damage}</td>
                        <td>{dps}</td>
                    </tr>
                );
            })}

        </table>
    )
};

export default WeaponTable;
