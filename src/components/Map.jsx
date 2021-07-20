import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
require('dotenv').config()

const REACT_APP_MAPBOX_TOKEN ='pk.eyJ1IjoibGFpYWxsb3JldCIsImEiOiJja3JhYTdhZHY0aDF6MzFvNmdxNXdhZXJnIn0.FxPZTopXMJT5Ypk3uK5dwg';

export default function Mapp(props) {
    const { municipalities } = this.props
    console.log(municipalities);

    const [viewport, setViewport] = useState({
      latitude: 40.416775,
      longitude: -3.703790,
      zoom: 4
    });

    // const [selectedMunicipality, setSelectedMunicipality] = useState(null);
    
    // useEffect(() => {
    // const listener = e => {
    //         if (e.key === 'Escape') {
    //             setSelectedPark(null);
    //         }
    //     };
    //     window.addEventListener("keydown", listener);

    //     return () => {
    //         window.removeEventListener("keydown", listener);
    //     }
    // }, []);

    // const handleClick = (e,park) => {
    //     e.preventDefault();
    //     setSelectedPark(park)
    // }

    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/laialloret/ckra9l67v5nix19p36ntg3a0p"
                width="20vw"
                height="80vh"
                onViewportChange={(viewport) => setViewport(viewport)}
            >
                {/* {municipalities.features.map(municipality => (
                    <Marker 
                        key={municipality.properties.PARK_ID} 
                        latitude={municipality.geometry.coordinates[1]}
                        longitude={municipality.geometry.coordinates[0]}
                    >
                        <button className="marker-btn" onClick = {(e) => handleClick(e,municipality)}>
                            <img src="https://www.aqua-marina.com/wp-content/uploads/2017/04/map-marker-icon.png" alt="marker" />
                        </button>
                    </Marker>
                ))}

                {selectedMunicipality && (
                    <Popup 
                        latitude={selectedMunicipality.geometry.coordinates[1]} 
                        longitude={selectedMunicipality.geometry.coordinates[0]}
                        onClose = {() => {setSelectedMunicipality(null)}}
                        >
                        <div>
                            <h2>{selectedMunicipality.properties.NAME}</h2>
                            <p>{selectedMunicipality.properties.DESCRIPTIO}</p>
                        </div>
                    </Popup>
                )} */}
            </ReactMapGL>
      </div>
    );
  }