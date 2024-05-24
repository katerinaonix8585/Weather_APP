import { createAppSlice } from "store/createAppSlice";
import { HomeSliceState } from "./types";
import { v4 } from "uuid";
import { PayloadAction } from "@reduxjs/toolkit";
import { error } from "console";

const homeInitialState: HomeSliceState = {
    data: [],
    status: 'default',
    error: null
}

const APP_ID = '2afde0e0bff5cf56123ac1d3cfe03658';  

export const homeSlice = createAppSlice({
    name: "home",
    initialState: homeInitialState,
    reducers: create => ({
        getWeather: create.asyncThunk(async (city: string, thunkApi) => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}&units=metric`);
            const result = await response.json();       
              
            if (!response.ok) {
                return thunkApi.rejectWithValue(result);
            } else {
                return result;
            }
        }, {
            pending: (state: HomeSliceState) => {
                state.status = 'loading';          
                state.error = null;
            },
            fulfilled: (state: HomeSliceState, action: any) => {
                state.status = 'success';
                state.data = [...state.data, {
                    id: v4(),
                    icon: action.payload.weather[0].icon,             
                    citySite: action.payload.name, 
                    temp: action.payload.main.temp,
                    message: "",
                    cod: null,
                    isHome: true,
                    isWeather: false,
                }];
            },
            rejected: (state: HomeSliceState, action: any) => {
                state.status = 'error';
                state.error = action.payload;
                if (action.payload.cod !== 400) {
                    state.data = [...state.data, {
                        id: v4(),
                        icon: "",             
                        citySite: action.payload.city, 
                        temp: null,
                        message: action.payload.message,
                        cod: action.payload.cod,
                        isHome: true,
                        isWeather: false,
                    }];
                }                
            }
        }), 
        saveWeather: create.reducer((state: HomeSliceState, action: PayloadAction<string>) => {
          state.data = state.data.map(weather => {
              if (weather.id === action.payload) {
                  return { ...weather, isHome: false, isWeather: true };
              }
              return weather;
          });
      }),
      deleteHomeWeather: create.reducer((state: HomeSliceState, action: PayloadAction<string>) => {
          state.data = state.data.map(weather => {
              if (weather.id === action.payload) {
                  return { ...weather, isHome: false };
              }
              return weather;
          });
      }),
      deleteAllWeather: create.reducer((state: HomeSliceState) => {
          state.data = state.data.map(weather => ({ ...weather, isWeather: false }));
      }),
      deleteWeather: create.reducer((state: HomeSliceState, action: PayloadAction<string>) => {
          state.data = state.data.map(weather => {
              if (weather.id === action.payload) {
                  return { ...weather, isWeather: false };
              }
              return weather;
          });
      }),
  }),
  selectors: {
      weather: state => state
  }
});

export const homeSliceActions = homeSlice.actions;
export const homeSliceSelectors = homeSlice.selectors;

