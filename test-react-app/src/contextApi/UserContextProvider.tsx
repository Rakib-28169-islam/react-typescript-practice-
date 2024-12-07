import React, { createContext, useContext, useState } from "react";
import { contextProviderType, incrementDecrementType, userContextType, userType } from "./contextApiType";


//crate context api 
const userContext = createContext<userContextType | undefined>(undefined);
const incrementDecrementContext = createContext<incrementDecrementType | undefined>({
    count: 0,
    increment: () => { },
    decrement: () => { }
});

//create context provider
export const UserContextProvider: React.FC<contextProviderType> = ({ children }) => {

    const [user, setUser] = useState<userType>({
        name: "",
        email: ""
    })
    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>)
}
export const IncrementDecrementContextProvider: React.FC<contextProviderType> = ({ children }) => {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1 < 0 ? 0 : count - 1);
    }
    return (
        <incrementDecrementContext.Provider value={{ count, increment, decrement }}>
            {children}
        </incrementDecrementContext.Provider>
    );
};
//use context api
export const useUserContext = (): userContextType => {
    const context = useContext(userContext);
    if (!context) {
        throw new Error("useUser must be used within a UserContextProvider");
    }
    return context;
}
export const useIncrementDecrementContext = () => {

    const context = React.useContext(incrementDecrementContext);
    if (!context) {
        throw new Error("useIncrementDecrementContext must be used within a IncrementDecrementContextProvider");
    }
    return context;
}