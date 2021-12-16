import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { AbiItem, toWei } from 'web3-utils';
import './home.component.scss';
import page_logo from '../assets/img/home_logo.png';
import logo from '../assets/img/logo.png';
import background from '../assets/img/home_background.png';
import uglyContract from '../../../../contract/abi/NFT.abi.json';
import Tabs from '../../../components/tabs/tab.component';
import Panel from '../../../components/tabs/panel.component';

// Home
const Home = () => {
  const [mintAmount, setMintAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(2310);
  const [walletAddress, setWalletAddress] = useState("");

  const contractAddress = "0xFc7DB7B6F847B3866F60F6C68C3c9C271cB267b9";

  async function checkAccount() {
    let web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    setWalletAddress(accounts[0]);
  }

  /*
    https://www.instagram.com/231uglies/
    https://mobile.twitter.com/231Uglies
    https://discord.gg/UC5CNp83Qf
  */
  const connectWallet = async() => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        checkAccount();
      } catch (err) {
        console.log('user did not add account...', err)
      }
    } else {
      checkAccount();
    }
  }

  const getMintCnt = async() => {
    try {
      console.log('aaaa');
      if (window.ethereum) {
        await connectWallet();
      }
      let web3 = new Web3(window.ethereum);
      console.log('create contract handle');
      const nftContract = new web3.eth.Contract(
        uglyContract.abi as AbiItem[],
        contractAddress
      );
      const response = await nftContract.methods.minted.call();
      console.log(response);
    } catch(e) {
      console.log(e);
    }
  }

  const mintNFT = async () => {
    try {
      let web3 = new Web3(window.ethereum);
      const nftContract = new web3.eth.Contract(
        uglyContract.abi as AbiItem[],
        contractAddress
      );
      const response = await nftContract.methods.getPresaledCnt().call();
      console.log(response);
    } catch(e) {
      console.log(e);
    }
  }

  if (window.innerWidth <= 1080) {
    return (
      <div id="ugly-home" className="main-view_page1" style={{ backgroundImage: `url(${background})` }}>
        <div className="page-pic" >
          <img className="img-uglies" alt="uglies image" src={logo} />
        </div>
        <div className="page-mint">
          <div className="div-logo">
            <img className="page-logo" alt="page-logo" src={page_logo} />
          </div>
          <div className="div-mint">
            <div className="btn-mint" onClick={(e) => getMintCnt()}><span className="btn-txt">MINT</span></div>
            <div className="mint-info">
              <span className="txt-info">{mintAmount} / {totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="ugly-home" className="main-view_page1" style={{ backgroundImage: `url(${background})` }}>
        <div className="page-pic" >
          <img className="img-uglies" alt="uglies image" src={page_logo} />
        </div>
        <div className="page-mint">
          <div className="div-logo">
            <img className="page-logo" alt="page-logo" src={logo} />
          </div>
          <div className="div-mint">
            <div className="btn-mint" onClick={(e) => getMintCnt()}><span className="btn-txt">MINT</span></div>
            <div className="mint-info">
              <span className="txt-info">{mintAmount} / {totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;