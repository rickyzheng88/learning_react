import { timesTwo, order } from './function';

const menuItems = [
    {
        id: 1,
        nombre: 'hamburguesa doble carne',
        precio: 5
    },
    {
        id: 2,
        nombre: 'Pizza Hawaiana',
        precio: 7
    },
    {
        id: 3,
        nombre: 'Arroz Chino con costilla',
        precio: 10
    },
    {
        id: 4,
        nombre: 'Papas fritas con salsa ketchu',
        precio: 3
    }
]

describe('Prueba testing', () => {
    test('Build an order function', () => {
        const ordentotal = {
            orden: menuItems,
            total: 25
        }
    
        expect(order(menuItems)).toEqual(ordentotal);
    });
    
    test('Multiplies by two', () => {
        expect(timesTwo(2)).toBe(4);
    });
});

