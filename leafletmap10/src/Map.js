import React from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import {GeoJSON} from 'react-leaflet';
//import axios from 'axios';
import L from 'leaflet';
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
    //fetch('hel4.geojson')
      .then(response => response.json())
      .then((jsonData) => {

        this.setState({omadata:JSON.stringify(jsonData)});

        console.log(this.state.omadata);
        alert("omadata(" + this.state.omadata.length + "): " + this.state.omadata);
      })
      .catch((error) =>
      {
        alert("error jsondata: " + error);
      })
  }

  //https://www.sitepoint.com/work-with-and-manipulate-state-in-react
  render()
  {
    //const position = [this.state.lat, this.state.lng];
    const oda=this.state.omadata;

    return (
      <LeafletMap
      center={[50, 10]}
      zoom={6}
      maxZoom={10}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      //animate=import GeoJson from 'react';{true}
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

      {/*<GeoJSON data={getGeoJson()} style={this.getStyle} onEachFeature={this.onEachFeature}/>*/}
      {/*<GeoJSON data={this.state.omadata} style={this.getStyle} onEachFeature={this.onEachFeature}/>*/}
      {/*const oda=this.state.omadata;*/}
      <GeoJSON data={oda} style={this.getStyle} onEachFeature={this.onEachFeature}/>
      
    }

    </LeafletMap>
  );   
  }
  
  onEachFeature = (feature, layer) =>
  {
    layer.on('click', function(e)
    {
      var omalayer=e.target;
      //alert('Clicked: ' + omalayer.feature.properties.name);
      omalayer.bindPopup(omalayer.feature.properties.NIMI + " "
        + omalayer.feature.properties.URL);
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

function getGeoJson()
  {
    return document.state.omadata;
  }
/*  {
    return {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "FID": 2,
            "NIMI": "Elielinaukio",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.939474971007762,
              60.17180350100852
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 3,
            "NIMI": "Rautatientori",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.942558669878355,
              60.171278933704436
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 4,
            "NIMI": "Pasila",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.933959716867115,
              60.19901282077652
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 6,
            "NIMI": "Malmin asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.01241417889365,
              60.25060609822471
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 7,
            "NIMI": "Kontula",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.082521741693398,
              60.236409439289986
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 8,
            "NIMI": "Itäkeskus",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.07708752510044,
              60.2099739715594
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 10,
            "NIMI": "Puistola",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.03549437824405,
              60.27521995651101
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 12,
            "NIMI": "Herttoniemi",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.031398266258687,
              60.194987827081825
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 14,
            "NIMI": "Ruoholahden metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.91376409266475,
              60.16263020520889
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 15,
            "NIMI": "Kampin metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.93324618433396,
              60.16942394782144
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 16,
            "NIMI": "Rautatientorin metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.941251110834024,
              60.170911232743144
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 17,
            "NIMI": "Kaisaniemen metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.94824731489063,
              60.17113072595296
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 18,
            "NIMI": "Hakaniemen metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.95113957339614,
              60.179574368304166
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 19,
            "NIMI": "Sörnäisten metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.96067994119084,
              60.18786231226227
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 20,
            "NIMI": "Kalasataman metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.978066505662504,
              60.187618527565405
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 21,
            "NIMI": "Kulosaaren metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.007238240006046,
              60.18905182163789
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 22,
            "NIMI": "Herttoniemen metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.030839817564498,
              60.1950011461359
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 23,
            "NIMI": "Siilitien metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.043836470516524,
              60.20572477121236
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 24,
            "NIMI": "Itäkeskuksen metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.07733644473556,
              60.20986421217861
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 25,
            "NIMI": "Myllypuron metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.076628398502308,
              60.2245908923595
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 26,
            "NIMI": "Kontulan metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.083545705924344,
              60.23625743502145
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 28,
            "NIMI": "Puotilan metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.093908127182093,
              60.21461171065447
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 29,
            "NIMI": "Rastilan metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.120463966027856,
              60.20565624963328
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 30,
            "NIMI": "Vuosaaren metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.142480474432837,
              60.20761385754663
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 31,
            "NIMI": "Lauttasaaren metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.880177639856242,
              60.16006591094438
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 32,
            "NIMI": "Koivusaaren metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.854102922856576,
              60.163638313029296
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 33,
            "NIMI": "Helsingin rautatieasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.941187162898213,
              60.1718272709074
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 34,
            "NIMI": "Pasilan asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.933100169778196,
              60.19922527384934
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 35,
            "NIMI": "Ilmalan asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.92145238734501,
              60.20759149984012
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 36,
            "NIMI": "Huopalahden asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.893432323476397,
              60.218455486514266
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 38,
            "NIMI": "Pitäjänmäen asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.860468801761176,
              60.22319715997871
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 39,
            "NIMI": "Pohjois-Haagan asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.883077681818534,
              60.22990619888632
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 40,
            "NIMI": "Kannelmäen asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.877967636304124,
              60.23925701022524
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 41,
            "NIMI": "Käpylän asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.94713933788847,
              60.220264300126715
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 42,
            "NIMI": "Oulunkylän asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.966553862251896,
              60.22826553390702
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 43,
            "NIMI": "Pukinmäen asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.994096806144107,
              60.2426839820671
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 44,
            "NIMI": "Malmin asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.010937508786824,
              60.251326434686504
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 45,
            "NIMI": "Tapanilan asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.029468559160232,
              60.26347229368694
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 46,
            "NIMI": "Puistolan asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.036074005464293,
              60.27526032842649
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 47,
            "NIMI": "Malminkartanon asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.861313535808023,
              60.24921257161638
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 48,
            "NIMI": "Leppävaara",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.81327648238,
              60.2192310957576
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 49,
            "NIMI": "Tapiola (M)",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.803513359962338,
              60.17485132401714
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 50,
            "NIMI": "Tapionaukion terminaali",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.806816592527156,
              60.17657253399531
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 51,
            "NIMI": "Espoon keskus",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.65792641556643,
              60.20501292130918
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 52,
            "NIMI": "Tapiolansolmu",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.81014047205567,
              60.17033201190376
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 53,
            "NIMI": "Westendin asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.80461129181947,
              60.16891161437496
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 54,
            "NIMI": "Keilaniemen metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.829194453866716,
              60.174396962435516
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 55,
            "NIMI": "Aalto-yliopiston metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.828823922481078,
              60.18401248586655
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 56,
            "NIMI": "Tapiolan metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.805377248405424,
              60.17518108835619
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 57,
            "NIMI": "Urheilupuiston metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.7794425772047,
              60.17257149340381
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 58,
            "NIMI": "Niittykummun metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.759707455613906,
              60.17067542775437
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 59,
            "NIMI": "Matinkylän metroasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.737813990460438,
              60.159974274205084
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 60,
            "NIMI": "Mäkkylän asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.84269934060731,
              60.221228735322136
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 61,
            "NIMI": "Leppävaaran asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.814562166439377,
              60.219420724960614
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 64,
            "NIMI": "Koivuhovin asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.702584748137717,
              60.20705484167677
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 65,
            "NIMI": "Tuomarilan asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.6823143718343,
              60.20620914363655
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 66,
            "NIMI": "Espoon asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.656305596433178,
              60.20511970156399
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 68,
            "NIMI": "Mankin seisake",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.581908830852093,
              60.18524464439704
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 70,
            "NIMI": "Matinkylä (M)",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.739688434996935,
              60.16004454059745
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 73,
            "NIMI": "Helsinki-Vantaa lentoasema T2",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.966689129269803,
              60.318032718726904
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 74,
            "NIMI": "Martinlaakso",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.853230596722444,
              60.277260269358244
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 76,
            "NIMI": "Myyrmäki",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.855668036856894,
              60.261240789373886
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 78,
            "NIMI": "Tikkurilan matkakeskus",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.043353319634353,
              60.29329902178141
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 79,
            "NIMI": "Myyrmäen asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.854853087918276,
              60.2618563501815
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 81,
            "NIMI": "Martinlaakson asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.85250967550653,
              60.27803680951527
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 82,
            "NIMI": "Vantaankosken asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.84806619203795,
              60.285820276087286
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 83,
            "NIMI": "Tikkurilan asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.044099830153293,
              60.29232370936014
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 86,
            "NIMI": "Rekolan asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.06843678210211,
              60.33271987929037
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 89,
            "NIMI": "Kivistön asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.846415884094817,
              60.31431085334878
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 90,
            "NIMI": "Aviapoliksen asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.955595725383404,
              60.303769511126696
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 92,
            "NIMI": "Leinelän asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.039057026184622,
              60.322594320061114
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 93,
            "NIMI": "Kirkkonummi",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.440872111973484,
              60.119736976434815
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 94,
            "NIMI": "Luoman asema",
            "URL": "<a href ='https://www.google.co<a href ='https://www.google.com/'>Google</a>m/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.550285741149423,
              60.17268803274076
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 96,
            "NIMI": "Jorvaksen asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.511996347854804,
              60.137504442460006
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 97,
            "NIMI": "Tolsan asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.470179757553797,
              60.11776034127347
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 98,
            "NIMI": "Kirkkonummen asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              24.438999603403985,
              60.11959963989022
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 100,
            "NIMI": "Savion asema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.09768347880293,
              60.380386589702965
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "FID": 102,
            "NIMI": "Nikkilän linja-autoasema",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              25.2696678934874,
              60.37961176753742
            ]
          }
        },
       {
          "type": "Feature",
          "properties": {
            "FID": 102,
            "NIMI": "Turku test 1",
            "URL": "<a href ='https://www.google.com/'>Google</a>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              22.2880,
              60.4471
            ]
          }
        }
      ]
    }
  
  }
*/
export default Map
