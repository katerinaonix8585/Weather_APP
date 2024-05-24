import WeatherInfo from "pages/Weather/components/WeatherInfo/WeatherInfo";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { homeSliceActions, homeSliceSelectors } from "store/redux/home/homeSlice";
import { ButtonWrapper, CardWrapper } from "./styles";
import Button from "components/Button/Button";


function Weather () {
    
    const dispatch = useAppDispatch();
    const { data, status, error } = useAppSelector(homeSliceSelectors.weather);

   const deleteAllCard = () => {
      dispatch(homeSliceActions.deleteAllWeather())
   }    
    
    const homeWeathers = data.filter(weather => weather.isWeather);

    return (
        <CardWrapper>        

                    {homeWeathers.map(weather => (
                        <WeatherInfo
                            id={weather.id}
                            icon={weather.icon}
                            temp={weather.temp}
                            city={weather.citySite}
                            message=""
                            code=""
                        />
                    ))} 
        {homeWeathers.length > 0 && 
        <ButtonWrapper>
                <Button 
                  name="Delete all cards" 
                  background="#3678B4"
                  border="none"                   
                  height="60px"                  
                  borderRadius="30px"
                  onButtonClick={deleteAllCard}     
            /> 
        </ButtonWrapper>}
                                     
        </CardWrapper>
        
    );
}

export default Weather;