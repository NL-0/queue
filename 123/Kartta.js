import React, { Component } from 'react'
import './jono.css'

import {Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import {GeoJSON} from 'react-leaflet';

class Kartta extends Component
{
    constructor()
    {
      super();
  
      this.state={
        omadata: []
      };
    }


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



    render() {
        return (
            <div className="outer">
                
		Kartta3
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

          </div>
        )
    }

onEachFeature = (feature, layer) =>
  {
    layer.on('click', function(e)
    {
      const osoite="http://localhost/seuraavasivu.html";    //lataa hakemistosta /var/www/html

      var omalayer=e.target;
      omalayer.bindPopup(omalayer.feature.properties.NIMI + "<br>"
        + "<a href='" + osoite + "?val=" + omalayer.feature.properties.FID + "'>Siirry</a>");
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

export default Kartta

