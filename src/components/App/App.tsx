import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, About, NotFound } from '../../routes';
import { Navigation } from '..';
import styles from './App.module.scss';

export function App() {
    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <div className={styles.wrapper}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="*" element={<Navigate to="/404" replace />} />
                    </Routes>
                </div>
            </main>
        </>
    );
}
