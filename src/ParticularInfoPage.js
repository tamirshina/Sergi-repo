import React from 'react';
import particularPageImage from './04_particularImage.png';
import './Styles.css';
import HomeBtn from './HomeBtn';

function ParticularInfoPage ({backBtnLogic, homeBtnLogic}){

 
  return (
        <>
            <img src={particularPageImage} alt='backgroundImage' className='particularBackGround'></img>
            <button onClick={backBtnLogic} id='backBtn' className='backBtn'>back</button>
            <HomeBtn homeBtnLogic={homeBtnLogic} />
        
        </>

        );
    
}

export default ParticularInfoPage;
