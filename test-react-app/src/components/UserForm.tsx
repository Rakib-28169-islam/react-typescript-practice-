import React,{useRef,useEffect} from 'react';
import { useUserContext } from '../contextApi/UserContextProvider';
//import { userType } from '../contextApi/contextApiType';

const UserForm = () => {

    const {user,setUser} = useUserContext();
    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);

    const handleForm = ( e:React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault();
        const nameVal = name.current!.value;
        const emailVal = email.current!.value;

        setUser({
            name:nameVal,
            email:emailVal
        })
    }

    useEffect(() => {
        console.log(user);
    }, [user]);


    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="name" ref={name} placeholder='name' /><br />
                <input type="email" name="email" ref={email}  placeholder='email' /><br />
                <button type="submit">Submit</button>
            </form>
            
        </div>
    );
};

export default UserForm;