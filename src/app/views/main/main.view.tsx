import React from 'react';
import { NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
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
  const showErrorMessage = (message: any) => {
    NotificationManager.error(message, '', 5000);
  };

  const showSuccessMessage = (message: any) => {
    NotificationManager.success(message, '', 3000);
  };
  return (
    <>
      <div className="div-mainpage" style={{ backgroundImage: `url(${background})` }}>
        <Home showErrorMessage = {showErrorMessage} showSuccessMessage= {showSuccessMessage} />
        <Introduce />
        <MeetUgly />
        <VisionAndRarity />
        <RoadMap />
        <FAQ />
        <Team />
        <NotificationContainer />
      </div>
    </>
  );
}

export default MainPage;