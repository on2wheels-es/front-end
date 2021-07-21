import React, {useState, useEffect} from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const REACT_APP_MAPBOX_TOKEN ='pk.eyJ1IjoibGFpYWxsb3JldCIsImEiOiJja3JhYTdhZHY0aDF6MzFvNmdxNXdhZXJnIn0.FxPZTopXMJT5Ypk3uK5dwg';

export default function Mapp(props) {
    const { data } = props

    const [viewport, setViewport] = useState({
      latitude: 40.416775,
      longitude: -3.703790,
      zoom: 4.7,
    });

    const [selectedData, setSelectedData] = useState(null);
    
    useEffect(() => {
    const listener = e => {
            if (e.key === 'Escape') {
                setSelectedData(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        }
    }, []);

    const handleClick = (e,data) => {
        e.preventDefault();
        setSelectedData(data)
    }

    return (
        <div className="mb-6">
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/laialloret/ckra9l67v5nix19p36ntg3a0p"
                width="100%"
                height="50vh"
                onViewportChange={(viewport) => setViewport(viewport)}
            >
                {data.map(data => (
                    <Marker 
                        key={data._id} 
                        latitude={data.coords.coordinates[0][1]}
                        longitude={data.coords.coordinates[0][0]}
                        offsetTop={-15}
                        offsetLeft={-15}
                    >
                        <button className="marker-btn" onClick = {(e) => handleClick(e,data)}>
                            <img src="https://www.aqua-marina.com/wp-content/uploads/2017/04/map-marker-icon.png" alt="marker" />
                        </button>
                    </Marker>
                ))}

                {selectedData && (
                    <Popup 
                        latitude={selectedData.coords.coordinates[0][1]}
                        longitude={selectedData.coords.coordinates[0][0]}
                        onClose = {() => {setSelectedData(null)}}
                        >
                        <div>
                            <h2>Name</h2>
                            <p>Nº Routes</p>
                        </div>
                    </Popup>
                )}
            </ReactMapGL>
      </div>
    );
  }