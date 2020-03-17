import React, {useContext} from 'react';
import LangContext from './SergiContext';
import './Styles.css';


function LanguageButtons () {

    const { switchLang, lang } = useContext(LangContext);

    function isLeftToRight() {
        
        if(lang==="english" || lang==="russian"){
            return true;
        }
        return false;
      }

    return (
        <div id='languagesBtnsDiv' className={isLeftToRight()?'leftToRightLangDiv':'languagesDiv'}>

        <button  onClick={() => {switchLang("hebrew");}} className={lang==='hebrew'?'activeBtn':null} >Hebrew</button>

        <button onClick={() => {switchLang("russian");}} className={lang==='russian'?'activeBtn':null}>Russian</button>

        <button onClick={() => {switchLang("english");}} className={lang==='english'?'activeBtn':null}>English</button>

        </div>
    
    );
  }
  
  export default LanguageButtons;