import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:5000/categories`
            try {
                const res = await fetch(url)
                const data = await res.json()
                setCategories(data)
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            <h1>All Category</h1>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;