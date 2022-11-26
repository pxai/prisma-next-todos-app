import React,{ReactNode} from 'react';
import styles from "./Layout.module.css";
import Header from './Header';
import Link from 'next/link';

type Props = {
    children: ReactNode
}

const Layout:React.FC<Props> = ({children}) => {
  return (
    <div>
        <Header />
        <main className={styles.layout}>
            {children}
        </main>
        <footer className={styles.footer}>
        By <Link href="/about">Pello</Link>
      </footer>
    </div>
  )
}

export default Layout;