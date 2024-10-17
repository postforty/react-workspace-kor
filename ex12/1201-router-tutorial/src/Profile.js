import React from 'react'
import { useParams } from 'react-router-dom';

const profileData = {
    o1: {
        name: "오일남",
        description: "오징어 게임은 내가 만들었지!"
    },
    o2: {
        name: "오이남",
        description: "오징어 게임은 우리 형이 만들었지!"
    },
}

function Profile() {
    const { username } = useParams(); // path variable

    // console.log("username>>>", username)

    const profile = profileData[username]

    // console.log(profile)

    return (
        <>
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
        </>
    )
}

export default Profile