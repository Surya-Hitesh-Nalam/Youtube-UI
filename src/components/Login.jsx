import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoginComponent = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <h2>Login</h2>
        <form>
          <UserBox>
            <input type="text" name="username" required />
            <label>Username</label>
          </UserBox>
          <UserBox>
            <input type="password" name="password" required />
            <label>Password</label>
          </UserBox>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </LoginBox>
      <BackgroundAnimation />
    </LoginContainer>
  );
};

export default LoginComponent;

// Styled Components
const LoginContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  overflow: hidden;
`;

const LoginBox = styled.div`
  position: relative;
  padding: 40px;
  width: 300px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  text-align: center;
  color: #fff;

  h2 {
    margin: 0 0 20px;
    padding: 0;
    color: #fff;
  }
`;

const UserBox = styled.div`
  position: relative;
  margin-bottom: 30px;

  input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    left: 0;
    color: #e91e63;
    font-size: 12px;
  }
`;

const SubmitButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  transition: 0.5s;
  border: 1px solid #fff;
  border-radius: 5px;

  &:hover {
    background: #e91e63;
    color: #fff;
  }
`;

const animate = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(50%, 50%);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,0,0,0.4), transparent 60%);
    animation: ${animate} 10s linear infinite;
  }
`;
