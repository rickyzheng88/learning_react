import React, { useState } from 'react'

export default function SearchForm({ search = f => f }) {
    const [data, setData] = useState();

    return (
        <div>
            <input 
                value={data}
                type="text" 
                onChange={(e) => {
                    e.preventDefault();
                    setData(e.target.value);
                }}
            />
            <button onClick={() => search(data)}>
                search
            </button>
        </div>
    )
}
