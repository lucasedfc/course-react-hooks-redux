import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     // setCategories(cat => [...categories, 'New data']);
    //     setCategories([...categories, 'New Category']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories= {setCategories}></AddCategory>
            <hr></hr>
            
            <ol>
                {
                    categories.map(category => <li key={category}>{category}</li>)
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
