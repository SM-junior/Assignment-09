import React from 'react';

const BlogItems = ({y}) => {
    const{question, ans}=y
    return (
        <div className='rounded-lg bg-indigo-100 p-10 m-5 text-start'>
            <h2 className='text-2xl text-bold mb-2'>{question}</h2>
            <p className='tracking-wide'>{ans}</p>
        </div>
    );
};

export default BlogItems;