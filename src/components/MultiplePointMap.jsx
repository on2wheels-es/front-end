import React, {useState, useEffect} from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import RoutesIcon from '../components/iconsSVG/RoutesIcon';
import MountainPassesIcon from '../components/iconsSVG/MountainPassesIcon';
import { Link } from 'react-router-dom';

const REACT_APP_MAPBOX_TOKEN ='pk.eyJ1IjoibGFpYWxsb3JldCIsImEiOiJja3JhYTdhZHY0aDF6MzFvNmdxNXdhZXJnIn0.FxPZTopXMJT5Ypk3uK5dwg';

export default function MultiplePointMap(props) {
    const { data } = props
    
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '50vh',
        latitude: 40.415524,
        longitude: -3.707488,
        zoom: 4.5
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
                        closeButton={false}
                        // onClose = {() => {setSelectedData(null)}}
                        >
                        <div>
                          <RoutesIcon text={selectedData.routes_number} />
                          <MountainPassesIcon text={selectedData.length} />
                          <button onClick={() => {setSelectedData(null)}}>Close</button>
                          <Link to={`/municipalities/${selectedData._id}`}>
                             <button className="button-accent">+ Info</button>
                          </Link>
                        </div>
                    </Popup>
                )}
            </ReactMapGL>
      </div>
    );
  }