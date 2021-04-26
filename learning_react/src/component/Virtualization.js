import React from 'react';
import faker from 'faker';

const bigList = [...Array(50)].map(() => ({
    name: faker.name.findName(),
    email: faker.internet.email()
}));

export default function Virtualization() {
    return (
        <ul>
            {
                bigList.map((item, i) => {
                    return <li key={i}>{`Nombre: ${item.name} - Correo: ${item.email}`}</li>
                })
            }
        </ul>
    )
}
