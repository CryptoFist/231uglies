import React, { useState, useEffect } from "react";
import './meet-ugly.component.scss';
import ugly_1_1 from '../assets/img/ugly-1_1.png';
import ugly_1_2 from '../assets/img/ugly-1_2.png';
import ugly_1_3 from '../assets/img/ugly-1_3.png';
import ugly_2_1 from '../assets/img/ugly-2_1.png';
import ugly_2_2 from '../assets/img/ugly-2_2.png';
import ugly_2_3 from '../assets/img/ugly-2_3.png';
import ugly_3_1 from '../assets/img/ugly-3_1.png';
import ugly_3_2 from '../assets/img/ugly-3_2.png';
import ugly_3_3 from '../assets/img/ugly-3_3.png';
import { setInterval } from "timers";

// Meet the Uglies
const MeetUgly = () => {
  const arrayUgly_1 = [ugly_1_1, ugly_1_2, ugly_1_3];
  const arrayUgly_2 = [ugly_2_1, ugly_2_2, ugly_2_3];
  const arrayUgly_3 = [ugly_3_1, ugly_3_2, ugly_3_3];
  const [uglyIndex_1, setUglyIndex_1] = useState(0);
  const [uglyIndex_2, setUglyIndex_2] = useState(0);
  const [uglyIndex_3, setUglyIndex_3] = useState(0);

  useEffect(() => {
    setTimeout(() => setUglyIndex_1((uglyIndex_1 + 1) % 3), 1000);
    setTimeout(() => setUglyIndex_2((uglyIndex_2 + 1) % 3), 1100);
    setTimeout(() => setUglyIndex_3((uglyIndex_3 + 1) % 3), 1200);
  }, [uglyIndex_1, uglyIndex_2, uglyIndex_3]);
  return (
    <div id="ugly-meet" className="main-view_page3">
      <p className="page-caption">MEET THE UGLIES</p>
      <div className="page-body">
        <div className="div-item">
          <div className="div-ugly">
            <div className="ugly-caption">
              <p className="ugly-number">1</p>
              <p className="ugly-description">
                1s are the oldest species of Uglies and also the least mutated ones. 
                They might seem a little human-like, but don't get fooled – they usually make the biggest mess. 
                Their characteristic trait is a beard. 3s think they're fun at parties.
              </p>
            </div>
            <div className="div-character" style={{ backgroundImage: `url(${arrayUgly_1[uglyIndex_1]})` }}>
              <img className="img-ugly" alt="ugly image" src={arrayUgly_1[0]} />
            </div>
          </div>
          <div className="div-ugly">
            <div className="ugly-caption">
              <p className="ugly-number">2</p>
              <p className="ugly-description">
                2s can be a bit scary to some other species, especially the 1s, but they're kindhearted and would never hurt anyone. 
                Since they found grills buried in the ashes, their mouth stays open all the time. They love to show off.
              </p>
            </div>
            <div className="div-character" style={{ backgroundImage: `url(${arrayUgly_2[uglyIndex_2]})` }}>
              <img className="img-ugly" alt="ugly image" src={arrayUgly_2[uglyIndex_2]} />
            </div>
          </div>
        </div>
        <div className="div-item">
          <div className="div-ugly">
            <div className="ugly-caption">
              <p className="ugly-number">3</p>
              <p className="ugly-description">
                Last but not least, the 3s. 
                They are the most mutated, because a nuclear bomb exploded in the middle of their dwelling. 
                They were born with a tongue so big that it doesn't fit in their mouth. 1s think they're cute though.
              </p>
            </div>
            <div className="div-character" style={{ backgroundImage: `url(${arrayUgly_3[uglyIndex_3]})` }}>
              <img className="img-ugly" alt="ugly image" src={arrayUgly_3[uglyIndex_3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetUgly;