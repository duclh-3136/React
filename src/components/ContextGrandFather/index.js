import ContextDad from '../ContextDad'
import { useContext } from 'react'
import { NumberProvider, NumberContext } from '../ContextGrandFather/context'

function ContextGrandFather () {

    return (
        <NumberProvider>
            <h1>day la component ông</h1>
            <ContextDad/>
        </NumberProvider>
    )
}

export default ContextGrandFather