import React, { useState } from 'react';
import aboutImg from '../images/aboutImg.jpg';
import Treaty from './Treaty';
import '../styles/css/services.css'

function Services() {
    const [finalFormState, setFinalFormState] = useState(false);

    return (
        <main>
              <div className="service_wrapper">
                  <h2>Delivery is simple</h2>
                  <div className="steps_wrapper">

                      <div className="step">
                          <div className="step_wrapper">
                              <h3>Step 1</h3>
                              <h4>Calculate price</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint atque dignissimos alias nam officiis ex eaque ut? Ipsa sunt quae unde? Fuga magni quae necessitatibus ad reprehenderit numquam officiis illum.</p>
                          </div>
                      </div>

                      <div className="step">
                          <div className="step_wrapper">
                                <h3>Step 2</h3>
                                <h4>Sign a treaty</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint atque dignissimos alias nam officiis ex eaque ut? Ipsa sunt quae unde? Fuga magni quae necessitatibus ad reprehenderit numquam officiis illum.</p>
                          </div>
                      </div>

                      <div className="step">
                          <div className="step_wrapper">
                                <h3>Step 3</h3>
                                <h4>Send a request</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint atque dignissimos alias nam officiis ex eaque ut? Ipsa sunt quae unde? Fuga magni quae necessitatibus ad reprehenderit numquam officiis illum.</p>
                            </div>
                      </div>

                      <hr />

                    </div>

                <Treaty finalFormState={finalFormState} setFinalFormState={setFinalFormState} />
              </div>
        </main>
    );
}

export default Services;
