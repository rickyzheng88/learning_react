import React, { useCallback, useState } from 'react';
import PureCat from './Cat';

const groupOfCats = ['flufy', 'katty', 'Pussy Destroyer']

export default function LotsCats() {
    const [cats, setCat] = useState(groupOfCats);

    const addCat = (newCat) => {
        return setCat([...cats, newCat]);
    };

    const meow = useCallback(
        (name) => console.log(`${name} has Meowed`),
    []);

    return (
        <div>
            {
                cats.map((name, i) => {
                    return <PureCat name={name} key={i} meow={meow}/>
                })
            }
            <button onClick={() => { addCat(prompt("agregue un gato")) }}>
                Add Cats
            </button>
        </div>
    )
}
