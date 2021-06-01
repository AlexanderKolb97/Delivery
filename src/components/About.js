import React from 'react';
import aboutImg from '../images/aboutImg.jpg';
import timeImg from '../images/time.png';
import supportImg from '../images/support.png';
import moneyImg from '../images/money.png';
import '../styles/css/about.css'

function About() {
  return (
    <main>
        <div className="about_wrapper">
              <div className="block_intro">
                    <div className="intro_text">
                        <h2>About our team</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rem?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro quia officia necessitatibus facere fuga cum, numquam consequuntur consequatur quaerat sit corrupti ipsa incidunt eos soluta, odit asperiores eligendi! Et libero officiis quos, aperiam, dicta autem temporibus voluptatem iusto similique exercitationem illo eligendi iste minima veniam atque accusantium molestias sapiente!</p>  
                    </div>
                    <div className="intro_img">
                        <img src={aboutImg} />
                    </div>
              </div>
                    

                <div className="block_info">

                  <div className="block">
                      <div className="block_heading">
                          <h3>Who we are</h3>
                      </div>
                    <div className="block_text">
                        <h5>As the number-one location platform, we're committed to moving the world forward.</h5>
                        <p>With over 9,000 employees across 56 countries, we are a global company serving   thousands of customers at scale. Our legacy is built on mapping technology, with our maps used in over 150 million vehicles.</p>
                        <p>Our initial goal of digitizing mapping and pioneering in-car navigation systems goes beyond vehicles and can be seen across multiple applications and industries.</p>
                    </div>
                  </div>

                  <div className="block">
                      <div className="block_heading">
                          <h3>What we do</h3>
                      </div>
                      <div className="block_text">
                          <h5>We use location data to improve how businesses and cities run – at a fraction of the energy and environmental costs.</h5>
                          <p>By collecting data from over 100,000 sources and with 80 billion API calls per month, we’re able to provide the freshest, most accurate digital representation of the world.</p>
                          <p>Whether it’s delivering goods when they’re needed, managing your warehouse well with precise location tracking on all your assets or providing your dispatchers with live road updates to find the fastest routes, it can all be done on our end-to-end platform.</p>
                      </div>
                  </div>

                 <div className="block">
                      <div className="block_heading">
                          <h3>Why we do it</h3>
                      </div>
                      <div className="block_text">
                          <h5>Our aspiration is to enable an autonomous world for everyone.</h5>
                          <p>We believe a world enabled and enhanced by location technology will be safer, more efficient and cleaner. In the new autonomous world, people will enjoy the new future of mobility while cities and governments will improve infrastructures in cost-effective ways.</p>
                      </div>
                  </div>

                  <div className="block">
                      <div className="block_heading">
                          <h3>What makes us different</h3>
                      </div>
                      <div className="block_text">
                          <h5>Our leading, end-to-end platform – it’s where the best tools, data and minds come together in an open, secure environment to maximize the value of their data.</h5>
                          <p>You can bring your own data to transform and integrate with our data or third-party data to service your location-centric innovation and monetization needs. Privacy and data control are also one of our highest priorities – we’re compliant with applicable data.</p>
                      </div>
                  </div>
                </div>

                <div className="block_benefits">
                    <div className="benefit">
                        <img src={timeImg} alt="time-icon" />
                        <h3>Real time traffic</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, assumenda!</p>
                    </div>
                    <div className="benefit">
                        <img src={supportImg} alt="support-icon" />
                        <h3>Dedicated support</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, assumenda!</p>
                    </div>
                    <div className="benefit">
                        <img src={moneyImg} alt="money-icon" />
                        <h3>Use and pay later</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, assumenda!</p>
                    </div>
                </div>
        </div>
    </main>
  );
}

export default About;
