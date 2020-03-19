import React from 'react';
import rapinImg from './29_rapin.png';
import arsenyImg from './31_arseny.png';
import sailorsImg from './30_warship.png';
import pandovImg from './28_pandov.png';
import bailyImg from './27_baily.png';
import koslevImg from './26_koslev.png';
import raspotinImg from './25_raspotin.png';
import './famousCss.css';


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
