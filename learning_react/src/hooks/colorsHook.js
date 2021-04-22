import { useContext } from 'react'
import { ColorContext } from '../provider/ColorProvider';

export default function useColors() {
    return useContext(ColorContext);
}
