import React from 'react'

export default function Button({ children, onClick, type = "button", className = "" }) {
    return (
        <div>
            <button
                type={type}
                onClick={onClick}
                className={`px-4 py-2 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition ${className}`}
            >
                {children}
            </button>
        </div>
    )
}
