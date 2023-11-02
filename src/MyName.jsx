import { useState } from "react"

function MyName(){
    const [name, setName] = useState("")
    

    const changeName = (e) => {
        setName(e.target.value)
        
    }

    return (
        <>
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" onChange={changeName}/>
        </div>
        <div>
            <p>Hello, {name}</p>

        </div>
        </>
    )
}

export default MyName