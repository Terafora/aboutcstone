import React from 'react';
import hairmain from '../assets/bg-items/hairmain.svg';
import fringe from '../assets/bg-items/Fringe.svg';
import earphone from '../assets/bg-items/earphone.svg';
import hairback from '../assets/bg-items/hairback.svg';
import head from '../assets/bg-items/head.svg';
import leftcable from '../assets/bg-items/leftcable.svg';
import rightcable from '../assets/bg-items/rightcable.svg';
import shadow from '../assets/bg-items/shadow.svg';

const BackgroundLayout = () => {
  return (
    <div className="background-container">
      <img src={hairmain} alt="" className="hairmain" />
        {/* 
        <img src={fringe} alt="" className="fringe" />
        <img src={earphone} alt="" className="earphone" />
        <img src={hairback} alt="" className="hairback" />
        <img src={head} alt="" className="head" />
        <img src={leftcable} alt="" className="leftcable" />
        <img src={rightcable} alt="" className="rightcable" />
        <img src={shadow} alt="" className="shadow" />
        */}
    </div>
  );
};

export default BackgroundLayout;
