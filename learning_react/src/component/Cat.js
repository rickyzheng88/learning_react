import React, { memo } from 'react'

function Cat({ name }) {
    console.log('Cat Rendered');
    
    return (        
        <p>Cat: {name}</p>
    )
}

// El segundo parametro de Memo es una function 'predicable'
// Esta funcion solo retorna TRUE y FALSE
//
// En caso de TRUE, el componente solo se renderiza una vez
// En caso de False, Se renderiza siempre
//
// los dos parametros que tiene la funcion: la primera es un objeto
// con las propiedades previas, y la segunda es un objeto con las propiedades nuevas
// Podemos usarlo para decir a react bajo qué circunstancia se desea rerenderizar el componente,
// esto equivale al arreglo de dependencia de los hooks tales como, useEffect, useMemo y useCallback
//const PureCat = memo(Cat, (prev, next) => prev.name === next.name);
const PureCat = memo(Cat);
export default PureCat;