import React from 'react';
import headerUnderline from './14_Headerunderline.png';
import './Styles.css';


function RightToLeftTitle ({titleToInsert}){

    return (

        <div>
            <h1 className='titleFont heInfoPageTitle'>{titleToInsert}</h1>
            <img alt='underline' src={headerUnderline} className='heInfoPageUnderline'/>
        </div>
            );

}
export default RightToLeftTitle;