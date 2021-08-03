import React, {useState, useEffect} from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Link } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import RoutesIcon from './iconsSVG/RoutesIcon';
import MountainPassesIcon from './iconsSVG/MountainPassesIcon';
import closeButton from '../images/close-icon.png'


const REACT_APP_MAPBOX_TOKEN ='pk.eyJ1IjoibGFpYWxsb3JldCIsImEiOiJja3JhYTdhZHY0aDF6MzFvNmdxNXdhZXJnIn0.FxPZTopXMJT5Ypk3uK5dwg';

export default function MultiplePointMap(props) {
    const { data } = props
    
    const [viewport, setViewport] = useState({
        width: '100',
        height: '50vh',
        latitude: 40.415524,
        longitude: -3.707488,
        zoom: 4
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
                        >
                        <div className="flex flex-col">
                          <img  src={closeButton} alt="favourites button" className="object-fit w-5 self-end" onClick={() => {setSelectedData(null)}}/>
                          <div className="flex flex-col items-start space-y-2 mx-auto">
                            <p className="font-heavy">{selectedData.municipality}</p>
                            <RoutesIcon text={selectedData.routes_number} />
                            <MountainPassesIcon text={selectedData.mountain_passes_ids.length} />
                            <Link to={`/municipalities/${selectedData._id}`} className="self-center">
                                <button className="button-accent-xs">+ Info.</button>
                            </Link>
                          </div>
                        </div>
                    </Popup>
                )}
            </ReactMapGL>
      </div>
    );
  }