import React, {useEffect} from 'react';
import sergiPageImage from './04_particularImage.png';
import ellaPageImage from './cat1.jpg';
import knownPageImage from './cat2.jpeg';
import waterPageImage from './cat3.jpeg';
import ogPageImage from './cat4.jpeg';
import isLeftToRight from './IsLeftToRightFunc';
import {timer, removeTimer} from './TimerHundler';
import TextInserter from './TextInserterParticular';
import './Styles.css';
import HomeBtn from './HomeBtn';

function ParticularInfoPage ({backBtnLogic, homeBtnLogic, typeOfParticularInfo}){
  
  useEffect(
        () => {
        timer(homeBtnLogic); 
        return () => { // Return callback to run on unmount.
        removeTimer();
          };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        function pictureToRender (){

          switch(typeOfParticularInfo){

            case "sergi":
                return sergiPageImage;
            case "ella":
                return ellaPageImage;            
            case "known":
                return knownPageImage; 
            case "ogFinger":
                return ogPageImage; 
            case "waterHoles":
                return waterPageImage; 
            default:
              return sergiPageImage;
        }
      }
 
  return (
        <>
            <img src={pictureToRender()} alt='backgroundImage' className='particularBackGround'></img>
            <button onClick={backBtnLogic} id='backBtn' className={isLeftToRight()?'backBtn':'backBtnRightToLeft'}>back</button>
            <HomeBtn homeBtnLogic={homeBtnLogic} />
            <TextInserter typeOfInfo={typeOfParticularInfo} homeBtnLogic={homeBtnLogic}/>
        
        </>

        );
    
}

export default ParticularInfoPage;
