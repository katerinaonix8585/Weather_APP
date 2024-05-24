import styled from "@emotion/styled";

export const WeatherInfoWrapper = styled.div`
  width: 709px;
  display: flex;
  flex-direction: column;     
  background-color: #2F486F9E;
  border-radius: 10px;
  margin-bottom: 10px;
  
`

export const WeatherCurrentInfoWrapper = styled.div`
  width: 709px;
  display: flex;
  flex-direction: row;
  gap: 100px;    
  border-radius: 10px;

`
export const WeatherCurrentTempWrapper = styled.div`
width: 223px;
display: flex;
flex-direction: column;
justify-content: space-around;
padding-top: 20px;
padding-left: 50px;
align-items: start;
gap: 10px
`

export const WeatherCurrentIconTempWrapper = styled.div`
width: 223px;
display: flex;
flex-direction: row;
justify-content: space-around;
padding: 20px;
align-items: start;
gap: 5px
`

export const WeatherCurrentIcon = styled.img`
  width: 100px;
  height: 100px;
`

export const WeatherCurrentTempTitle = styled.h2`
  width: 50%;
  font-size: 57px;
  font-style: initial;
  color: white;
` 

export const WeatherCurrentTemp = styled.p`
  width: 50%;  
  font-size: 24px;
  font-style: initial;
  font-weight: 300;
  color: white;
  white-space: nowrap;
`

export const WeatherButtonWrapper = styled.div`
  width: 709px;
  display: flex;
  justify-content: center;  
  padding: 30px;
  gap: 100px;    
  border-radius: 10px;
`
export const WeatherErrorWrapper = styled.div`
  margin-top: 50px;
  width: 709px;
  display: flex;
  background-color: #2F486F9E;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;  
  gap: 20px;
  padding: 20px;
  text-align: center;
  
`

export const WeatherErrorTitle = styled.h2`
  width: 50%;
  font-size: 47px;
  font-style: initial;
  color: #F35E5E;
` 

export const WeatherErrorMessage = styled.p`
  width: 50%;  
  font-size: 18px;
  font-style: initial;
  font-weight: 300;
  color: white;  
`;


