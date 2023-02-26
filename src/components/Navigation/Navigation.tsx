import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

export function Navigation() {
    const [isSticky, setIsSticky] = useState(true);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 10) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };
    }, []);

    return (
        <header className={`${styles.header} ${isSticky ? styles.stickyHeader : ''}`}>
            <nav
                className={`${styles.navigation} ${
                    isSticky ? styles.stickyNavigation : ''
                }`}
            >
                <NavLink className={styles.link} to="/">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                    <h2>
                        vite<span>app</span>
                    </h2>
                </NavLink>
                <div className={styles.right}>
                    <div className={`${styles.links} .links`}>
                        <NavLink className={styles.link} to="/">
                            Home
                        </NavLink>
                        <NavLink className={styles.link} to="/about">
                            About
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
}
