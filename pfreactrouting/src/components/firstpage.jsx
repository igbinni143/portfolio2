import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-router-dom';
import EBpics from '../image/EBpic.jpg';
import "../components/css/firstpage.css";

export default function Firstpage() {
  
  const contact = {
    first: "Eunbin",
    last: "Ko",
    avatar: EBpics,
    instagram: "k_eunbin_0906",
    notes: "🦁 멋쟁이 사자처럼 12기 🦁",
    favorite: true,
  };

  const information = {
    pnumber: "010-3490-1735",
    email: "bin143@naver.com",
    photo: EBpics,
  };


  const [contactss, setContacts] = useState({
    telefone: false,
    email: false,
    github: false,
  });

  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleNavigate = (path) => {
    navigate(path); // 같은 창에서 경로로 이동
  };

  const handleNewWindow = (url) => {
    window.open(url, '_blank'); // 새로운 창을 열도록 설정
  };

  const toggleContact = (contactType) => {
    setContacts((prevState) => {
      const newState = {
        telefone: false,
        email: false,
        github: false,
      };
      newState[contactType] = !prevState[contactType];
      return newState;
    });

    

};
  
  return (
    <div id="WHOLE">
      <div id="contact">
        <div>
          <img key={contact.avatar} src={contact.avatar} alt="avatar" />
        </div>

        <div id="infomee">
          <h1>
            {contact.first || contact.last ? (
              <>
                {contact.first} {contact.last}
              </>
            ) : (
              <i>No Name</i>
            )}{" "}
            <Favorite contact={contact} />
          </h1>

          {contact.instagram && (
            <p id="bbbb">
              <a id="bbb"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.instagram.com/${contact.instagram}`}
              >
                @ {contact.instagram}

              </a>

              <a id = "bbb">
                <Button className="bb5" onClick={() => {
                prompt('맞춰보세요.');
                }}>
                  MBTI 
                </Button>
              </a>
            </p>
          )}

          {contact.notes && <p>{contact.notes}</p>}

          <div>
            <Form action="edit">
              <button type="button" className="buttonstudy" onClick={() => handleNewWindow('https://deutsch.hufs.ac.kr/deutsch/index.do')}>독일어과</button>
            </Form>

            <Form action="edit">
              <button type="button" className="buttonstudy" onClick={() => handleNewWindow('https://www.hufs.ac.kr/hufs/11233/subview.do')}>AI & 소프트웨어 학과</button>
            </Form>
            <div>
          </div>
        </div>
      </div>
    </div>


      <div id="geul">"아래 정보를 얻고 싶다면 아이콘을 눌러보세요"</div>
      <div className="pannel1">
        <div className="pannelsub" onClick={() => toggleContact('telefone')}>📱</div>
        <div className="pannelsub" onClick={() => toggleContact('email')}>📧</div>
        <div className="pannelsub" onClick={() => toggleContact('github')}>👩‍💻</div>
      </div>
      <div className='pannelll'>
        {contactss.telefone && ( <div className="pannelsubby"> →   T e l e f o n e :       0 1 0 - 3 4 9 0 - 1 7 3 5</div>)}
        {contactss.email && ( <div className="pannelsubby"> →   E m a i l :       b i n 1 4 3 @ n a v e r . c o m</div>)}
        {contactss.github && ( <div className="pannelsubby"> →   G i t - H u b :      i g b i n n i 1 4 3</div>)}
      </div>
      
      <div className='blankkk-box'></div>
      <div className='lastbutton'>
        <Form action="edit">
            <button type="button" className="lastbutton" onClick={() => handleNavigate('/language')}>다음 페이지</button>
        </Form>
      </div>
      
  </div>
  );
}

function Favorite({ contact }) {
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}

function Button({ onClick, children }) {
	return (
		<button onClick={onClick}>
			{children}
		</button>
	);
};