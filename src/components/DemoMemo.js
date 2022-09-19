import { useState } from "react"
import { memo } from "react"

function DemoMeno () {
    console.log('re-render');
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(prev => prev +1);
    }

    return(
        <div>
            <h1>xxx</h1>
            <h2>{count}</h2>
            <button onClick={increase}>Click me</button>
        </div>
    )

}

export default memo(DemoMeno)