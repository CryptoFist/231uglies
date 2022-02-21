import React, { useState } from 'react';
import {Link} from 'react-scroll';
import './main-header.component.scss';
import logo from './assets/img/logo.png';
import tab1_logo from './assets/img/twitter.png';
import tab2_logo from './assets/img/twitter.png';
import tab3_logo from './assets/img/twitter.png';
import tab4_logo from './assets/img/twitter.png';
import tab5_logo from './assets/img/twitter.png';
import tab6_logo from './assets/img/twitter.png';
import tab7_logo from './assets/img/twitter.png';
import icon_twitter from './assets/img/twitter.png';
import icon_discord from './assets/img/discord.png';
import icon_instagram from './assets/img/instagram.png';
import icon_opensea from './assets/img/opensea.png';
import btn_menu from './assets/img/tab_menu.png';
import btn_close from './assets/img/close.png';
import Panel from '../tabs/panel.component';
import Tabs from '../tabs/tab.component';

function MainHeader(props: any) {
    const {handleChange} = props;
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClickTabMenu = () => {
        setMenuOpen(prevState => !prevState);
    }
    return (
        <header className="main-header">
            <div className="div-logo">
                <img src={logo} className="header-logo" alt="logo" />
            </div>
            <Tabs className="main-header_tabs" isFooter={false} handleChange={handleChange} >
                <Panel logo = {tab1_logo} name = "Home" id="ugly-home"></Panel>
                <Panel logo = {tab2_logo} name = "Introduction" id="ugly-introduce"></Panel>
                <Panel logo = {tab3_logo} name = "Meet the Uglies" id="ugly-meet"></Panel>
                <Panel logo = {tab4_logo} name = "Vision & Rarity" id="ugly-vision"></Panel>
                <Panel logo = {tab5_logo} name = "Roadmap" id="ugly-roadmap"></Panel>
                <Panel logo = {tab6_logo} name = "FAQ" id="ugly-faq"></Panel>
                <Panel logo = {tab7_logo} name = "Team" id="ugly-team"></Panel>
            </Tabs>

            <ul className="main-header_shortcuts">
                <li className="shortcut">
                    <a href="https://twitter.com/231Uglies_NFT" target="_blank">
                        <div className="div-shortcutlogo">
                            <img src={icon_twitter} className="shortcut-logo" />
                        </div>
                        <p className="shortcut-name">Twitter</p>
                    </a>
                </li>
                <li className="shortcut">
                    <a href="https://discord.gg/UC5CNp83Qf" target="_blank">
                        <div className="div-shortcutlogo">
                            <img src={icon_discord} className="shortcut-logo" />    
                        </div>
                        <p className="shortcut-name">Discord</p>
                    </a>
                </li>
                <li className="shortcut">
                    <a href="https://opensea.io/" target="_blank">
                        <div className="div-shortcutlogo">
                            <img src={icon_opensea} className="shortcut-logo" />
                        </div>    
                        <p className="shortcut-name">OpenSea</p>
                    </a>
                </li>
                {/* <li className="shortcut">
                    <a href="https://www.instagram.com/231uglies/" target="_blank">
                        <div className="div-shortcutlogo">
                            <img src={icon_instagram} className="shortcut-logo" />    
                        </div>
                        <p className="shortcut-name">Instagram</p>
                    </a>
                </li> */}
                {
                    window.innerWidth <= 768 &&
                    <li className="shortcut">
                        <div className="div-shortcutlogo" onClick={() => handleClickTabMenu()} aria-hidden="true" >
                            <img src={menuOpen == false ? btn_menu : btn_close} className="shortcut-logo" />    
                        </div>
                        <caption className="shortcut-name"></caption>
                        <div className={menuOpen == false ? 'nav-wrapper' : 'nav-wrapper open'}>
                            <ul className="nav">
                                <li><Link activeClass="active" to="ugly-home" spy={true} smooth={true}><span className="tab-name">Home</span></Link></li>
                                <li><Link activeClass="active" to="ugly-introduce" spy={true} smooth={true}><span className="tab-name">Introduction</span></Link></li>
                                <li><Link activeClass="active" to="ugly-meet" spy={true} smooth={true}><span className="tab-name">Meet the Uglies</span></Link></li>
                                <li><Link activeClass="active" to="ugly-vision" spy={true} smooth={true}><span className="tab-name">Vision & Rarity</span></Link></li>
                                <li><Link activeClass="active" to="ugly-roadmap" spy={true} smooth={true}><span className="tab-name">Roadmap</span></Link></li>
                                <li><Link activeClass="active" to="ugly-faq" spy={true} smooth={true}><span className="tab-name">FAQ</span></Link></li>
                                <li><Link activeClass="active" to="ugly-team" spy={true} smooth={true}><span className="tab-name">Team</span></Link></li>
                            </ul>
                        </div>
                    </li>
                }
            </ul>
        </header>
    );
}

export default MainHeader;