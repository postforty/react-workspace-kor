import React from 'react'
import { useNavigate } from 'react-router-dom'

function HistorySample() {
    const navigate = useNavigate();

    const goBack = () => {
        const answer = window.confirm("정말 떠나시겠어요?")
        if (answer) {
            navigate(-1);
        }
    }

    const goHome = () => navigate("/");

    return (
        <>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
        </>
    )
}

export default HistorySample