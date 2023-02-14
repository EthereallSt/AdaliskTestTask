import styled from 'styled-components';  

export const Button = styled.button`
transition: 0.8s;
font-size: 20px;
size: 10px;
max-width: 80px;
min-height: 30px;
width: 70%;
align-items: center;
justify-content: center;
padding: 5px 10px;
font-family: 'primary';
color: #f1f1f6;
border: 1px solid ;
background-color: blueviolet;
transition: 0.3s ease;

&:hover {
  transform: scale(1.05);
}
background: #be7ed6;
border-radius: 2px;
border: 1px;
color: #ffffff;

&:active {
  box-shadow: #071704;
  background-color : #631181;
}
`;

export const Button1 = styled.button`
background-color: #70b6a5;
color: #f1f1f6;



`;