import React from "react";
import './dev-info.component.scss';

const DevInfo = (props: any) => {
  return (
    <figure className="dev-info">
      <div className="div-img">
        <img className="img-dev" alt="developer image" src={props.dev_img} />
      </div>
      <div className="txt-dev">
        <p className="dev-name">{props.dev_name}</p>
        <p className="dev-txt">{props.dev_info}</p>
      </div>
    </figure>
  );
}

export default DevInfo;