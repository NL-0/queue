import React from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import {GeoJSON} from 'react-leaflet';
//import axios from 'axios';
// import L from 'leaflet';
//import ReactDOM from 'react-dom';
//import Ajax from 'react-ajax';

class Map extends React.Component
{
  constructor()
  {
    super();

    this.state={
      omadata: []
    };
 }

  //https://techiediaries.com/react-ajax
  componentDidMount()
  {
    fetch('https://gist.githubusercontent.com/NL-0/b6f17f8f86598eab84087db42c78f83a/raw/9699816ee7b9336e383d24082c40456bceaf6ff9/hel4.geojson')
    
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

  render()
  {

    return (
      console.log(this.state.omadata),
      <LeafletMap
      center={[60, 20]}
      zoom={6}
      maxZoom={10}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={false}
      scrollWheelZoom={true}
      dragging={true}
      easeLinearity={0.35}
    >
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />

      <Marker position={[50, 10]}>
        <Popup>
          Popup for any custom information.
        </Popup>
      </Marker>
      <GeoJSON key={this.state.omadata} data={this.state.omadata} style={this.getStyle} onEachFeature={this.onEachFeature}/>


    }

    </LeafletMap>
  );   
  }
  
  onEachFeature = (feature, layer) =>
  {
    layer.on('click', function(e)
    {
      var omalayer=e.target;
      omalayer.bindPopup(omalayer.feature.properties.NIMI + " "
        + omalayer.feature.properties.URL + "\b" + omalayer.feature.properties.FID);
    });
  }

  getStyle(feature, layer) {
    return {
      color: '#006400',
      weight: 5,
      opacity: 0.65
    }
  }
}

export default Map
