import React, { useRef, useEffect } from 'react';
import mapboxgl from "mapbox-gl";
import bbox from 'geojson-bbox';
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = 'pk.eyJ1IjoibGFpYWxsb3JldCIsImEiOiJja3JhYTdhZHY0aDF6MzFvNmdxNXdhZXJnIn0.FxPZTopXMJT5Ypk3uK5dwg'

const BikeRouteMap = (props) => {

    const mapContainer = useRef()

    useEffect(() => {

        const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/outdoors-v11",
        center: [-3.703790, 40.416775],
        zoom: 4,
        })

    map.on("load", () => {

        map.addSource("route", {
        type: "geojson",
        data: props.geoJsonData
        });
    
        map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round',
        },
        paint: {
            "line-color": "#ef8451",
            "line-width": 6,
        },
        })
    })

    // Set the map view to the extent of the GeoJSON layer.
    const extent = bbox(props.geoJsonData)
    map.fitBounds(extent, {padding: 20});

        // cleanup function to remove map on unmount
        return () => map.remove()
    }, [])

    return <div ref={mapContainer} style={{ width: "100", height: "50vh" }} />
}

export default BikeRouteMap