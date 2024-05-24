import { useEffect, useState } from "react";
import { WeatherButtonWrapper, WeatherCurrentIcon, WeatherCurrentIconTempWrapper, WeatherCurrentInfoWrapper, WeatherCurrentTemp, WeatherCurrentTempTitle, WeatherCurrentTempWrapper, WeatherErrorMessage, WeatherErrorTitle, WeatherErrorWrapper, WeatherInfoWrapper } from "./styles";
import { WeatherProps } from "./types";
import Button from "components/Button/Button";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { homeSliceActions, homeSliceSelectors } from "store/redux/home/homeSlice";

function WeatherInfo({ id, icon, temp, city, message, code }: WeatherProps) {

   const [isInfo, setIsInfo] = useState<boolean>(false);
   const [isError, setIsError] = useState<boolean>(false);

  

   useEffect(() => {
      
      if (temp !== null) {
          setIsInfo(true); 
          setIsError(false);
      } else {
          setIsInfo(false);
          setIsError(true); 
      }
  }, [temp]);

   const dispatch = useAppDispatch();
   const { data, status, error } = useAppSelector(homeSliceSelectors.weather);

   const saveInfo = () => {
        dispatch(homeSliceActions.saveWeather(id))
    }

   const deleteInfo = () => {
      dispatch(homeSliceActions.deleteHomeWeather(id))
  }

    return (
         <>
         {isInfo && (
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
                  name="Save" 
                  background="none"
                  width="180px" 
                  height="60px"
                  borderRadius="30px"                  
                  onButtonClick={saveInfo}     
            />
   
               <Button 
                  name="Delete" 
                  background="none"
                  width="180px" 
                  height="60px"
                  borderRadius="30px"                  
                  onButtonClick={deleteInfo}     
            />   
       
            </WeatherButtonWrapper>
         </WeatherInfoWrapper>
 
         )}

         {isError && (
         <WeatherErrorWrapper> 

                <WeatherErrorTitle>{code} API Error</WeatherErrorTitle>           
                <WeatherErrorMessage>{message}</WeatherErrorMessage>
               
               <WeatherButtonWrapper>            
               <Button 
                  name="Delete" 
                  background="none"
                  width="180px" 
                  height="60px"
                  borderRadius="30px"
                  onButtonClick={deleteInfo}     
               />                 
               </WeatherButtonWrapper> 
    
         </WeatherErrorWrapper> 
         
          )}
         </>
          

            
                  

        
    )
  }
  
  export default WeatherInfo;