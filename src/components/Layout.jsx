import { Link } from 'gatsby';
import React from 'react'

const navItems = [
    // {page: 'home', navItem: 'Home', path: '/'},
    // {page: 'projects', navItem: 'Projects', path: '/projects'}
];

const Layout = ({ page, children }) => {
    return (
        <div className={page}>
            <nav className="navbar">
                <div className="navbar__container">
                    {
                        navItems.map(navItem => {
                            const isPageActive = page === navItem.page;
                            const activeClass = isPageActive ? 'navbar__item--underlined' : '';
                            return (<Link to={navItem.path} className={`navbar__item ${activeClass}`}>{navItem.navItem}</Link>)
                        })
                    }
                </div>
            </nav>
            {children}
        </div>
    );
}

export default Layout;
