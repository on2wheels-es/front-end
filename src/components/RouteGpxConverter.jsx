import React, { Component } from 'react'
import BikeRouteMap from './BikeRouteMap'
import apiClient from '../services/apiClient'
import Map from '../components/Map';

export default class RouteGpxConverter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            geoJson: null,
            status: 'loading'
        }
    }

    componentDidMount() {
        this.getGeoJsonFile(this.props.gpx)
    }

    getGeoJsonFile = async (gpx) => {
        const file = await apiClient.drawBikeRoute(gpx)
        this.setState({
            geoJson: file,
            status: 'loaded'
        })
    }

    render() {
        const { status, geoJson } = this.state
        const { data } = this.props
        return (
            <>
                {status === 'loading' && (
                    <Map data={[data]} zoom={7}>
                        <h1>{data.name}</h1>
                        <p>{data.distance} km</p>
                        <p>{data.gradient} m</p>
                    </Map>
                )}
                {status === 'loaded' && (
                    <BikeRouteMap geoJsonData={geoJson}/>
                )}
            </>

        )
    }
}
