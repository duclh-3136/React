import { useState, createContext } from 'react'

const NumberContext = createContext();

function NumberProvider({children}) {
    const [radomNumberDad, setRadomNumberDad] = useState(1);
    const [radomNumberSon, setRadomNumberSon] = useState(1);

    const setNumber = () => {
        setRadomNumberDad(Math.random())
        setRadomNumberSon(Math.random())
    }

    return (
        <NumberContext.Provider value={{
            radomNumberDad: radomNumberDad,
            radomNumberSon: radomNumberSon,
            setNumber: setNumber
        }}>
            {children}
        </NumberContext.Provider>
    )
}

export { NumberProvider, NumberContext }