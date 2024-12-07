import React, { useState, useEffect } from 'react';

type Product = {
    id: number,
    // title:string,
    category: string,
    //description:string,
    rating: number,
    // stock:number
}


const FetchData = () => {
    const [data, setData] = useState<Product[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://dummyjson.com/products");
            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }
            const result = await response.json();
            // const data = result.products;

            await setData(result.products);

        }
        fetchData();

    }, [])

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <div>
            <h1>Products</h1>
            {data ? (
                <div>
                    {data.map((product, index) => (
                        <div key={index}>
                            <p>{product.id}</p>
                            <p>{product.category}</p>
                            <p>{product.rating}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}


        </div>
    );
};

export default FetchData;