import React, { Component } from 'react'
import './jono.css'
import { Link } from 'react-router-dom'
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import { GeoJSON } from 'react-leaflet';
import { Button } from 'react-bootstrap';

class Kartta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meh: '',
            meh2: 'http://192.168.220.139:9595/components/api/server/id/1',
            omadata: [],
            meh10: sessionStorage.getItem('meh123'),
            meh11: '100',
        }
    }

    componentDidMount()
    {
      fetch('https://gist.githubusercontent.com/NL-0/97baf721acedee23a924807bf2735057/raw/ec7b491726c7adbe659c30219bd3d6a9886f71ec/hel5.geojson')
        .then(response => response.json())
        .then((jsonData) => {
  
          this.setState({
            omadata: jsonData,
          });
  
        })
        .catch((error) =>
        {
          alert("error jsondata: " + error);
        })
    }


    testiavaan() {
      //  console.log("212121")
      //  sessionStorage.setItem('jokuvalue', this.state.meh2)
    //   this.setState({
    //       test10: sessionStorage(),
    //       test11: '',
    //   })
      sessionStorage.setItem('jokuvalue', sessionStorage.getItem('meh123'))
      //  sessionStorage.setItem('value', false)
    }


    onEachFeature = (feature, layer) => {
        layer.on('click', function (e) {
          //const osoite = "http://localhost/seuraavasivu.html";    //lataa hakemistosta /var/www/html
          var omalayer = e.target;
          //sessionStorage.setItem('meh123', 'http://192.168.220.139:9595/components/api/server/id/1')  
          sessionStorage.setItem('meh123', omalayer.feature.properties.linkki)
          omalayer.bindPopup(
             omalayer.feature.properties.NIMI
              );

        //   omalayer.bindPopup(omalayer.feature.properties.NIMI + "<br>"
        //   + "<a href='" + osoite + "?val=" + omalayer.feature.properties.FID + "'>Siirry</a>" + "<br>" + '<Link>123</Link>');
      });
      }

      getStyle(feature, layer) {
        return {
          color: '#006400',
          weight: 5,
          opacity: 0.65
        }
      }

     // <Link to={'/home'} onClick={() => this.testiavaan()}>Testi nappi</Link>


//vai local storage?
    render() {

        return (

            <div className="outer">
                <div><h4>Valitse kartasta ja siirry jonoon</h4></div><br />
                <div></div>

                <LeafletMap
                    center={[60, 20]}
          zoom={6}
          maxZoom={10}
          //attributionControl={true}
          zoomControl={true}
          doubleClickZoom={false}
          scrollWheelZoom={true}
          dragging={true}
          //easeLinearity={0.35}
        >
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />

          <Marker position={[50, 10]}>
            <Popup>
              Popup for any custom information.
            </Popup>
          </Marker>
          <GeoJSON key={this.state.omadata} data={this.state.omadata} style={this.getStyle} onEachFeature={this.onEachFeature} />
          }
          
            </LeafletMap>    

                    {/* Toimiva */}
                    {/* Jonoon suoraan kun painaa nappia ja antaa arvon jossa jonon url */}
                    <Link to={'/home'} onClick={() => this.testiavaan()}><Button bsStyle="primary" className="btn-margin" >
                        Siirry jonoon
                    </Button></Link>
                </div>
            
        )
    }
}

export default Kartta
