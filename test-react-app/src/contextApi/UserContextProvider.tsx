import React, { createContext, useContext, useState} from "react";
import { contextProviderType, userContextType, userType } from "./contextApiType";


//crate context api 
const userContext = createContext<userContextType | undefined>(undefined);

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
//use context api
export const useUserContext = ():userContextType =>{
    const context = useContext(userContext);
    if (!context) {
        throw new Error("useUser must be used within a UserContextProvider");
    }
    return context;
}