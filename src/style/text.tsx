import styled from 'styled-components';  

export const CContainer = styled.div`
background-color: #cbc2f6;
border-radius: 5px;
margin:20px auto 2px;
justify-content: center; 
width: 80vw; 
border-radius: 6px;
`

export const Title = styled.h1`
font-weight: 100;
border-radius: 5px;
text-align: center;
background-color: #cbc2f6;
`

export const Text = styled.p`
font-size: 25px;
text-align: center;
border-radius: 5px;
`
export const Form = styled.form`
text-align: center;
`;

export const Input = styled.input.attrs(props => ({
    type: "text",
  }))`
    color: #080103;
    font-size: 1em;
    border: 2px solid #6a3472;
    border-radius: 3px;
    text-align: center;
    margin: auto;
    border-radius: 5px;

  `;

export const Table = styled.table`
text-align: center; 
color: #1f050d;
border: 4px solid #801475;
background-color: rgb(237, 205, 245);
width: 1400px;
height: 1800px;
`;

export const Td = styled.td`
text-align: middle; 
color: #1f050d;
border: 4px  forestgreen;
width: 1580px;
height: 15px;
`;

export const Th = styled.th`
text-align: middle; 
border-bottom: 3px solid black;
width: 1580px;
height: 15px;
`;


export const Td1 = styled.td`
text-align: middle; 
font-weight: bold;
color: #1f050d;
border: 4px  forestgreen;
width: 1580px;
height: 30px;
font-size: 23px;

`;

export const Сaption =styled.caption`
text-align: middle; 
color: #4a0e20;
padding: 10px;
font-size: 35px;
`;