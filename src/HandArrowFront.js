
import React from 'react';
import isLeftToRight from './IsLeftToRightFunc';
import handArrowEn from './08_HendarrowENG.png';
import handArrowHE from './12_handarrowHE.png';
import seeMoreEN from './09_Touchtoseemore.png';
import seeMoreHE from './13_extraInfoHe.png';
import './Styles.css';


function HandArrowFront ({homeBtnLogic}) {

    return (


        <div className={isLeftToRight()?'handFrontContainer':'heHandFrontContainer'}>
        <img src={isLeftToRight()?seeMoreEN:seeMoreHE} alt='handArrowTitle' className={isLeftToRight()?'gateHandEn':null}/>  
        <img src={isLeftToRight()?handArrowEn:handArrowHE} alt='handArrow' className={isLeftToRight()?'handArrowEn':'handArrowHe'}/>
    </div>
    
    );
  }
  
  export default HandArrowFront;