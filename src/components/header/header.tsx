import './header.scss'
import sunIcon from './images/icon-sun.svg';
import { useState } from 'react';
import moonIcon from './images/icon-moon.svg'
import darkbc from './images/bg-desktop-dark.jpg'
import lightbc from './images/bg-desktop-light.jpg'




const Mainsection =()=>{
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = (): void => {
        setIsDarkMode(!isDarkMode);
      };
    return(
        <>
        <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}
      style={{
        backgroundImage: `url(${isDarkMode ? darkbc : lightbc})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: isDarkMode ? '#FFFFFF' : '#000000',
      }}>
        <div className='timed'>
        <h1>Todo</h1>
            <div className="toggle-dark-mode" onClick={toggleDarkMode}>
        <img src={isDarkMode ? moonIcon : sunIcon} alt="Toggle Dark Mode" />
      </div>
        </div>

        </div>
        </>
    )
}
export default Mainsection