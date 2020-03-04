/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Styles.css';


function HomeBtn ({homeBtnLogic}) {

    return (

        <button onClick={homeBtnLogic} className='homeBtn'>Home</button>
    
    );
  }
  
  export default HomeBtn;