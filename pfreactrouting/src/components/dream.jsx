import React, { useState } from 'react';
import Arpic from '../image/airb.jpg';
import "../components/css/dream.css";

export default function Dream() {
        
    const [name, setName] = useState("");

function handlechange(e){
    setName(e.target.value)
    console.log(name);
}
    return (
        <div>
            <div className="dream-container">
                <img className="dreampic" src={Arpic} alt="airballoon" />
                <div className="dreamtext">
                    R=VD
                    <div className="smt">Realization = Vivid dream</div>
                    <div className="smt">이루어진다 = 생생하게 꿈꾸면</div>
                </div>
            </div>
            <div>
                <input value={name} onChange={handlechange}/>
            </div>
        </div>
    );
}
