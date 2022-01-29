import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/MyHeader.module.css";
import ImageTitle from "./ImageTitle";

interface MyHeaderProps {
    headerTitle: string
}

const MyHeader: React.FC<MyHeaderProps> = (props: MyHeaderProps) => {
    return (
        <>
            <Head>
                <title>Kazuki Chigita | {props.headerTitle}</title>
                <meta name="description" content="Kazuki Chigita"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={styles.header}>
                <div className={styles.headerHomeItem}>
                    <Link href="/">
                        <a><ImageTitle/></a>
                    </Link>
                </div>
                <a href="https://chigichan24.hatenablog.com" target="_blank" rel="noreferrer">
                    <div className={styles.headerLinkItem}>
                        Blog
                    </div>
                </a>
                <a href="https://github.com/chigichan24" target="_blank" rel="noreferrer">
                    <div className={styles.headerLinkItem}>
                        GitHub
                    </div>
                </a>
                <Link href="/resume">
                    <a>
                        <div className={styles.headerLinkItem}>
                            RESUME(JA)
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}

export default MyHeader;