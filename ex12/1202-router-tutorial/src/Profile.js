import React from 'react'
import { useParams } from 'react-router-dom';

function Profile({profileData}) {
    const { username } = useParams(); // path variable

    console.log("username>>>", username)

    const profile = profileData[username]

    // console.log(profile)

    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>
    }

    return (
        <>
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
        </>
    )
}

export default Profile