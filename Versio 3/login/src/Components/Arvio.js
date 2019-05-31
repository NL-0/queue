import React from 'react'

const Arvio = props => {
     const { time } = props;

    // var hrs = ~~(time / 3600);
    // var mins = ~~((time % 3600) / 60);
    // var secs = ~~time % 60;

    // // Output like "1:01" or "4:03:59" or "123:03:59"
    //             var ret = "";

    // if (hrs > 0) {
    //     ret += "" + hrs + ":" + (mins < 10 ? "0" : "" ); } ret +="" + mins + ":" + (secs < 10 ? "0" : "" ); ret +="" + secs;
    
    var d = Number(time);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h === 1 ? " h " : " t ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " m " : " m ") : "";
    var sDisplay = s > 0 ? s + (s === 1 ? " s" : " s") : "";
   
   // return hDisplay + mDisplay + sDisplay; 

     if (time < 0) {
     return <div>0 min</div>
     }
     else return hDisplay + mDisplay + sDisplay; 
     }

export default Arvio
