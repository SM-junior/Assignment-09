import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BlogItems from '../BlogItems/BlogItems';

const Blog = () => {
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className='my-20 grid lg:grid-cols-2 md:grid-cols-2'>
            {
                data.map(x=> <BlogItems
                key={x.id}
                y={x}
                ></BlogItems>)
            }
        </div>
    );
};

export default Blog;