import React from 'react';

const WhatILearned = () => {
    return (
        <div className='grid grid-cols-1 place-items-center py-5 w-full px-4 text-center'>
            <header className='capitalize underline font-bold text-xl text-slate-100 mb-5'>What I Learned</header>
            <div className='w-full max-w-2xl flex flex-col gap-4 text-slate-200 bg-slate-900 p-6 rounded-lg border border-purple-500 shadow-lg'>
                <p className='text-left'>
                    <span className='font-bold text-purple-400'>1. React State Management:</span> Learned how to use <code>useState</code> to manage the open/close state of accordion items.
                </p>
                <p className='text-left'>
                    <span className='font-bold text-purple-400'>2. Component Reusability:</span> Built a reusable <code>FAQcard</code> component that accepts props for dynamic content rendering.
                </p>
                <p className='text-left'>
                    <span className='font-bold text-purple-400'>3. Conditional Rendering:</span> Used logical operators to dynamically show or hide the answer based on the active state.
                </p>
                <p className='text-left'>
                    <span className='font-bold text-purple-400'>4. Tailwind CSS:</span> Applied utility classes for styling, including responsive design and dark mode themes.
                </p>
            </div>
        </div>
    );
};

export default WhatILearned;
