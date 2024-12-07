//import React from 'react';

import { useRef, type FormEvent, useState, useEffect } from "react";

type formDataType = {

    name: string,
    email: string,
    password: string,
};


const Form = () => {
    const [formData, setFormData] = useState<formDataType>({
        name: "",
        email: "",
        password: ""
    });
    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nameVal = name.current!.value;
        const emailVal = email.current!.value;
        const passwordVal = password.current!.value;

        setFormData({
            name: nameVal,
            email: emailVal,
            password: passwordVal
        });


    }
    useEffect(() => {
        console.log(formData);
    }, [formData]);

    // const handleOnChange = (event: FormEvent<HTMLInputElement>) => {//if u use useRef already dont use onchange method to update values


    //     console.log(event.currentTarget.value);
    //     setFormData({
    //         ...formData,
    //         [event.currentTarget.name]: event.currentTarget.value
    //     })
    // }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>name:</label>
                <input type="text" ref={name} /><br />
                <label>email:</label>
                <input type="email" ref={email} /><br />
                <label>password:</label>
                <input type="password" ref={password} /><br />
                <button type="submit">submit</button>


            </form>
        </>
    );
};

export default Form;