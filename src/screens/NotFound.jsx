// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
            <h1 style={{ fontSize: '3rem' }}>404</h1>
            <p style={{ fontSize: '1.2rem' }}>Oops! Page not found.</p>
            <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
                Back to Home
            </Link>
        </div>
    );
}

export default NotFound;
