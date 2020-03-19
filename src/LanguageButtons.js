import React, {useContext} from 'react';
import LangContext from './SergiContext';
import englishBtn from './33-ENG.png';
import hebrewBtn from './34-HEB.png';
import russianBtn from './36-RUS.png';
import './Styles.css';


function LanguageButtons () {

    const { switchLang } = useContext(LangContext);

    return (
        <div id='languagesBtnsDiv' className='languagesDiv'>

        <img src={hebrewBtn} alt='hebrewBtn' onClick={() => {switchLang("hebrew");}} className='addMargin'/>

        <img src={russianBtn} alt='russianBtn' onClick={() => {switchLang("russian");}} className='addMargin'/>

        <img src={englishBtn} alt='englishBtn' onClick={() => {switchLang("english");}} className='addMargin'/>

        </div>
    
    );
  }
  
  export default LanguageButtons;