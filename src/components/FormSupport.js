import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

function FormSupport(props) {
    let messageSentBlock = document.createElement('div');
    messageSentBlock.classList.add('message_sent_block');
    messageSentBlock.innerHTML = `
        <p>Message has been sent!</p>
        <button>OK</button>
    `;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o4p7yfg', 'template_d0c2c7t', e.target, 'user_Y7hi9iioFtc2aXzRg8ZAS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()

        props.setMessageSent(true);
    }

    return (
        <div className="support_form_wrapper">
            <form onSubmit={sendEmail}>
                <h3>Still have a question?</h3>
                <h4>Get in touch!</h4>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" required/>

                <label htmlFor="last_name">Last name</label>
                <input type="text" name="last_name" placeholder="Last name" required/>

                <label htmlFor="location">City/Town</label>
                <input type="text" name="location" placeholder="Location" required/>

                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Email" required/>

                <label htmlFor="message">Message</label>
                <textarea name="message" required></textarea>

                <input type="submit" value="Send message"/>

            </form>
            
        </div>
    )
}

export default FormSupport;
