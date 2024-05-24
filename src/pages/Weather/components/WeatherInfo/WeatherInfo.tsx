import { useEffect, useState } from "react";
import { WeatherButtonWrapper, WeatherCurrentIcon, WeatherCurrentIconTempWrapper, WeatherCurrentInfoWrapper, WeatherCurrentTemp, WeatherCurrentTempTitle, WeatherCurrentTempWrapper, WeatherErrorMessage, WeatherErrorTitle, WeatherErrorWrapper, WeatherInfoWrapper } from "./styles";
import { WeatherProps } from "./types";
import Button from "components/Button/Button";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { homeSliceActions, homeSliceSelectors } from "store/redux/home/homeSlice";

function WeatherInfo({ id, icon, temp, city, message, code }: WeatherProps) {

   const dispatch = useAppDispatch();
   const { data, status, error } = useAppSelector(homeSliceSelectors.weather);

   const deleteCard = () => {
      dispatch(homeSliceActions.deleteAllWeather())
   }

    return (
         <>
         <WeatherInfoWrapper>

            <WeatherCurrentInfoWrapper>

               <WeatherCurrentTempWrapper>
                  <WeatherCurrentTempTitle>{temp}°</WeatherCurrentTempTitle>
                  <WeatherCurrentTemp>{city}</WeatherCurrentTemp>
               </WeatherCurrentTempWrapper>

               <WeatherCurrentIconTempWrapper>
                  <WeatherCurrentIcon src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" />
                  <WeatherCurrentIcon src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" />
                  <WeatherCurrentIcon src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" />
               </WeatherCurrentIconTempWrapper>      

            </WeatherCurrentInfoWrapper>  

            <WeatherButtonWrapper>
               <Button 
                  name="Delete" 
                  background="none"
                  width="180px" 
                  height="60px"
                  borderRadius="30px"
                  border="2px solid white"
                  onButtonClick={deleteCard}     
            />   
       
            </WeatherButtonWrapper>
         </WeatherInfoWrapper>     

         
         </>            
                  

        
    )
  }
  
  export default WeatherInfo;