import React, { useContext, useState } from 'react';
import axios from 'axios';
import { setCookie } from './cookie'; 
import './css/login.css';
import Nav from '../routes/nav';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../store/authContext';
import useStore from '../../store/store';

const apiCall = axios.create({
  baseURL: 'https://hufs-mutsa-12th.store/',
});

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await apiCall.post('/dj/registration/', {
        username:username,
        password:password,
      });
      console.log('Signup successful:', response.data);
      alert('가입 성공');
    } catch (error) {
      console.error('Signup error:', error);
      alert('가입 실패, 다시 체크하세요.');
    }
  };

  return (
    <div className="auth-box">
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const isLogin = useStore((state)=>state.isLogin);
  const login = useStore((state) => state.login)

  const handleLogin = async () => {
    try {
      const response = await apiCall.post('/dj/login/', {
        username:username,
        password:password,
    });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      sessionStorage.setItem('token', response.data.token);
      setCookie('token', response.data.token, { maxAge: 604800 }); // 7일 동안 유효한 쿠키 설정
      alert('로그인 성공');
      login();
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      alert('로그인 실패, 다시 체크하세요.');
    }
  };

  return (
    <div className="auth-box">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}


function Loginapp() {
  const isLogin = useStore((state)=>state.isLogin);
  const login = useStore((state) => state.login)
  return (
    <>
    <Nav/>
    <div className="loginapp-container">
      <div className="toggle-buttons">
        <button onClick={() => login()} className={!isLogin ? 'active' : ''}>Login</button>
        <button onClick={() => login()} className={isLogin ? 'active' : ''}>Signup</button>
      </div>
      {isLogin ? <Signup /> : <Login />}
    </div>
    </>
  );
}
export default Loginapp;
