import React, {
    Component
} from 'react'
import axios from 'axios';

class Data extends Component {


    constructor(props) {
        super(props);
        this.state = {
            imageURL: '',
            numerot: [],
       //     access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSIsImV4cCI6MTU1ODUyMTY5OCwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20ifQ.xSFo7IJ8Cnv0clnodlazbPQ57i_-LRkYeh75jG1ORjE'
        }
    }

    componentDidMount() {

       // localhost
        // axios.get('http://192.168.220.139:9595/users/?format=json', {}, {
        //     auth: {
        //         username: 'admin',
        //         password: 'deve'
        //     }
        // }).then(resp => {
        //     const numeroData = resp.data;
        //     // this.numerot = resp.data;
        //     console.log(resp.data);
        //     this.setState({
        //         numerot: [...this.state.numerot, ...numeroData]
        //     });
        // })


        // axios.defaults.headers.common['Authorization'] = `${this.access_token}` 

        // axios.get('http://192.168.220.139:9595/users/?format=json', {}, {
        //     auth: {
        //         username: 'admin',
        //         password: 'deve'
        //     }
        // }).then(resp => {
        //     const numeroData = resp.data;
        //     console.log(numeroData);
        //     this.state({numerot: [...this.state.numerot, ...numeroData]});
        // }) 
        // { headers: {"Authorization" : `Bearer ${tokenStr}`} });

        // axios.get('http://localhost:8000/api/users/?format=json', {}, {
        //     headers: {
        //         Authorization: 'Bearer d223518aa167f54c03a195afec9da2f39caeafde',
        //     }
            // auth: {
                // username: 'admin@admin.com',
                // password: 'deve'
            //     Authorization: 'Bearer d223518aa167f54c03a195afec9da2f39caeafde'
            // }
        // }).then(res => {
        //   const numeroData = res.data;
        //   console.log(numeroData);
          //this.setState({numerot: [...this.state.numerot, ...numeroData]});
        // });


        // axios.get('http://localhost:8000/api/users/?format=json')
        // .then(res => {
        //   const numeroData = res.data;
        //   console.log(numeroData);
        //   this.setState({numerot: [...this.state.numerot, ...numeroData]});
        // })




        // axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(res => {
        //   const numeroData = res.data;
        //   console.log(numeroData);
        //   this.setState({numerot: [...this.state.numerot, ...numeroData]});
        // })

        // axios.get('http://webcode.me').then(resp => {
        //    console.log(resp.data);
        // });
        // axios({
        //     auth: 'admin',
        //     password: 'deve',
        // }
        // .get('http://127.0.0.1:8000/users/?format=api').then(resp => {
        //         console.log(resp.data);
        // }));
    }

    //koiria
   // <img alt="123" src={imageURL} />
    render() {
       
        return ( 
            <div >
                
            </div>
        )
    }
}

export default Data