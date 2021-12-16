import React, { Component } from "react";

const Panel = (props: any) => {
    console.log(props.panel);
    return(
        <>
            <div className="tab-pannel">{props.panel}</div>
          </>
    );
}

export default Panel;