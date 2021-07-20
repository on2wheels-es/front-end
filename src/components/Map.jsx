import React, {useState, useEffect} from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const REACT_APP_MAPBOX_TOKEN ='pk.eyJ1IjoibGFpYWxsb3JldCIsImEiOiJja3JhYTdhZHY0aDF6MzFvNmdxNXdhZXJnIn0.FxPZTopXMJT5Ypk3uK5dwg';

export default function Mapp(props) {
    const { municipalities } = props

    const [viewport, setViewport] = useState({
      latitude: 40.416775,
      longitude: -3.703790,
      zoom: 4
    });

    const [selectedMunicipality, setSelectedMunicipality] = useState(null);
    
    useEffect(() => {
    const listener = e => {
            if (e.key === 'Escape') {
                setSelectedMunicipality(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        }
    }, []);

    const handleClick = (e,municipality) => {
        e.preventDefault();
        setSelectedMunicipality(municipality)
    }

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
                {municipalities.map(municipality => (
                    <Marker 
                        key={municipality._id} 
                        latitude={municipality.coords.coordinates[0][1]}
                        longitude={municipality.coords.coordinates[0][0]}
                        offsetTop={-15}
                        offsetLeft={-15}
                    >
                        <button className="marker-btn" onClick = {(e) => handleClick(e,municipality)}>
                            <img src="https://www.aqua-marina.com/wp-content/uploads/2017/04/map-marker-icon.png" alt="marker" />
                        </button>
                    </Marker>
                ))}

                {selectedMunicipality && (
                    <Popup 
                        latitude={selectedMunicipality.coords.coordinates[0][1]}
                        longitude={selectedMunicipality.coords.coordinates[0][0]}
                        onClose = {() => {setSelectedMunicipality(null)}}
                        >
                        <div>
                            <h2>{selectedMunicipality.municipality}</h2>
                            <p>Nº Routes: {selectedMunicipality.routes_number}</p>
                        </div>
                    </Popup>
                )}
            </ReactMapGL>
      </div>
    );
  }