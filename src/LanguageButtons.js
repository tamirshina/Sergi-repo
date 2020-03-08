import React, {useContext} from 'react';
import LangContext from './SergiContext';
import './Styles.css';


function LanguageButtons () {

    const { switchLang, lang } = useContext(LangContext);

    function isLeftToRight() {

        console.log(lang);
        
        if(lang==="english" || lang==="russian"){
            return true;
        }
        return false;
        
      }


    return (
        <div id='languagesBtnsDiv' className={isLeftToRight()?'leftToRightLangDiv':'languagesDiv'}>

        <button onClick={() => {switchLang("hebrew");}} >Hebrew</button>

        <button onClick={() => {switchLang("russian");}} id='russian'>Russian</button>

        <button onClick={() => {switchLang("english");}} id='english'>English</button>

        </div>
    
    );
  }
  
  export default LanguageButtons;