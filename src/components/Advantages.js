import React from 'react';
import '../styles/css/advantages.css';

function Advantages() {
  return (
    <section>
        <div className="advantages_wrapper">
            <p className="advantages_header">Reasons to cooperate with us:</p>
            <ul className="advantages_list">
                <li>
                    <div className="list_num">15</div>
                    <div className="list_text">years of experience</div>
                </li>
                <li>
                    <div className="list_num">300</div>
                    <div className="list_text">own cars</div>
                </li>
                <li>
                    <div className="list_num">38</div>
                    <div className="list_text">delivery points</div>
                </li>
                <li>
                    <div className="list_num">150</div>
                    <div className="list_text">services points</div>
                </li>
            </ul>
        </div>
    </section>
  );
}

export default Advantages;
