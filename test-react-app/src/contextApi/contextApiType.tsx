
import  { ReactNode } from "react";
export type userType ={
    name:string,
    email:string

}
export type userContextType ={
    user:userType,
    setUser: (user:userType) => void
}
export type contextProviderType ={
    children:ReactNode

}