import React, { useState, useEffect } from 'react';
import FormSupport from './FormSupport';
import '../styles/css/support.css'

function Support() {
    const [messageSent, setMessageSent] = useState(false);

    const runAccordeon = () => {
        let acc = document.getElementsByClassName("accordion");

        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }

    document.addEventListener('mouseup', (e) => {
        if (e.target.className != 'message_sent_block') {
            setMessageSent(false)
        }
    })

    useEffect(() => {
        runAccordeon()
    }, [])

    return (
        <main>
            <div className="support_wrapper">

                <div className="accordeon_wrapper">
                    <h2>You've got questions, we've got answers on anything</h2>
                    <h3>Top questions</h3>
                    <ul className="list_questions">

                        <li className="item">
                            <button className="accordion">Where is your office?</button>
                            <div className="panel">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus excepturi alias blanditiis ullam doloribus nesciunt, accusamus expedita illum distinctio aliquid quidem quo obcaecati a, dolores eius impedit sit ipsum. Repellat numquam modi perferendis id. Laborum repellendus dolorum deserunt officiis!</p>
                            </div>
                        </li>

                        <li className="item">
                            <button className="accordion">How do i send a request?</button>
                            <div className="panel">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus excepturi alias blanditiis ullam doloribus nesciunt, accusamus expedita illum distinctio aliquid quidem quo obcaecati a, dolores eius impedit sit ipsum. Repellat numquam modi perferendis id. Laborum repellendus dolorum deserunt officiis!</p>
                            </div>
                        </li>

                        <li className="item">
                            <button className="accordion">How do i get credit for a past purchase?</button>
                            <div className="panel">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus excepturi alias blanditiis ullam doloribus nesciunt, accusamus expedita illum distinctio aliquid quidem quo obcaecati a, dolores eius impedit sit ipsum. Repellat numquam modi perferendis id. Laborum repellendus dolorum deserunt officiis!</p>
                            </div>
                        </li>

                        <li className="item">
                            <button className="accordion">Um, hello! Where are my points?</button>
                            <div className="panel">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus excepturi alias blanditiis ullam doloribus nesciunt, accusamus expedita illum distinctio aliquid quidem quo obcaecati a, dolores eius impedit sit ipsum. Repellat numquam modi perferendis id. Laborum repellendus dolorum deserunt officiis!</p>
                            </div>
                        </li>

                        <li className="item">
                            <button className="accordion">How can i make a delivery faster?</button>
                            <div className="panel">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus excepturi alias blanditiis ullam doloribus nesciunt, accusamus expedita illum distinctio aliquid quidem quo obcaecati a, dolores eius impedit sit ipsum. Repellat numquam modi perferendis id. Laborum repellendus dolorum deserunt officiis!</p>
                            </div>
                        </li>

                        <li className="item">
                            <button className="accordion">What if i decline the delivery too late?</button>
                            <div className="panel">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus excepturi alias blanditiis ullam doloribus nesciunt, accusamus expedita illum distinctio aliquid quidem quo obcaecati a, dolores eius impedit sit ipsum. Repellat numquam modi perferendis id. Laborum repellendus dolorum deserunt officiis!</p>
                            </div>
                        </li>

                        <li className="item">
                            <button className="accordion">Why didn't i receive a confirmation mail?</button>
                            <div className="panel">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus excepturi alias blanditiis ullam doloribus nesciunt, accusamus expedita illum distinctio aliquid quidem quo obcaecati a, dolores eius impedit sit ipsum. Repellat numquam modi perferendis id. Laborum repellendus dolorum deserunt officiis!</p>
                            </div>
                        </li>

                    </ul>
                </div>

                <FormSupport setMessageSent={setMessageSent}/>

                {messageSent ? 
                <div className="message_sent_block">
                    <h3>Success!</h3>
                    <p>Your message <br/> has been sent successfully!</p>
                    <button>OK</button>
                </div> 
                : false}
                </div>
        </main>
    );
}

export default Support;
