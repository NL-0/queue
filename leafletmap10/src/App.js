import React from 'react';
import Map from './Map.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Leaflet-kartta
      </header>

      <Map />

      {/*testi()*/}

    </div>
  );
}

function testi()
{
  //alert("testi() ajetaan");

  const instance=new Map();
  const result=instance.render();
  return result;
}

export default App;
