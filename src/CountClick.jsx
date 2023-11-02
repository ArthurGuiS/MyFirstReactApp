import { useState } from "react";

function CountClick(){
    const [count, setCount] = useState(0)
    
    function addCount () {
        setCount(count+1)
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={addCount}>Count</button>
        </div>
    )
}

export default CountClick