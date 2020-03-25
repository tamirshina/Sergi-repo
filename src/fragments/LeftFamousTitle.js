import React from 'react';
import headerUnderline from '../assets/14_Headerunderline.png';
import '../css/Styles.css';
import '../css/famousCss.css';


function LeftFamousTitle ({titleToInsert}){

    return (

            <div className='enFamousTitleContainer'>
               <h1 className='titleFont enTitleFam'>{titleToInsert()}</h1>
               <img alt='underline' src={headerUnderline} className='famousUnderline'/>
           </div>
            );

}
export default LeftFamousTitle;