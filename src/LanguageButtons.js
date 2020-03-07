import React, {useContext} from 'react';
import LangContext from './SergiContext';
import './Styles.css';


function LanguageButtons ({setLanguageToUse}) {

    const { switchLang } = useContext(LangContext);


    return (
        <div id= 'languagesBtnsDiv' className='languagesDiv'>

        <button onClick={() => {switchLang("hebrew");}} >Hebrew</button>

        <button onClick={() => {switchLang("russian");}} id='russian'>Russian</button>

        <button onClick={() => {switchLang("english");}} id='english'>English</button>

        </div>
    
    );
  }
  
  export default LanguageButtons;