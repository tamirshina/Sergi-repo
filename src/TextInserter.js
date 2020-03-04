import React, { useState } from 'react';
import scrollBtn from './02_Continue-text-button-small.png';
import './Styles.css';

function TextInserter (props){

     const [parsedTextToShow] = useState(JSON.parse(props.textToShow).value);

 
  return (
      <div className='textBoxCss'>
            <p className='textCss' id="openingTextBox"> 
                {parsedTextToShow}
            </p>
            <img onClick={()=>document.getElementById('openingTextBox').scroll(0,200)} id="scrollBtnPng" src={scrollBtn} alt="scrollBtn" className='scrollBtnCss'/>
        </div>
        );
}

export default TextInserter;
