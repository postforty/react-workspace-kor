import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Profile from './Profile'

const profileData = {
    o1: {
        name: "오일남",
        description: "오징어 게임은 내가 만들었지!"
    },
    o2: {
        name: "오이남",
        description: "오징어 게임은 우리 형이 만들었지!"
    },
    o3: {
        name: "오삼남",
        description: "오징어 게임은 우리 큰 형이 만들었지!"
    },
}

function Profiles() {
    return (
        <>
            <h3>유저 목록:</h3>
            <ul>
                {Object.keys(profileData).map((key, i) => {
                    return (
                        <li key={i}>
                            <Link to={`/profiles/${key}`}>{profileData[key].name}</Link>
                        </li>
                    );
                })
                }
                <li>
                    <NavLink to={`/profiles/o1`}
                        style={({ isActive }) => ({
                            background: isActive ? "yellow" : "transparent",
                        })}>오일남(NavLink)</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<div>유저를 선택해주세요.</div>} />
                <Route path=":username" element={<Profile profileData={profileData} />} />
            </Routes>
        </>
    )
}

export default Profiles