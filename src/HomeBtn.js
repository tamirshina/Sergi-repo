/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from 'react';
import homeImg from './35-home.png';
import './Styles.css';


function HomeBtn ({homeBtnLogic}) {


    useEffect(
        () => {
            if(document.getElementById('homeBtn')){
                setTimeout(function(){ document.getElementById('homeBtn').style.visibility = 'visible' }, 3000);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

    return (

        <img src={homeImg} id='homeBtn' onClick={homeBtnLogic} className={'homeBtn'} />
    
    );
  }
  
  export default HomeBtn;