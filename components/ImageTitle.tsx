import React from 'react';
import styles from '../styles/ImageTitle.module.css';

interface ImageTitleProps {

}

const ImageTitle: React.FC<ImageTitleProps> = (props: ImageTitleProps) => {
    return <div className={styles.titleContainer}>
        <div className={styles.icon}>
            <img alt="chigichan24" src="/chigichan24_2022.png" width={70} height={70}/>
        </div>
        <h1 className={styles.title}>
            Kazuki Chigita&apos;s Portfolio
        </h1>
    </div>
}

export default ImageTitle;