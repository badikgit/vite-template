import React, { useState } from 'react';
import { Button } from '@mui/material';
import reactLogo from '../../assets/react.svg';
import styles from './Home.module.scss';

export function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Home Page</h1>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src="/vite.svg" className={styles.logo} alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img
                        src={reactLogo}
                        className={[styles.logo, styles.react].join(' ')}
                        alt="React logo"
                    />
                </a>
            </div>
            <h2>Vite + React</h2>
            <div className={styles.card}>
                <Button variant="contained" onClick={() => setCount((prev) => prev + 1)}>
                    count is {count}
                </Button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className={styles['read-the-docs']}>
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}
