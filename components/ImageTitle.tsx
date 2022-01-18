import React from 'react';
import Image from 'next/image';
import styles from '../styles/ImageTitle.module.css';

interface ImageTitleProps {

}

const ImageTitle: React.FC<ImageTitleProps> = (props: ImageTitleProps) => {
    return <div className={styles.titleContainer}>
        <Image alt="chigichan24" src="/chigichan24_2022.png" width={200} height={200} />
        <h1 className={styles.title}>
          Kazuki Chigita&apos;s Portfolio
        </h1>
    </div>
}

export default ImageTitle;