import React, { useState, useEffect } from 'react';
import VideoComp from './VideoComp';
import InfoPage from './InfoPage';
import TextInserter from './TextInserter';
import ParticularInfo from './ParticularInfoPage';
import LanguagesButtons from './LanguageButtons';
import jsonData from './text.json';
import './App.css';

function App() {

  const [isInfoRouting, setIsInfoRouting] = useState(false);
  const [texttoShow] = useState(JSON.stringify(jsonData));
  const [isFrontPage, setIsFrontPage] = useState(true);
  const [isTextInsert,setIsTextInsert] = useState(true);
  const [isShowButtons,setIsShowButtons] = useState(true);
  const [isParticularInfoPage, setIsParticularInfoPage] = useState(false);

  useEffect(()=>{
    console.log('mounted11111')
  })
  
  const playVideo =()=> {
    
    const videoElem = document.getElementById('zoomInVideo');
    if(videoElem){
        videoElem.play();
        videoElem.onplay = (event) =>{
          setTimeout(function(){ setIsTextInsert(false); }, 2000);
          setTimeout(function(){ setIsInfoRouting(true); }, 3500);
          setIsShowButtons(false);

        }
        videoElem.onended = (event) => {
            setIsFrontPage(false);
            setIsTextInsert(false);
            setIsShowButtons(true);
          };
    }
}


const moveToParticularInfo =(e)=> {

  if(e){
    console.log(e.currentTarget.id);
    setIsParticularInfoPage(true);
    setTimeout(function(){ setIsInfoRouting(false); }, 100);
    
  }
  
}

const backToInfoRouting =()=> {
  
  setIsInfoRouting(true);
  setIsParticularInfoPage(false);
}
const homeBtn =()=> {
  
  setIsFrontPage(true);
  setIsTextInsert(true);
  setIsParticularInfoPage(false);
  setIsInfoRouting(false);
}
  return (
<>

{isShowButtons?<LanguagesButtons />:null}
{isFrontPage?<VideoComp playVideoLogic={playVideo} className="App"></VideoComp>:null}
{isInfoRouting?<InfoPage moveToParticularInfo={moveToParticularInfo} homeBtnLogic={homeBtn} />:null}
{isTextInsert?<TextInserter textToShow={texttoShow} />:null}
{isParticularInfoPage?<ParticularInfo backBtnLogic={backToInfoRouting} homeBtnLogic={homeBtn} />:null}
</>
  );
}

export default App;
