import { useEffect, useState } from "react";
import { SpinnerContainer, WeatherButtonComponent, WeatherInputComponent, WeatherSearchWrapper } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import Spinner from "components/Spinner/Spinner";
import { homeSliceActions, homeSliceSelectors } from "store/redux/home/homeSlice";

function Home() {
    const [city, setCity] = useState<string>('');

    const getCity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    const dispatch = useAppDispatch();
    const { data, status, error } = useAppSelector(homeSliceSelectors.weather);

    const getWeather = () => {
        dispatch(homeSliceActions.getWeather(city));
    };

    const homeWeathers = data.filter(weather => weather.isHome);

    useEffect(() => {
        if (error) {
          alert('Error response')
        }
      }, [error])         


    return (
        <>
            <WeatherSearchWrapper>
                <WeatherInputComponent name="city" placeholder="Enter city" onInput={getCity}></WeatherInputComponent>
                <WeatherButtonComponent onClick={getWeather}>Search</WeatherButtonComponent>
            </WeatherSearchWrapper>
            {status === "loading" ? (
                <SpinnerContainer>
                    <Spinner />
                </SpinnerContainer>
            ) : (
                <>
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
                    {status === "error" && (
                        <WeatherInfo
                            id={error.id}
                            icon=""
                            temp={null}
                            city=""
                            message={error?.message || ''}
                            code={error?.cod?.toString() || ''}
                        />
                    )}
                </>
            )}
        </>
    );
}

export default Home;
