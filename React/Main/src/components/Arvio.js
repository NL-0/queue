import React from 'react'

const Arvio = props => {
    const { time } = props;

    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
                var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "" ); } ret +="" + mins + ":" + (secs < 10 ? "0" : "" ); ret +="" + secs;
    
    if (time > 0) {
    return <div>{ret}</div>
    }
    else return "0"
    }

export default Arvio
