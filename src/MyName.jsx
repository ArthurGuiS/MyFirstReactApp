import { useState } from "react"

function MyName(){
    const [text,setText] = useState("")
    const [name, setName] = useState("")
    

    const changeName = (e) => {
        setName(e.target.value)
    }

    function changeText() {
        setText(name)
    }

    return (
        <>
        <div>
            <label for="name">Name:</label>
            <input type="text" value={name} onChange={changeName}/>
            <button onClick={changeText}>Hello</button>
        </div>
        <div>
            <p>Hello, {text}</p>
        </div>
        </>
    )
}

export default MyName