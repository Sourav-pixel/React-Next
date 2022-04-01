import React from 'react';
import Contents from './Contents.js';
import './Second.css';
import dashboard from './assets/dashboard.png';
function Second() {
    return (
        <div className="second">
            <div className="content">     
            <h2 className="title">All-In-One Solution For Your Team</h2>
         
            <div className="nav-links">
                <u className="under">
    <a href="" target="blank" class="p-2" >Owners</a>
    <a href="" target="_blank"class="p-2">Technicians</a>
    <a href="" target="_blank"class="p-2">Office Team</a>

    </u>
  </div>

  <img src={dashboard} className="img" alt=""/>
            </div>

           

        </div>
    );
}

export default Second;