import React, { Component } from 'react'
import Map from '../components/Map';
import apiClient from '../services/apiClient';

export class RouteDetail extends Component {

    constructor(props) {
        super(props);
        this.state= {
            status: 'loading',
            data: undefined
        }
    }
    
    async componentDidMount() {
        try {
            const { id } = this.props.match.params;

            const response = await apiClient.getRoute(id);
            this.setState({
                status: 'loaded',
                data: { coords: response.start, ...response}
            })
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        const { data, status } = this.state;
        console.log(data)
        return (
            <div>
                {status === 'loading' && <p>Loading data</p>}
                {status === 'loaded' && (
                    <>
                    <p>{data.name}</p>
                    <Map data={[data]}/>
                    </>
                    
                )}
                
            </div>
        )
    }
}

export default RouteDetail