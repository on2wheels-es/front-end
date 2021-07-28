import React, { Component } from 'react'
import { withAuth } from "../providers/AuthProvider";
import { withRouter } from 'react-router'

class Favourite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favourited: false,
        }
    }

    checkIfFav = () => {
        const { id, type, user, isLoggedIn } = this.props
        if (isLoggedIn) {
            if (type === 'mountainPasses' && user.favouritePasses.length > 0) {
                return user.favouritePasses.includes(id);
            } else if (type === 'routes' && user.favouriteRoutes.length > 0) {
                return user.favouriteRoutes.includes(id);
            } else if (type === 'municipality' && user.favouriteLocations.length > 0) {
                return user.favouriteLocations.includes(id);
            } else {
                return false;
            }
        } 
    }

    clickToFav = async (e) => {
        const { id, type, isLoggedIn } = this.props
        if (isLoggedIn) {
            const userID = this.props.user._id
            await this.props.addToFavourites({id,type, userID});
            this.setState({            
                favourited: true,
            })

        } else {
            return this.props.history.push('/login')
        }
    }

    clickToUnfav = async (e) => {
        const { id, type} = this.props
        const userID = this.props.user._id
        await this.props.removeFromFavourites({id,type, userID});
        this.setState({            
            favourited: false,
        })
    }

    render() {
        const isFavourited = this.checkIfFav();
        return (
            <>
                <div className="inline-block mx-2 flex justify-end">
                        {!isFavourited ? ( 
                        <button onClick={this.clickToFav}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/> </svg>
                        </button>
                        ):(
                        <button onClick={this.clickToUnfav}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg>
                        </button>
                        )}
                </div>   
            </>
        )
    }
}

export default withRouter(withAuth(Favourite));
