import React, { Component } from 'react'
import { withAuth } from "../providers/AuthProvider";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class DownloadBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favourited: false,
        }
    }

    render() {
        const { isLoggedIn } = this.props
        return (
            <>
            {isLoggedIn && (
                <button className="py-2 px-4 rounded inline-flex items-center button-accent">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span><a href={this.props.gpx} download>Download</a></span>
                </button>
            )}
            {!isLoggedIn && (
                <button className="py-2 px-4 rounded inline-flex items-center button-accent">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span><Link to="/login">Download</Link></span>
                </button>
            )}

            </>
        )
    }
}

export default withRouter(withAuth(DownloadBtn));

