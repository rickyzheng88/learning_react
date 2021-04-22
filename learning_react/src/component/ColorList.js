import React from 'react';
import Color from './Color';

export default function ColorList({ colors = [] }) {
    if (!colors.length) return <div>No hay ningún Color aquí</div>;
    return (
        <section>
            {
                colors.map((color, index) => <Color key={index} {...color} />)
            }
        </section>
    )
}
