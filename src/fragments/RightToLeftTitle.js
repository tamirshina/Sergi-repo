import React from 'react';
import headerUnderline from '../assets/14_Headerunderline.png';
import '../css/Styles.css';


function RightToLeftTitle ({titleToInsert}){

    return (

        <div className='titleBoxHeb'>
            <h1 className='titleFont heInfoPageTitle'>{titleToInsert}</h1>
            <img alt='underline' src={headerUnderline} className='heInfoPageUnderline'/>
        </div>
            );

}
export default RightToLeftTitle;