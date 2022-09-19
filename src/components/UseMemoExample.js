import { useState, useMemo, useRef } from "react"

function UseMemoExample () {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);
    const refName = useRef();

    const handleAddProduct = () => {
        setProducts([...products, {
            name: name,
            price: +price
        }])

        setName('');
        setPrice('');
        refName.current.focus();
    }

    const total = useMemo(() => {
        return products.reduce((accumulator, object) => {
            return accumulator + object.price;
        }, 0)    
    }, [products])
    return (
        <>
            <input
                value={name}
                placeholder="name"
                onChange={(e) => {setName(e.target.value)}}
                ref={refName}
            ></input>
            <br />
            <input value={price} placeholder="price" onChange={(e) => {setPrice(e.target.value)}}></input>
            <br />
            <button onClick={handleAddProduct}>Add Product</button>
            <br />
            <ul>
                {
                    products.length ?
                    products.map((product, index) => {
                        return (
                            <li key={index}>Name: {product.name} Price: {product.price}</li>
                        )
                    }) :
                    <li>ko có sản phẩm nào</li>
                }
            </ul>
            <p>Tổng giá: {
                    total
                }
            </p>

        </>
    )
}

export default UseMemoExample