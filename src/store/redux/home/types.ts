// export interface WeatherError {
//     cod: number;
//     message: string;
// }

interface WeatherData {
  id: string;
  icon: string;
  citySite: string;
  temp: number | null;
  message: string;
  cod: number | null;
  isHome: boolean;
  isWeather: boolean
}
  
export interface HomeSliceState {
    data: WeatherData[];
    status: 'default' | 'loading' | 'success' | 'error';
    error: any;
  }
  


 