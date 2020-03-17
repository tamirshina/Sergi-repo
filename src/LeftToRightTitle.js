import React from 'react';
import headerUnderline from './14_Headerunderline.png';
import './Styles.css';


function RightToLeftTitle ({titleToInsert}){

    return (

    <div className='enInfoTitle'>
        <h1 className='titleFont frontPageEnTitle'>{titleToInsert}</h1>
        <img alt='underline' src={headerUnderline} className='frontPageUnderline'/>
    </div>
            );

}
export default RightToLeftTitle;