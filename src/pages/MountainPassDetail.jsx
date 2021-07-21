import React, { Component } from 'react'
import Map from '../components/Map';
import apiClient from '../services/apiClient';

export class MountainPassDetail extends Component {

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

            const response = await apiClient.getMountainPass(id);
            this.setState({
                status: 'loaded',
                data: { coords: response.peak_coords, ...response}
            })
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        const { data, status } = this.state;

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

export default MountainPassDetail
