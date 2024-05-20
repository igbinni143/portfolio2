import React from 'react';
import Arpic from '../image/airb.jpg';

export default function Dream() {
    return (
        <div className="dream-container">
            <img className="dreampic" src={Arpic} alt="airballoon" />
            <div className="dreamtext">
                R=VD
                <div className="smt">Realization = Vivid dream</div>
                <div className="smt">이루어진다 = 생생하게 꿈꾸면</div>
            </div>
        </div>
    );
}
