import React, { useState, useEffect, useContext } from 'react';
import {Context} from '../App';
import FinalForm from './FinalForm';

function Treaty( { finalFormState, setFinalFormState } ) {
    const {myData} = useContext(Context);
    const [checkboxState, setCheckboxState] = useState(false);

    const showBtnState = () => {
        let checkbox = document.getElementById('treaty_checkbox');

        if(!checkbox) return

        checkbox.addEventListener('click', () => {
            if(document.querySelector('.send_request').hasAttribute('disabled')) {
                document.querySelector('.send_request').removeAttribute('disabled');

                document.querySelector('.send_request').addEventListener('click', () => setFinalFormState(true))
            } else {
                document.querySelector('.send_request').setAttribute('disabled', null);

                document.querySelector('.send_request').addEventListener('click', () => setFinalFormState(true))
            } 

            setCheckboxState(prev => !prev)
        })
    }

    useEffect(() => {
        showBtnState()
    }, [])

    return (
        <>
        <div className="treaty_wrapper" id="treaty">
              <h2>Treaty</h2>

              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore iste blanditiis reprehenderit ut eum magnam, earum adipisci? Quos nihil voluptatum assumenda tempore, sit iste tempora quia iusto, velit corrupti a rem suscipit veritatis quod quo non doloribus ducimus, eius sapiente adipisci illo! Officia distinctio placeat tempora est vitae a, similique culpa voluptates reiciendis architecto suscipit quasi beatae exercitationem quis molestiae tenetur incidunt qui eaque voluptatum atque consequatur! Suscipit, adipisci optio maxime fugit alias perferendis a earum! Quam illo culpa quaerat voluptates quis ullam recusandae totam, sed consequatur earum numquam alias. Consequatur, fugiat sunt nihil voluptatem voluptate alias dicta accusamus.</p>

              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt dignissimos ex optio reprehenderit, culpa perspiciatis quo itaque, ipsa provident obcaecati aliquam molestiae aperiam facere repudiandae fugit iusto quae blanditiis! Dicta eligendi corrupti sint deleniti, voluptatem suscipit, reprehenderit laudantium possimus commodi a incidunt. Porro architecto veritatis ratione ad quaerat tempore neque ab delectus maiores cumque alias voluptatibus perferendis quidem optio ipsum tempora, odit veniam fuga consequatur laborum quos labore est sit. Obcaecati saepe dolores soluta corporis quam aut voluptates pariatur ut rerum harum, error nemo consequatur voluptas eligendi incidunt! Iusto vero provident culpa dignissimos esse nemo! Pariatur exercitationem eligendi dolores.</p>

              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt dignissimos ex optio reprehenderit, culpa perspiciatis quo itaque, ipsa provident obcaecati aliquam molestiae aperiam facere repudiandae fugit iusto quae blanditiis! Dicta eligendi corrupti sint deleniti, voluptatem suscipit, reprehenderit laudantium possimus commodi a incidunt. Porro architecto veritatis ratione ad quaerat tempore neque ab delectus maiores cumque alias voluptatibus perferendis quidem optio ipsum tempora, odit veniam fuga consequatur laborum quos labore est sit. Obcaecati saepe dolores soluta corporis quam aut voluptates pariatur ut rerum harum, error nemo consequatur voluptas eligendi incidunt! Iusto vero provident culpa dignissimos esse nemo! Pariatur exercitationem eligendi dolores.</p>

              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt dignissimos ex optio reprehenderit, culpa perspiciatis quo itaque, ipsa provident obcaecati aliquam molestiae aperiam facere repudiandae fugit iusto quae blanditiis! Dicta eligendi corrupti sint deleniti, voluptatem suscipit, reprehenderit laudantium possimus commodi a incidunt. Porro architecto veritatis ratione ad quaerat tempore neque ab delectus maiores cumque alias voluptatibus perferendis quidem optio ipsum tempora, odit veniam fuga consequatur laborum quos labore est sit. Obcaecati saepe dolores soluta corporis quam aut voluptates pariatur ut rerum harum, error nemo consequatur voluptas eligendi incidunt! Iusto vero provident culpa dignissimos esse nemo! Pariatur exercitationem eligendi dolores.</p>

              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt dignissimos ex optio reprehenderit, culpa perspiciatis quo itaque, ipsa provident obcaecati aliquam molestiae aperiam facere repudiandae fugit iusto quae blanditiis! Dicta eligendi corrupti sint deleniti, voluptatem suscipit, reprehenderit laudantium possimus commodi a incidunt. Porro architecto veritatis ratione ad quaerat tempore neque ab delectus maiores cumque alias voluptatibus perferendis quidem optio ipsum tempora, odit veniam fuga consequatur laborum quos labore est sit. Obcaecati saepe dolores soluta corporis quam aut voluptates pariatur ut rerum harum, error nemo consequatur voluptas eligendi incidunt! Iusto vero provident culpa dignissimos esse nemo! Pariatur exercitationem eligendi dolores.</p>

              {myData ?
              <div className="confirmation_wrapper">
                <div>
                    <label htmlFor="terms_checkbox">I agree with terms of the treaty</label>
                    <input type="checkbox" id="treaty_checkbox" name="terms_checkbox"></input>
                </div>
                <div>
                    <button className="send_request" type="button" disabled onClick={() => setFinalFormState(prev => !prev)}>Send request</button>
                </div>
              </div>
              : null}

              <hr />
              
        </div>

        {checkboxState && finalFormState ? <FinalForm /> : null} 
        </>
    );
}

export default Treaty;
