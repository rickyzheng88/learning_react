import React from 'react';
import ColorList from './ColorList';
import ColorForm from '../component/ColorForm';
import useColors from '../hooks/colorsHook';

export default function ColorOrganizer() {
    const { colors } = useColors();

    return (
        <>
            <ColorForm />
            <ColorList colors={colors} />
        </>
    );
}
