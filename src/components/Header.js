import React from 'react';

function Header({ onModeChange, mode }) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onModeChange}>{mode ? "Dark" : "Light"} Mode</button>
        </header>
    )
}

export default Header