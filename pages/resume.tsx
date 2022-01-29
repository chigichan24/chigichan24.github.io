import {NextPage} from "next";
import MyHeader from "../components/MyHeader";

const Resume: NextPage = () => {
    return (
        <>
            <MyHeader headerTitle={"Resume"} />
            <a href="https://drive.google.com/file/d/1CT-qT_EpyoB4-0UH-LU8v6VYuNqfWN6j/view?usp=sharing"
               target="_blank" rel="noreferrer">
                detail
            </a>
        </>
    )
}

export default Resume;