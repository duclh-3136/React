import ContextSon from '../ContextSon'
import { useContext } from 'react'
import { NumberContext } from '../ContextGrandFather/context'

function ContextDad () {
    console.log('dad', NumberContext);
    const { radomNumberDad } = useContext(NumberContext);
//     const { setNumber } = useContext(NumberContext);
// console.log(setNumber);
    return (
        <>
            <h2>day la component cha</h2>
            <h2>Số ngẫu nhiên của component cha: {radomNumberDad}</h2>
            <ContextSon/>
        </>
    )
}

export default ContextDad
