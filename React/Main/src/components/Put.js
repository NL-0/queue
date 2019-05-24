import React from 'react'
import axios from 'axios';

// function Put() {
//     const { jono, seuraava } = props;
//     axios.put('http://192.168.220.139:9595/components/api/server/id/1', {
//         "id" : '1',
//         "hostname" : 'jokuhosti',
//         "enabled" : '1',
//         "created" : 'data',
//         "jono" : {jono},
//         "seuraava" : {seuraava},
//     })
//     return (
// <React.Fragment></React.Fragment>
//     )
// }



const Put = props => {
    const { jono, seuraava } = props;

    return (
        axios.put('http://192.168.220.139:9595/components/api/server/id/1', {
            "id" : '1',
            "hostname" : 'jokuhosti',
            "enabled" : '1',
            "created" : 'data',
            "jono" : {jono},
            "seuraava" : {seuraava},
        })
    );
  };

export default Put
