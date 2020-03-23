
import React, {useEffect, useRef} from 'react';
import homeImg from './assets/35-home.png';
import './Styles.css';


function HomeBtn ({homeBtnLogic}) {

    const homeButton = useRef(null);


    useEffect(
        () => {
            try {
                if(homeButton.current){
                    setTimeout(function(){ homeButton.current.style.visibility = 'visible' }, 3000);
                }
            } catch (error) {
                console.log(error)
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

    return (

        <img ref={homeButton} src={homeImg} alt='homeBtn' id='homeBtn' onClick={homeBtnLogic} className={'homeBtn'} />
    
    );
  }
  
  export default HomeBtn;