import React from 'react';
import NonFamous from './NonFamous';
import FamousComp from './FamousComp';
import './Styles.css';

function ParticularInfoPage ({backBtnLogic, homeBtnLogic, typeOfParticularInfo}){
  
      function isFamous (){

        if(typeOfParticularInfo==='known'){

          return true;
        }
        return false;
      }
 
  return (
          <>
            {isFamous()?
            <FamousComp backBtnLogic={backBtnLogic} homeBtnLogic={homeBtnLogic} />:
            <NonFamous backBtnLogic={backBtnLogic} homeBtnLogic={homeBtnLogic} typeOfInfo={typeOfParticularInfo} />
            }
          </>
        );
    
}

export default ParticularInfoPage;
