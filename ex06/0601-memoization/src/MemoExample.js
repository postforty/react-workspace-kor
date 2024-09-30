import React, { useState } from 'react'

const Greeting = React.memo(({ name }) => {
    console.log("Greeting!")

    return (
        <h3>
            Hello{name && ", "}
            {name}!
        </h3>
    )
})

function MemoExample() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    return (
        <div>
            <label>
                Name:&nbsp;
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Address{": "}
                <input value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
            <Greeting name={name} />
        </div>
    )
}

export default MemoExample
