import React from 'react'

export default function List({ data = [], renderItem, renderEmpty }) {
    return (
        <ul>
            {
                (!data.length) ? 
                renderEmpty :
                data.map((item, i) => (
                    <li key={i}>{renderItem(item)}</li>
                ))
            }
        </ul>
        
    );
}
