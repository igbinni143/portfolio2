import React from 'react';
import EBpic from '../image/EBpic.jpg'; 

export default function Infome() {
    const [contacttss, setContacts] = useState({
        telefone: false,
        email: false,
        github: false,
      });

      const toggleContact = (contactttt) => {
        setContacts((prevState) => ({
          telefone: contactttt === 'telefone' ? !prevState.telefone : false,
          email: contactttt === 'email' ? !prevState.email : false,
          github: contactttt === 'github' ? !prevState.github : false,
    }));
  };

    return (
    <div>    
      <div className="blank-box" />

      <div className='FIRST'>
        <div className="first-box">
          <img className="me" src={EBpic} alt="eunbinpic"/>
        </div>

        <div className="second-box">
          <div className="nameinfo"> Eunbin Ko
            <div className="subnameinfo">  &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🦁&nbsp;멋쟁이사자처럼 12기 프론트엔드 </div>
          </div>
          <br></br>
          <br></br>
          <div className="subnameinfo2">&nbsp;&nbsp; 🏫 &nbsp;&nbsp;한국외국어대학교 HUFS </div>
          <div className="subnameinfo2">&nbsp;&nbsp;  🇩🇪 &nbsp;&nbsp; 독일어학과 DEUTSCH </div>
          <div className="subnameinfo2">&nbsp;&nbsp; 🖥️ &nbsp;&nbsp; AI & SOFTWARE &nbsp;소프트웨어 학과 </div>
          <br></br>
          <div className='clicksub'> (( C L I C K &nbsp;&nbsp; T H E &nbsp;&nbsp; I C O N ))</div>
          <div className='pannel'>
            <div className='pannelsub' onClick={() => toggleContact('telefone')}>📱</div>
            <div className='pannelsub' onClick={() => toggleContact('email')}>📧</div>
            <div className='pannelsub' onClick={() => toggleContact('github')}>👩‍💻</div>
          </div>

          <div className='pannelll'>
            {contacttss.telefone && (
              <div className='pannelsubby'> &nbsp;&nbsp;T e l e f o n e : &nbsp;&nbsp;&nbsp;&nbsp;{연락처[0]} </div>
            )}

            {contacttss.email && (
              <div className='pannelsubby'> &nbsp;&nbsp;E m a i l : &nbsp;&nbsp;&nbsp;&nbsp;{연락처[1]}</div>
            )}

            {contacttss.github && (
              <div className='pannelsubby'> &nbsp;&nbsp;G i t - H u b &nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{연락처[2]}</div>
            )}
          </div>
        </div>
      </div>
      </div>
    );
}
