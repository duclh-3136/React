import { NumberContext } from '../ContextGrandFather/context'
import { useContext } from 'react'

function ContextSon () {
    const { radomNumberSon, setNumber } = useContext(NumberContext);

    return (
        <>
            <h3>day la component con</h3>
            <h3>Số ngẫu nhiên của component con: {radomNumberSon}</h3>
            <button onClick={setNumber}>Change number</button>
        </>
    )
}

export default ContextSon