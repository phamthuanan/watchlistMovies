import React from 'react'
import {Link} from 'react-router-dom'
export const Header = () => {
    return (
        <header className="container">
            <div className="inner-content">
                <div className="brand">
                    <Link to="/">Watchlist</Link>
                </div>
            </div>
        </header>
    )
}
