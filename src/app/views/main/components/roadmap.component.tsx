import React, { useState } from "react";
import './roadmap.component.scss';
import PlanModal from "./plan.modal";
import ugly_1 from '../assets/img/ugly-1_noback.png';

const RoadMap = () => {
  return (
    <div id="ugly-roadmap" className="main-view_page5">
      <p className="page-title">ROADMAP</p>
      <div className="div-roadmap">
        <ul className="roadmap row">
          <li className="map map-1">
            <div className="div-description">
              <p className="txt-title">20%</p>
              <ul className="txt-description">
                <li>231 Uglies merch for the first 200 buyers</li>
                <li>Holder access to exclusive ETH giveaways</li>
              </ul>
            </div>
          </li>
          <li className="map map-2 big">
            <div className="div-description">
              <p className="txt-title">40%</p>
              <ul className="txt-description">
                <li>5 ETH added to treasury</li>
                <li>Creation of 231 Uglies themed banners for Twitter or Discord</li>
                <li>15 custom 1/1 banners given away to holders</li>
              </ul>
            </div>
          </li>
          <li className="map map-3 plan">
            <div className="div-circle"></div>
          </li>
        </ul>
        <ul className="roadmap row">
          <li className="map map-1">
            <div className="div-description">
              <p className="txt-title">60%</p>
              <ul className="txt-description">
                <li>10 random holders will receive a FREE additional 231 Uglies NFT</li>
                <li>Two 1/1 collaboration pieces given away to two lucky holders</li>
              </ul>
            </div>
          </li>
          <li className="map map-2">
            <div className="div-description">
              <p className="txt-title">80%</p>
              <ul className="txt-description">
                <li>10 ETH added to treasury</li>
                <li>10 ETH donation to a charity chosen by holders</li>
              </ul>
            </div>
          </li>
          <li className="map map-3">
            <div className="div-description">
              <p className="txt-title">100%</p>
              <p className="txt-description center">
                Sold out!<br/> Time for the things in plan.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="div-plan">
        <p className="plan-title">THINGS IN PLAN</p>
        <ul className="plan-list">
          <li className="list-item">
            <span className="item-description">Weekly airdrops of custom-made 3D rendered/animated Uglies.<br/>These NFTs will be a part of the "231 Uglies Events" collection</span>
            <img className="item-image" alt="item image" src={ugly_1} />
          </li>
          <li className="list-item">
            <span className="item-description">Listed on rarity tools, rarity sniper etc.</span>
            <img className="item-image" alt="item image" src={ugly_1} />
          </li>
          <li className="list-item">
            <span className="item-description">Early holder access to our next project "231 Cuties"</span>
            <img className="item-image" alt="item image" src={ugly_1} />
          </li>
        </ul>
        <div className="div-footer">
          <p className="footer-description">
            Roadmap propositions will be presented on our Discord one week before public launch. However, the community voting will begin shortly after sell-out.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;