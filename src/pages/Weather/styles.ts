import styled from "@emotion/styled";


export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;  
  align-items: center;  
  background-size: cover;
`

export const WeatherTitle = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: 700;
  font-style: initial;
`

export const WeatherHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 20px;
  background-color: rgba(18, 45, 77, 0.5);
  color: white;
`

export const WeatherInputComponent = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid white;
  border-radius: 40px;
  font-size: 20px;
  color: white;
  background-color: rgba(255, 255, 255, 0.5);
  
  &::placeholder {
    color: white;
    font-size: 20px;
  }
`

export const WeatherButtonComponent = styled.button`
  width: 40%;
  height: 50px ;
  outline: none;
  border: none;
  border-radius: 50px;  
  background-color: #3678B4; 
  color: white;
  font-size: 20px;  
  cursor: pointer;
`;

export const CardWrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: top;

`

export const ButtonWrapper = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: top;
 
`


