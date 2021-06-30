import React, { useState } from 'react';

import "../../App.scss";
import "./Contact.scss";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const nameChangeHandler = e => {
        let nameInput = e.target.value.toString();
        setName(nameInput);
    };

    const emailChangeHandler = e => {
        let emailInput = e.target.value.toString();
        setEmail(emailInput);
    };

    const messageChangeHandler = e => {
        let messageInput = e.target.value.toString();
        setMessage(messageInput);
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(name, email, message);
    }

    return (
        <div className="Contact page">
            <h1 className="title1">Contact Me</h1>
            <form action="" onSubmit={onSubmitHandler}>
                <label htmlFor="name">Full Name</label>
                <input onChange={nameChangeHandler} type="text" value={name} required />

                <label htmlFor="email">E-mail</label>
                <input onChange={emailChangeHandler} type="text" value={email} required />

                <label htmlFor="content">Message</label>
                <textarea onChange={messageChangeHandler} rows="5" cols="50" maxlength="400" value={message} required />

                <button type="submit" className="btn-dark">Send Message</button>
            </form>
        </div>
    )
}

export default Contact;