import React from 'react';
import logo from '../images/logo.png';
import '../styles/css/footer.css'

function Footer() {
  return (
    <footer>
        <div className="footer_wrapper">
            <ul>
                <li className="footer_colon">
                    <a href="/"><img src={logo} alt="logo" /></a>
                </li>
                <li className="footer_colon">
                    <div className="footer_info">
                        <span>Administrative office:</span> <br/>
                        <span>Republic of Belarus, 220015, Minsk, <br/>
                        Pobeditelej avenue, 123</span> <br/>
                        <span>+375 (17) 999-99-99</span>
                    </div>
                </li>
            </ul>
            
            <div className="btn_up_wrapper">
                <span className="up_content">
                    <a href="#top">TOP</a>
                </span>
            </div>
                       
        </div>
    </footer>
  );
}

export default Footer;
