import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Profile from './Profile'

function Profiles() {
    return (
        <>
            <h3>유저 목록:</h3>
            <ul>
                <li>
                    <Link to="/profiles/o1">오일남</Link>
                </li>
                <li>
                    <Link to="/profiles/o2">오이남</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<div>유저를 선택해주세요.</div>} />
                <Route path=":username" element={<Profile />} />
            </Routes>
        </>
    )
}

export default Profiles