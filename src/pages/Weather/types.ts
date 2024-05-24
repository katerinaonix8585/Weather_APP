export interface WeatherProps {
    id: string,
    icon : string,    
    temp: number | null,
    city: string, 
    message : string 
    code?: string | undefined
}