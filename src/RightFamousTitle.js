import React from 'react';
import headerUnderline from './14_Headerunderline.png';
import './Styles.css';
import './famousCss.css';


function RightFamousTitle ({titleToInsert}){

    return (

            <div className='enInfoTitle'>
                <h1 className='hebrewFamousTitle'>{titleToInsert()}</h1>
                <img alt='underline' src={headerUnderline} className='frontPageUnderline'/>
            </div>
            );

}
export default RightFamousTitle;