import React from 'react';
import '../Styles/Header.css'
interface WeatherHeaderProps{
    title: string;
}
const Header:React.FC<WeatherHeaderProps>=({title})=>{
    return(
        <header className='headerContainer'>
        <h1>
        {title}
        </h1>
        </header>
    )
}
export default Header;