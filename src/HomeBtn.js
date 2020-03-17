/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from 'react';
import isLeftToRight from './IsLeftToRightFunc';
import './Styles.css';


function HomeBtn ({homeBtnLogic}) {


    useEffect(
        () => {
            document.getElementById('homeBtn').disabled = true;
            setTimeout(function(){ document.getElementById('homeBtn').disabled = false }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

    return (

        <button id='homeBtn' onClick={homeBtnLogic} className={isLeftToRight()?'homeBtn':'rightToLeftHomeBtn'} >Home</button>
    
    );
  }
  
  export default HomeBtn;