import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { TopsData, BottomsData } from '../constants';
import { CategoryDisplay } from '../minicomponents';


export const ProductSearchByWord = () => {
    const { query } = useParams();
    const results = useMemo(() => {
        const q = (query || '').trim().toLowerCase();
        if (!q) return [];

        const allItems = [...TopsData, ...BottomsData];
        return allItems.filter(item => {
            if (item.tittle.toLowerCase().includes(q)) return true;
            if (item.description.toLowerCase().includes(q)) return true;
            if (item.category.some(cat => cat.toLowerCase().includes(q))) return true;
            if (item.style.toLowerCase().includes(q)) return true;
            if (item.color.toLowerCase().includes(q)) return true;
            return false;
        });
    }, [query]);

    return (
        <div className="p-4 min-h-screen w-full">
            {results.length > 0 ? (
                <CategoryDisplay
                data={results}
                tittle={`Results for ${query}`}
                />
            ) : (
                <p>No items found.</p>
            )}
        </div>
    )
}
