import React from 'react'
import { useSearchParams } from 'react-router-dom'

function About() {
    const [searchParams] = useSearchParams(); // query parameter

    // console.log("searchParams>>>", searchParams.get("detail"))

    const detail = searchParams.get("detail") === "true";

    return (
        <>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 실습 예제입니다.</p>
            {
                detail && <p>추가적인 정보...</p>
            }
        </>
    )
}

export default About