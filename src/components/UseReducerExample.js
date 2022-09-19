import { useReducer } from "react";
const initState = 0;
const actionDown = 'down'
const actionUp = 'up'
const reducer = (state, action) => {
    console.log(action);
    switch (action) {
        case 'up':
            return state += 1
            break;
        case 'down':
            return state -= 1
            break;
        default:
            throw new Error('input invalid');
    }
}

function UseReducerExample () {
    const [count, dispath] = useReducer(reducer, initState)

    return (
        <>
            <h1>Count value: {count}</h1>
            <button onClick={() => {dispath(actionUp)}}>Up</button>
            <button onClick={() => {dispath(actionDown)}}>Down</button>
        </>
    )
}

export default UseReducerExample