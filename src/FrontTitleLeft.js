import React, { useContext } from 'react';
import headerUnderline from './14_Headerunderline.png';
import LangContext from './SergiContext';
import './Styles.css';


function FrontTitleft (){

    const lang = useContext(LangContext).lang;

    return (

        <div className='leftTitleFront'>
            <h1 className='titleFont frontPageEnTitle'>{lang==="english"?'Sergi Courtyard':'реформирует'}</h1>
            <img alt='underline' src={headerUnderline}/>
        </div>
            );

}
export default FrontTitleft;