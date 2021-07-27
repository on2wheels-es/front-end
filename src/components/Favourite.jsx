import React, { Component } from 'react'
import { withAuth } from "../providers/AuthProvider";
import apiClient from '../services/apiClient';
import authApiClient from '../services/authApiClient';
import { withRouter } from "react-router-dom";

class Favourite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favourited: null,
            status: 'loading',
        }
    }

    async componentDidMount() {
        const { id, type} = this.props

        try {
            const user = await authApiClient.me()
            const userID = user._id
            const favourited = await apiClient.checkIfFav(id,type, userID)
            this.setState({
                favourited: favourited,
                status: 'loaded'
            })
          } catch (e) {
            this.setState({
                favourited: false,
                status: 'loaded'
            })
            console.log(e);
          }
    }

    clickToFav = async () => {
        const { id, type} = this.props

        if (this.props.user) {
            const userID = this.props.user._id

            await apiClient.addToFavourites(id,type, userID)
            await this.setState({
                favourited: true
            })
    
            const favourited = await apiClient.checkIfFav(id,type,userID)
            await this.setState({
                favourited: favourited
            })
        } else {
            return this.props.history.push("/login"); 
        }
    }

    clickToUnfav = async () => {
        const { id, type} = this.props
        const userID = this.props.user._id

        await apiClient.removeFromFavourites(id,type, userID)

        await this.setState({
            favourited: false
        })

        const favourited = await apiClient.checkIfFav(id,type, userID)

        await this.setState({
            favourited: favourited
        })
    }

    render() {
        console.log(this.props.user)
        const { favourited, status } = this.state;

        return (
            <>
            {status ==="loading" ? (<p>loading</p>) : (
                <div>
                        {!favourited ? ( 
                        <button onClick={this.clickToFav}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/> </svg>
                        </button>
                        ):(
                        <button onClick={this.clickToUnfav}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg>
                        </button>
                        )}
                </div>    
            )}
            </>
        )
    }
}

export default withRouter(withAuth(Favourite));
