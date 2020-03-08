/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import isLeftToRight from './IsLeftToRightFunc';
import './Styles.css';


function HomeBtn ({homeBtnLogic}) {

    return (

        <button onClick={homeBtnLogic} className={isLeftToRight()?'homeBtn':'rightToLeftHomeBtn'}>Home</button>
    
    );
  }
  
  export default HomeBtn;