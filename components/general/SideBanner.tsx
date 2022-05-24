import { ReactNode } from 'react';
import styles from './SideBanner.module.css'

const SideBanner: React.FC<{children: ReactNode; side: string; className?: string;}> = ({children, side, className}) => {
    return (<div className={`${styles.wrapper} ${styles[side]} ${className}`}>
        {children}
    </div>)
}

export default SideBanner;