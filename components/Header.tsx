import React from "react";
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './Header.module.css';

const Header: React.FC =  () => {
    const router = useRouter();
    const isActive:(pathname:string) => boolean = pathname => router.pathname === pathname;

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <Link href="/">
                        Todos App
                </Link>
            </div>
            <div className={styles.center}>
                <Link href="/" data-active={isActive('/')}>
                        Todos
                </Link>
            </div>
        </nav>
    )
}

export default Header;