import React, { useState } from "react";
import { ReactDOM } from "react";
import './faq.component.scss';

const FAQ = () => {
  const [faqOpen_1, setFaqOpen1] = useState(false);
  const [faqOpen_2, setFaqOpen2] = useState(false);
  const [faqOpen_3, setFaqOpen3] = useState(false);
  const [faqOpen_4, setFaqOpen4] = useState(false);
  const [faqOpen_5, setFaqOpen5] = useState(false);

  const toggleFaqOpen = (index: number) => {
    switch (index) {
      case 0:
        setFaqOpen1(!faqOpen_1);
        break;
      case 1:
        setFaqOpen2(!faqOpen_2);
        break;
      case 2:
        setFaqOpen3(!faqOpen_3);
        break;
      case 3:
        setFaqOpen4(!faqOpen_4);
        break;
      case 4:
        setFaqOpen5(!faqOpen_5);
        break;
      default:
        break;
    }
  }

  return (
    <div id="ugly-faq" className="main-view_page6">
      <p className="page-title">FAQ</p>
      <ul className="faq-list">
          <li className="faq-item" onClick={() => toggleFaqOpen(0)}>
            <div className="div-question">
              <span className="question-mark">Q</span>
              <span className="txt-question">Wen launch?</span>
            </div>
            <p className={faqOpen_1 == true ? 'txt-answer open' : 'txt-answer'}>
              TBA (Q1)
            </p>   
          </li>
          <li className="faq-item" onClick={() => toggleFaqOpen(1)}>
            <div className="div-question">
              <span className="question-mark">Q</span>
              <span className="txt-question">How many 231 Uglies will there be in total?</span>
            </div>
            <p className={faqOpen_2 == true ? 'txt-answer open' : 'txt-answer'}>
              There will be only 2310 Uglies ever minted.
            </p>   
          </li>
          <li className="faq-item" onClick={() => toggleFaqOpen(2)}>
            <div className="div-question">
              <span className="question-mark">Q</span>
              <span className="txt-question">What will the mint price be?</span>
            </div>
            <p className={faqOpen_3 == true ? 'txt-answer open' : 'txt-answer'}>
              All Uglies are priced at 0.05 ETH per NFT (subject to change).
            </p>   
          </li>
          <li className="faq-item" onClick={() => toggleFaqOpen(3)}>
            <div className="div-question">
              <span className="question-mark">Q</span>
              <span className="txt-question">How many Uglies can I mint during the public sale?</span>
            </div>
            <p className={faqOpen_4 == true ? 'txt-answer open' : 'txt-answer'}>
              On public launch you will be able to mint up to 3 Uglies per transaction with no limit per wallet. However, whitelisted members will only be able to mint 2 in total.
            </p>
          </li>
          <li className="faq-item" onClick={() => toggleFaqOpen(4)}>
            <div className="div-question">
              <span className="question-mark">Q</span>
              <span className="txt-question">Is there a treasury?</span>
            </div>
            <p className={faqOpen_5 == true ? 'txt-answer open' : 'txt-answer'}>
              Yes! Our treasury is 15 ETH – check roadmap for more info.
            </p>   
          </li>
      </ul>
    </div>
  );
}

export default FAQ;