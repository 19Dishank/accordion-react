import React, { useState } from 'react';

const FAQcard = ({ curElem, onToggle, isActive }) => {

    const { question, answer, id } = curElem;

    const handleToggle = (id) => {

    }
    return (
        <div className="w-full max-w-2xl rounded-xs border border-l-4 border-slate-100 border-l-purple-500 px-2 py-4 flex flex-row justify-between">
            <div className="flex flex-col">
                <p className="text-slate-100 text-sm px-4">
                    {question}
                </p>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${isActive ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                    <p className="text-slate-100 text-sm px-4">
                        {answer}
                    </p>
                </div>
            </div>

            <div>
                <button
                    onClick={onToggle}
                    className={`border rounded-xs px-2 text-slate-100 ${isActive ? "border-red-600" : "border-green-600"
                        }`}
                >
                    {isActive ? "Close" : "Show"}
                </button>
            </div>
        </div>

    );
};

export default FAQcard;