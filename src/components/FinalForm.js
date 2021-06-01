import React, { useState, useContext } from 'react';
import {Context} from '../App';
import emailjs from 'emailjs-com';

function FinalForm() {
    const {getPrice, myData} = useContext(Context);
    const [orderSent, setOrderSent] = useState(false);
    console.log(myData)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o4p7yfg', 'template_ruuievc', e.target, 'user_Y7hi9iioFtc2aXzRg8ZAS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();

        setOrderSent(true);
    }

    document.addEventListener('mouseup', (e) => {
        if (e.target.className != 'message_sent_block') {
            setOrderSent(false)
        }
    })

    return (
        <div className="final_form_wrapper">
            <h2>Please, make sure the information is correct and fill in the form below</h2>

            <form onSubmit={sendEmail}>

                {myData ?
                <div className="delivery_info_block">
                <h3>Delivery information</h3>

                <label htmlFor="parcel">Parcel name</label>
                <input type="text" name="parcel" value={myData.name + ` (${myData.number})`} readOnly/>

                <label htmlFor="Weight">Weight</label>
                <input type="text" name="weight" value={myData.weight * myData.number} readOnly/>

                <label htmlFor="from">From</label>
                <input type="text" name="from" value={myData.from} readOnly/>

                <label htmlFor="to">To</label>
                <input type="text" name="to" value={myData.to} readOnly/>

                <label htmlFor="price">Price</label>
                <input type="text" name="price" value={myData.price + ' $'} readOnly/>
            </div> : null}

                <div className="customer_info_block">
                    <h3>Customer information</h3>

                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Name" required/>

                    <label htmlFor="last_name">Last name</label>
                    <input type="text" name="last_name" placeholder="Last name" required/>

                    <label htmlFor="location">City/Town</label>
                    <input type="text" name="location" placeholder="Location" required/>

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="Email" required/>

                    <label htmlFor="message">Leave a comment if needed</label>
                    <textarea name="message"></textarea>

                    <input type="submit" value="Send!"/>

                </div>

            </form>

            {orderSent ? 
                <div className="message_sent_block">
                    <h3>Thank you for the order!</h3>
                    <p>Your application <br/> has been sent successfully!</p>
                    <button>OK</button>
                </div> 
                : false}
            
        </div>
    );
}

export default FinalForm;
