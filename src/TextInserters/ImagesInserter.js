import React from 'react';
import rapinImg from '../assets/29_rapin.png';
import arsenyImg from '../assets/31_arseny.png';
import sailorsImg from '../assets/30_warship.png';
import pandovImg from '../assets/28_pandov.png';
import bailyImg from '../assets/27_baily.png';
import koslevImg from '../assets/26_koslev.png';
import raspotinImg from '../assets/25_raspotin.png';
import '../css/famousCss.css';


function ImagesInserter ({changeType}){
 
  return (
          <div>
            <img id='raspotin' onClick={changeType} src={raspotinImg} alt='someonesImage' className='raspotinImg'></img>
            <img id='koslev' onClick={changeType} src={koslevImg} alt='someonesImage' className='koslevImg'></img>
            <img id='baily' onClick={changeType} src={bailyImg} alt='someonesImage' className='bailyImg'></img>
            <img id='pandov' onClick={changeType} src={pandovImg} alt='someonesImage' className='pandovImg'></img>
            <img id='warship' onClick={changeType} src={sailorsImg} alt='someonesImage' className='shipImg'></img>
            <img id='rapin' onClick={changeType} src={rapinImg} alt='someonesImage' className='rapinImg'></img>
            <img id='arseny' onClick={changeType} src={arsenyImg} alt='someonesImage' className='arsenyImg'></img>
          </div>
        );
    
}

export default ImagesInserter;
