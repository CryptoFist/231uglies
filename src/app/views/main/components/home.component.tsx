import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { AbiItem, toWei } from 'web3-utils';
import { CircularProgress } from "@material-ui/core";
import './home.component.scss';
import page_logo from '../assets/img/home_logo.png';
import logo from '../assets/img/logo.png';
import background from '../assets/img/home_background.png';
import uglyContract from '../../../../contract/abi/NFT.abi.json';
import { SALETYPE_PUBLICSALE, SALETYPE_PRESALE } from '../../../commonVariable';

// Home
const Home = (props: any) => {
  const {showErrorMessage, showSuccessMessage} = props;
  const [mintedAmount, setMintedAmount] = useState(0);    // amount of already minted
  const [totalAmount, setTotalAmount] = useState(2310);   // toal amount of available mint
  const [selAmountOpen, setSelAmountOpen] = useState(false);  // status that selecting amount
  const [mintAmount, setMintAmount] = useState(1);  // amount of NFT that user want to mint
  const [mintStarted, setMintStarted] = useState(false);  // status that minting
  const [isMinting, setIsMinting] = useState(false);  // status that minting process
  const [saleType, setSaleType] = useState(SALETYPE_PRESALE); // minting type

  const infura_key:any = process.env.REACT_APP_INFURA_KEY;
  const web3js = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/'.concat(infura_key)));

  let walletAddress = "";
  let isAllowed = true;
  const price = 0.05; // 0.05eth
  const contractAddress = "0x69B2406b05C60b3BfA96BC8Be7F6F1A57B2da262";

  async function checkAccount() {
    let web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    walletAddress = accounts[0];
    if (saleType == SALETYPE_PRESALE) {
      isAllowed = await getAllowList(walletAddress);
      if (isAllowed == false) {
        showErrorMessage("You are not whitelisted");
        setMintStarted(false);
      }
    } else {
      isAllowed = true;
    }
  }

  const metamaskDetect = () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        return true;
      }
    } catch(e) {
      console.log(e);
    }
    showErrorMessage("Please install metamask");
    return false;
  }

  const connectWallet = async() => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        await checkAccount();
        localStorage.setItem("connected", JSON.stringify(true));
      } catch (err) {
        console.log('user did not add account...', err)
      }
    } else {
      await checkAccount();
    }
  }

  useEffect(() => {
    getMintStatus();
    getMintCnt();
    getMaxMintCnt();
    setInterval(getMintCnt, 5000);

    if (localStorage.hasOwnProperty('connected') === true) {
      const conStatus: any = JSON.parse(localStorage.getItem("connected") || "");
      if (conStatus == true) {
        connectWallet();
      }
    }

    if (metamaskDetect() === true) {
      window.ethereum.on("accountsChanged", (accounts: any) => {
          if (accounts.length > 0) {
            localStorage.setItem("connected", JSON.stringify(true));
          } else {
            localStorage.setItem("connected", JSON.stringify(false));
            setMintStarted(true);
            isAllowed = true;
          }
      });
    }
  }, []);

  const getAllowList = async (walletAddress: any) => {
    try {
      const nftContract = await new web3js.eth.Contract(uglyContract.abi as AbiItem[], contractAddress);
      let response = await nftContract.methods.presaleAllowlist(walletAddress).call();
      if (response == true) {
        return true;
      }
    } catch(e) {
      console.log(e);
    }
    return false;
  }

  const getContractHandle = async () => {
    try {
      if (window.ethereum) {
        await connectWallet();
      }
      let web3 = new Web3(window.ethereum);
      const nftContract = new web3.eth.Contract(
        uglyContract.abi as AbiItem[],
        contractAddress
      );
      return nftContract;
    } catch(e) {
      console.log(e);
    }
  }

  const getMintCnt = async() => {
    try {
      const nftContract = await new web3js.eth.Contract(uglyContract.abi as AbiItem[], contractAddress);
      let response = await nftContract.methods.minted().call();
      setMintedAmount(response);
    } catch(e) {
      console.log(e);
    }
  }

  const getMaxMintCnt = async () => {
    try {
      const nftContract = await new web3js.eth.Contract(uglyContract.abi as AbiItem[], contractAddress);
      const response = await nftContract.methods.MAX_SUPPLY().call();
      setTotalAmount(response);
    } catch(e) {
      console.log(e);
    }
  }

  const mintNFT = async() => {
    try {
      if (mintStarted == false) {
        return;
      }
      if (metamaskDetect() == false) {
        return;
      }
      const nftContract: any = await getContractHandle();
      const cost = price * mintAmount;
      if (saleType == SALETYPE_PRESALE) {
        if (isAllowed == true) {
          setIsMinting(true);
          await nftContract.methods.presaleMint(mintAmount).send({ 
            from: walletAddress,
            value: toWei(cost.toString(), "ether"),
            gas: 300000,
          });
        } else {
          return;
        }
      } else {
        setIsMinting(true);
        await nftContract.methods.publicMint(mintAmount).send({ 
          from: walletAddress,
          value: toWei(cost.toString(), "ether"),
          gas: 300000,
        });
      }
      getMintCnt();
      showSuccessMessage("Mint succeed!");
    } catch(e: any) {
      console.log(e);
    }
    setIsMinting(false);
  }

  const getMintStatus = async () => {
    try {
      const nftContract = await new web3js.eth.Contract(uglyContract.abi as AbiItem[], contractAddress);

      let status = await nftContract.methods.isPresaleLive().call();
      if (status == true) {
        setMintStarted(true);
        setSaleType(SALETYPE_PRESALE);
        console.log('presale');
        return;
      }

      status = await nftContract.methods.isSaleLive().call();
      if (status == true) {
        setMintStarted(true);
        setSaleType(SALETYPE_PUBLICSALE);
        console.log('public sale');
        return;
      }
    } catch(e) {
      console.log(e);
    }
    return false;
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
            <div className={mintStarted == true ? 'btn-mint' : 'btn-mint disable'}>
              <div className="div-action">
                <span className="btn-txt" onClick={(e) => mintNFT()}>MINT</span>
                <span className="btn-txt amount" onClick={(e) => setSelAmountOpen(!selAmountOpen)}>({mintAmount})</span>
              </div>
              <ul className={selAmountOpen == false ? 'select-amount' : 'select-amount open'}>
                <li className="amount-item" onClick={() => {setMintAmount(1); setSelAmountOpen(false)}}>1</li>
                <li className="amount-item" onClick={() => {setMintAmount(2); setSelAmountOpen(false)}}>2</li>
                <li className="amount-item" onClick={() => {setMintAmount(3); setSelAmountOpen(false)}}>3</li>
                <li className="amount-item" onClick={() => {setMintAmount(4); setSelAmountOpen(false)}}>4</li>
                <li className="amount-item" onClick={() => {setMintAmount(5); setSelAmountOpen(false)}}>5</li>
              </ul>
            </div>
            <div className="mint-info">
              <span className="txt-info">{mintedAmount} / {totalAmount}</span>
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
            <div className={mintStarted == true ? 'btn-mint' : 'btn-mint disable'}>
              { isMinting == false ? (
                <div className="div-action">
                  <span className="btn-txt" onClick={(e) => mintNFT()}>MINT</span>
                  <span className="btn-txt amount" onClick={(e) => setSelAmountOpen(!selAmountOpen)}>({mintAmount})</span>
                </div>
                ) : (
                  <div className="div-action">
                    <CircularProgress />
                    <span className="btn-txt amount" onClick={(e) => setSelAmountOpen(!selAmountOpen)}>({mintAmount})</span>
                  </div>
                )
              }
              <ul className={selAmountOpen == false ? 'select-amount' : 'select-amount open'}>
                <li className="amount-item" onClick={() => {setMintAmount(1); setSelAmountOpen(false)}}>1</li>
                <li className="amount-item" onClick={() => {setMintAmount(2); setSelAmountOpen(false)}}>2</li>
                <li className="amount-item" onClick={() => {setMintAmount(3); setSelAmountOpen(false)}}>3</li>
                <li className="amount-item" onClick={() => {setMintAmount(4); setSelAmountOpen(false)}}>4</li>
                <li className="amount-item" onClick={() => {setMintAmount(5); setSelAmountOpen(false)}}>5</li>
              </ul>
            </div>
            <div className="mint-info">
              <span className="txt-info">{mintedAmount} / {totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;