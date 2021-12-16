import React from 'react';
import './main.view.scss';
import background from './assets/img/background.png';
import Home from './components/home.component';
import Introduce from './components/introduce.component';
import MeetUgly from './components/meet-ugly.component';
import VisionAndRarity from './components/vision.component';
import RoadMap from './components/roadmap.component';
import FAQ from './components/faq.component';
import Team from './components/team.component';

const MainPage = (props: any) => {
  return (
    <>
      <div className="div-mainpage" style={{ backgroundImage: `url(${background})` }}>
        <Home />
        <Introduce />
        <MeetUgly />
        <VisionAndRarity />
        <RoadMap />
        <FAQ />
        <Team />
      </div>
    </>
  );
}

export default MainPage;