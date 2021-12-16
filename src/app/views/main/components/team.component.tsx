import React from "react";
import DevInfo from "../../../components/dev-info/dev-info.component";
import img_Flep from "../assets/img/ugly-1.png";
import img_Yakubson from "../assets/img/ugly-2.png";
import img_Tobias from "../assets/img/ugly-3.png";
import img_Luis from "../assets/img/ugly-2.png";
import img_Freddie from "../assets/img/ugly-3.png";
import './team.component.scss';

const Team = (props: any) => {
  const info_Flep = "Founder & Social Media Manager";
  const info_Yakubson = "Founder & Community Manager";
  const info_Tobias = "Artist"
  const info_Freddie = "Backend Dev";
  const info_Luis = "Frontend Dev";
  return (
    <div id="ugly-team" className="main-view_page7">
      <p className="txt-title">TEAM</p>
      <div className="div-team">
        <div className="div-row">
          <DevInfo 
            dev_img = {img_Flep}
            dev_name = "FLEP"
            dev_info = {info_Flep}
          />
          <DevInfo 
            dev_img = {img_Yakubson}
            dev_name = "YAKUBSON"
            dev_info = {info_Yakubson}
          />
          <DevInfo 
            dev_img = {img_Tobias}
            dev_name = "TOBIAS"
            dev_info = {info_Tobias}
          />
        </div>

        <div className="div-row">
          <DevInfo 
            dev_img = {img_Luis}
            dev_name = "LUIS"
            dev_info = {info_Luis}
          />
          <DevInfo 
            dev_img = {img_Freddie}
            dev_name = "FREDDIE"
            dev_info = {info_Freddie}
          />
        </div>
      </div>
    </div>
  );
}

export default Team;