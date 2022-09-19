import { useRef, useState } from "react";

const UseRefExample = () => {
    const [number, setNumber ] = useState(50);
    const timeId = useRef(null);

    const handleStart = () => {
        timeId.current = setInterval(() => {
            setNumber(prev => prev - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timeId.current)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
        </div>
    )
}

export default UseRefExample;