import {NextPage} from "next";
import styles from '../styles/Profile.module.css'
import MyHeader from "../components/MyHeader";

const Profile: NextPage = () => {
    return (
        <>
            <MyHeader headerTitle={"Profile"}/>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Profile | Kazuki Chigita</h1>
                    <h2 className={styles.subTitle}>
                        A junior software engineer who is interested in mobile app development.
                    </h2>
                    <p className={styles.description}>
                        Born in Fukuoka, Japan, 1997.
                        In March 2021, He graduates University of Tsukuba, majoring in computer science.
                    </p>
                    <p className={styles.description}>
                        He is a software engineer focusing on the development of technical infrastructure to support both the user&apos;s service experience (UX) and the developer&apos;s development experience (DeX).
                        He is particularly good at developing mobile applications (Android / iOS).
                    </p>
                    <p className={styles.description}>
                        While developing software as a student, he was also engaged in research on medical image processing.
                    </p>

                    <h1 className={styles.title}>Works</h1>
                    <h2 className={styles.subTitle}>
                        *****, corp. (April 2021 - now)
                    </h2>

                    <h2 className={styles.subTitle}>

                    </h2>
                    <p className={styles.description}>
                        Works as an android application developer.
                    </p>

                    <h2 className={styles.subTitle}>
                        Telorain, inc. (August 2020 - December 2021)
                    </h2>

                    <p className={styles.description}>
                        Works as an iOS / webfront / backend engineer.
                        Propose an architecture that ensures both development speed and execution speed of measures.
                        Also responsible for designing measures and evaluating their operation.
                        Developed iOS application <a className={styles.descriptionLink} href="https://apps.apple.com/jp/app/telorain/id1504837403" target="_blank" rel="noreferrer">Telorain</a>.
                        And developed a service to support two-way communication using WebRTC.
                    </p>

                    <h1 className={styles.title}>Educations</h1>
                    <h2 className={styles.subTitle}>
                        University of Tsukuba (April 2019 - March 2021)
                    </h2>
                    <p className={styles.description}>
                        Master’s Degree, Graduate school of systems and information engineering Department of
                        computer science
                    </p>

                    <h2 className={styles.subTitle}>
                        University of Tsukuba (April 2017 - March 2019)
                    </h2>
                    <p className={styles.description}>
                        Bachelor’s Degree, School of informatics, college of media arts, science and technology
                    </p>

                    <h2 className={styles.subTitle}>
                        National Institute technology, Kurume college (April 2012 - March 2017)
                    </h2>
                    <p className={styles.description}>
                        Associate’s Degree, Department of control and information systems engineering
                    </p>

                    <h1 className={styles.title}>Publications</h1>
                    <h2 className={styles.subTitle}>
                        International Conference (peer review | oral)
                    </h2>
                    <p className={styles.description}>
                        1. <u>Kazuki Chigita</u>, Jian Dong and Hiroyuki Kudo. 2021. An iterative reconstruction method for
                        CT metal artifact reduction using L1 norm data fidelity and nonlocal TV regularization. IFMIA
                        2021. DOI: <a className={styles.descriptionLink} href="https://doi.org/10.1117/12.2590726" target="_blank" rel="noreferrer">https://doi.org/10.1117/12.2590726</a>
                    </p>
                    <p className={styles.description}>
                        2. Hiroyuki Kudo, <u>Kazuki Chigita</u>, Yongchae Kim and Jian Dong. 2019. Metal artifact
                        reduction in CT using fault-tolerant image reconstruction. SPIE 2019. DOI: 
                        <a className={styles.descriptionLink} href="https://doi.org/10.1117/12.2529169" target="_blank" rel="noreferrer">https://doi.org/10.1117/12.2529169</a>
                    </p>
                    <p className={styles.description}>
                        3. Yonchae Kim, Hiroyuki Kudo and <u>Kazuki Chigita</u>. 2019. Image reconstruction in
                        sparse-view CT using improved nonlocal total variation regularization. SPIE 2019. DOI: 
                        <a className={styles.descriptionLink} href="https://doi.org/10.1117/12.2529164" target="_blank" rel="noreferrer">https://doi.org/10.1117/12.2529164</a>
                    </p>
                    <p className={styles.description}>
                        4. Tomoya Hirakawa, <u>Kazuki Chigita</u> and Yoshimitsu Kuroki. 2018. Distributed compressed
                        hyper spectral image sensing using ADMM. IWAIT 2018. DOI: 
                        <a className={styles.descriptionLink} href="https://doi.org/10.1109/IWAIT.2018.8369758" target="_blank" rel="noreferrer">https://doi.org/10.1109/IWAIT.2018.8369758</a>
                    </p>

                </div>
                <footer className={styles.contentPdfLink}>
                    <a href="https://drive.google.com/file/d/1CT-qT_EpyoB4-0UH-LU8v6VYuNqfWN6j/view?usp=sharing"
                       target="_blank" rel="noreferrer">
                        more profile (PDF) JA only
                    </a>
                </footer>
            </div>
        </>
    )
}
export default Profile;
