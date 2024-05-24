import styled from "@emotion/styled";
import { WeatherBack } from "assets";

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;  
  align-items: center;
  background-image: url(${WeatherBack});
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
export const WeatherSearchWrapper = styled.div`
  display: flex;
  justify-content: center;  
  margin-top: 150px;
  padding: 20px;
  width: 710px;
  height: 100%;
  gap: 10px;

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

export const SpinnerContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex: 1;
`

