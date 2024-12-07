//import React from 'react';

import { useUserContext } from "../contextApi/UserContextProvider";

const UserData = () => {
    const {user} = useUserContext();
    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            
        </div>
    );
};

export default UserData;