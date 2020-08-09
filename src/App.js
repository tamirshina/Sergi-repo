import React, { useState, useEffect } from 'react';
import VideoComp from './pages/VideoComp';
import InfoPage from './pages/InfoPage';
import TextInserter from './TextInserters/TextInserter';
import ParticularInfo from './pages/ParticularInfoPage';
import LanguagesButtons from './fragments/LanguageButtons';
import HomeBtn from './fragments/HomeBtn';

function App() {

  const [isInfoRouting, setIsInfoRouting] = useState(false);
  const [isFrontPage, setIsFrontPage] = useState(true);
  const [isTextInsert, setIsTextInsert] = useState(true);
  const [isShowButtons, setIsShowButtons] = useState(true);
  const [typeOfParticularInfo, setTypeOfParticularInfo] = useState();
  const [isParticularInfoPage, setIsParticularInfoPage] = useState(false);

  useEffect(() => {
    window.addEventListener('contextmenu', blockContextMenu);

    // eslint-disable-next-line
  }, []);

  const blockContextMenu = (evt) => {
    evt.preventDefault();
  };

  const playVideo = () => {

    const videoElem = document.getElementById('zoomInVideo');
    const textParaEl = document.getElementById('frontBox');
    if (videoElem) {
      videoElem.play();
      videoElem.onplay = (event) => {
        if (textParaEl) {
          textParaEl.classList.add('fade')
        }
        setTimeout(function () {
          setIsTextInsert(false);
        }, 2000);
        setTimeout(function () { setIsInfoRouting(true); }, 3500);
        setIsShowButtons(false);

      }
      videoElem.onended = (event) => {
        setIsFrontPage(false);
        setIsTextInsert(false);
        setIsShowButtons(true);
      };
    }
  }

  const moveToParticularInfo = (e) => {

    if (e) {
      setTypeOfParticularInfo(e.currentTarget.id);
      setIsParticularInfoPage(true);
      setTimeout(function () { setIsInfoRouting(false); }, 100);
    }
  }

  const backToInfoRouting = () => {

    setIsInfoRouting(true);
    setIsParticularInfoPage(false);
  }
  const homeBtn = () => {

    setIsFrontPage(true);
    setIsTextInsert(true);
    setIsParticularInfoPage(false);
    setIsInfoRouting(false);
  }
  return (
    <>

      {isShowButtons ? <LanguagesButtons /> : null}
      {isFrontPage ? <VideoComp playVideoLogic={playVideo} className="App"></VideoComp> : <HomeBtn homeBtnLogic={homeBtn} />}
      {isInfoRouting ? <InfoPage moveToParticularInfo={moveToParticularInfo} homeBtnLogic={homeBtn} /> : null}
      {isTextInsert ? <TextInserter /> : null}
      {isParticularInfoPage ? <ParticularInfo backBtnLogic={backToInfoRouting} homeBtnLogic={homeBtn} typeOfParticularInfo={typeOfParticularInfo} /> : null}
    </>
  );
}

export default App;
