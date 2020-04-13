import React from 'react';
import headerUnderline from '../assets/14_Headerunderline.png';
import '../css/Styles.css';
import '../css/famousCss.css';


function RightFamousTitle({ titleToInsert }) {

    return (

        <div className='famous-title-he'>
            <h1>{titleToInsert()}</h1>
            <img alt='underline' src={headerUnderline} className={"famous-heb-undrline"} />
        </div>
    );

}
export default RightFamousTitle;