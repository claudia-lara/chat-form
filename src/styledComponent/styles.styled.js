import styled from 'styled-components';


export const DivShadowBack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 25%;
    height: 100%;
    box-shadow: ${(props) => props.shadow || '0px 0px 11px -1px rgba(0,0,0,0.75)'};
    padding-bottom: 20px;
    background: ${(props) => props.bkground || '#F3F3F3'};
    border-radius: 7px;
`;
export const Result = styled.div`
    display: flex;    
    flex-direction: column;
    width: 35%;
    height: 100%; 
    box-shadow: ${(props) => props.shadow || '0px 0px 11px -1px rgba(0,0,0,0.75)'};
    padding-bottom: 20px;
    background: ${(props) => props.bkground || 'pink'};
    border-radius: 7px;
`;

export const Title = styled.h1`
    font-size: 21px;       
`;

export const Description = styled.p`
    font-size: 18px;   
    padding: ${(props) => props.padding || ' '}  
`;

export const Data = styled.p`
    font-size: 18px;   
    padding: ${(props) => props.padding || '5px'};
    margin: 0px;
`;

export const InputTxt = styled.input`
  font-size: 20px;
  padding: 5px;
  margin: 10px;
  width: 90%;
  height: 40px;  
  border-radius: 3px;
  outline: none;
  border: 0.7px solid gray;
`;

export const InputSelect = styled.select`
  font-size: 20px;
  padding: 5px;
  margin: 10px;
  width: 90%;
  height: 50px;  
  border-radius: 3px;
  outline: none;
  border: 0.7px solid gray;
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`

export const Button = styled.button`
  height: 50px;
  width: 100%;
  background: red;
  font-size: 20px;
  color: white;
`