import React from 'react'
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-6xl font-bold text-black/90 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-6">Page not found</p>
            <Link
                to="/"
                className="px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition"
            >
                Go back home
            </Link>
        </div>
    );
}