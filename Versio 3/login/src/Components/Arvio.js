import React from 'react'

const Arvio = props => {
     const { time } = props;
     
    var d = Number(time);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h === 1 ? " h " : " t ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " m " : " m ") : "";
    var sDisplay = s > 0 ? s + (s === 1 ? " s" : " s") : "";
   
   // jos timer alle 0 niin palauta 0 eikä negatiivista arvoa

     if (time < 0) {
     return <div>0 min</div>
     }
     else return hDisplay + mDisplay + sDisplay; 
     }

export default Arvio
