// src/routes/language.jsx
import React from 'react';
import korea from '../image/korea.png'; 
import deutsch from '../image/germany.png'; 
import english from '../image/english.png'; 

export default function Language() {
    const korean = {
        lang: "Korean",
        pic: korea,
        percentClass: "progress1",
    };
    const german = {
        lang: "German",
        pic: deutsch,
        percentClass: "progress3",
    };
    const englishLang = {
        lang: "English",
        pic: english,
        percentClass: "progress2",
    };

    return (
      <div>
        <div className='sectionborder'>
        <div className='blank1-box'/>
        <div className='progress-content'>
            <h1>My Speech Ability</h1>
            <div className="skill-container">
                <div className='barname'>
                    <img className="flag" src={korean.pic || null} alt="korean" />
                    한국어 KOREAN
                </div>
                <div className="progress-bar">
                    <div className={korean.percentClass}></div>
                </div>
            </div>

            <div className="skill-container">
                <div className='barname'>
                    <img className="flag" src={englishLang.pic || null} alt="english" />
                    영어 ENGLISH
                </div>
                <div className="progress-bar">
                    <div className={englishLang.percentClass}></div>
                </div>
            </div>

            <div className="skill-container">
                <div className='barname'>
                    <img className="flag" src={german.pic || null} alt="german" />
                    독일어 GERMAN
                </div>
                <div className="progress-bar">
                    <div className={german.percentClass}></div>
                </div>
            </div>
            </div>
          </div>
          <div className='blankkk-box'/>
          <div className='mydream'>MY DREAM</div>
          
        <div className='blank1-box'/>

          <div className='Goal'>
            <div className="Goal1">
              <div className='sgoal'>새로운 것을 두려워하지 않는 </div>
              <div className="sgoal2"> 포기 하지 않고 계속 배워 나가는 </div>
              <div className="sgoal3">  사람들과 소통하는 </div>
            </div>
          <div className="Goal2">
            <div className="goal23">   개 발 자  </div>
          </div>
        </div>
      </div>
    );
}
