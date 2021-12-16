import React, { Component, useState } from "react";
import {Link} from 'react-scroll';
import './tab.compoent.scss';

const Tabs = (props: any) => {
    return(
        <>
            <ul className={props.isFooter ? "tab-header footer" : "tab-header"}>
                {props.children.map((elem: any, index: any) => {
                    return (
                        <li key={index} onClick={() => props.handleChange(index)} className="tab-body" >
                            <Link activeClass="active" to={elem.props.id} spy={true} smooth={true}>
                                <div className="div-logo">
                                    <img className="tab-logo" alt="tab-logo" src={elem.props.logo}></img>
                                </div>
                                <span className="tab-name">{elem.props.name}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
          </>
    );
}

export default Tabs;