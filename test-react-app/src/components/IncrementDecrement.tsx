import React from 'react';
import { useIncrementDecrementContext } from '../contextApi/UserContextProvider';

const IncrementDecrement = () => {
    const {count,increment,decrement} = useIncrementDecrementContext();
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            
        </div>
    );
};

export default IncrementDecrement;