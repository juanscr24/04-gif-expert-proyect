import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch'])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory onNewCategory={onAddCategory} />
            {/* Listado de Gif */}

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
            {/* Gif Item */}
        </>
    )
}

export default GifExpertApp