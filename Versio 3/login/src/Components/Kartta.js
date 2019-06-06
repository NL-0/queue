import React, { Component } from 'react'
import './jono.css'
import { Link } from 'react-router-dom'
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import { GeoJSON } from 'react-leaflet';
import { Button } from 'react-bootstrap';
import { faExchangeAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(faExchangeAlt, faMapMarkerAlt)

class Kartta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meh: '',
            meh2: 'http://192.168.220.139:9595/components/api/server/id/1',
            omadata: [],
            test1: '',
            jonoteksti: 'Siirry jonoon',
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

    //turhaan 2x sessionstorage samasta asiasta
    testiavaan() {
      sessionStorage.setItem('jokuvalue', sessionStorage.getItem('meh123'))
      //  sessionStorage.setItem('value', false)
    }


    onEachFeature = (feature, layer) => {
        layer.on('click', function (e) {
          var omalayer = e.target;
          sessionStorage.setItem('nimi', omalayer.feature.properties.NIMI)
          sessionStorage.setItem('meh123', 
          omalayer.feature.properties.linkki)
          omalayer.bindPopup(
          omalayer.feature.properties.NIMI + "<br>"
                           );

        //   omalayer.bindPopup(omalayer.feature.properties.NIMI + "<br>"
        //   + "<a href='" + osoite + "?val=" + omalayer.feature.properties.FID + "'>Siirry</a>" + "<br>" + '<Link>123</Link>');
      });
      }

      //sessionStorage muutos ei aiheuta päivitystä?
      linkki() {
            if (sessionStorage.getItem('meh123')) {
                   return (
                    <Link to={'/home'} onClick={() => this.testiavaan()}><Button bsStyle="primary" className="btn-margin" >
                        {this.state.jonoteksti} &nbsp;
                    <FontAwesomeIcon icon={faExchangeAlt} />
                    </Button></Link>
                   ) 
            }
            else {
                return (
                <Button bsStyle="primary" className="btn-primary disabled">{this.state.jonoteksti}</Button>
                )
            }

      }

      turha = () => {
        this.setState({
          jonoteksti: 'Siirry jonoon'
        })
      }

      valinta() {
          let palvelu = sessionStorage.getItem('nimi')
          return (
          <div>
            <Button bsStyle="info" onClick={this.turha}className="btn-margin">
            Valitse palvelu &nbsp;
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        </Button>
        
            <div>
              Valittu palvelu: {palvelu}
            </div>
{/* 
          <div className="card" style={{width: '18rem'}}>
            <div className="card-header">
              Valittu palvelu
            </div>
            <div className="card-body">
              <p className="card-text">{palvelu}</p>
            </div>
           </div>
          </div> */}
          </div>
          )
      }

    render() {
        return (

            <div className="outer">
                <div><h5>Valitse kartasta ja siirry jonoon</h5></div>
                {/* Map pitää tehdä uudelleen */}
                {/* miksi double click että popup ?! */}
                <LeafletMap
                    center={[61.7, 23.5]}
                    zoom={6}
                    maxZoom={13}
                    //attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={false}
                    scrollWheelZoom={true}
                    dragging={true}
                    //easeLinearity={0.35}
                >
                
                <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
            
                <GeoJSON key={this.state.omadata} data={this.state.omadata} style={this.getStyle} onEachFeature={this.onEachFeature} />
          
            </LeafletMap>    


  
            
                    {/* Toimiva */}
                    {/* Jonoon suoraan kun painaa nappia ja antaa arvon jossa jonon url */}
                {this.valinta()}

                {this.linkki()}

                
                    {/*  */}
{/*                 <div style={{ fontSize: '12px'}}>Siirry jonoon nappi päivittyy vasta painamalla kartta nappia uudelleen jos kohdetta ei valittu</div> */}
                </div>
        )
    }
}

export default Kartta
