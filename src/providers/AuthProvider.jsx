import React, { Component } from "react";
import apiClient from "../services/authApiClient";
import apiClientNotAuth from "../services/apiClient";
import { createErrorNotification } from "../helpers"
import 'react-notifications/lib/notifications.css';

const { Consumer, Provider } = React.createContext();

export const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return (
        <Consumer>
          {authProvider => (
            <Comp 
              isLoading={authProvider.isLoading} 
              isLoggedIn={authProvider.isLoggedIn}
              isLoggedOut={authProvider.isLoggedOut}
              error={authProvider.error}
              user={authProvider.user}
              logout={authProvider.logout}
              login={authProvider.login} 
              signup={authProvider.signup} 
              updateUserProfile={authProvider.updateUserProfile}
              addToFavourites={authProvider.addToFavourites}
              removeFromFavourites={authProvider.removeFromFavourites}
              {...this.props}
            />
          )}
        </Consumer>
      )
    }
  }
} 

class AuthProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'loading',
      user: null,
      renderChild: false,
      error: null,
    }
  }

  async componentDidMount() {
    try {
      const user = await apiClient.me()
      this.setState({
        status: 'loggedIn',
        user,
        renderChild: true,
        error: null
      })
    } catch (e) {
      this.setState({
        status: 'loggedOut',
        user: null,
        renderChild: true
      })  
    }
  }

  login = async ({ email, password }) => {
    try {
      this.setState({
        status: 'loading',
        user: null,
        error: null,
      })
      const user = await apiClient.login({ email, password })
      this.setState({
        status: 'loggedIn',
        user,
      })

    } catch (e) {
      this.setState({
        status: 'loggedOut',
        user: null,
        error: e.response.status
      })  
    }
  }

  signup = async ({ email, password  }) => {
    try {
      this.setState({
        status: 'loading',
        user: null,
        error: null,
      })
      const user = await apiClient.signup({ email, password })
      this.setState({
        status: 'loggedIn',
        user,
      })

    } catch (e) {
      this.setState({
        status: 'loggedOut',
        user: null,
        error: e.response.status,
      })  
    }
  }

  addToFavourites = async ({id,type, userID}) => {
    try {
      const user = await apiClientNotAuth.addToFavourites(id,type,userID)
      this.setState({
        status: 'loggedIn',
        user,
        error: null,
      })
      console.log(user)
    } catch (e) {
        this.setState({
          status: 'loggedOut',
          user: null,
          error: e.response.status,
      })
    }
  }

  removeFromFavourites = async ({id,type, userID}) => {
    try {
      const user = await apiClientNotAuth.removeFromFavourites(id,type, userID)
      console.log(user)
      this.setState({
        status: 'loggedIn',
        user,
        error: null,
      })
    } catch (e) {
        this.setState({
          status: 'loggedOut',
          user: null,
          error: e.response.status,
      }) 
    }
  }

  updateUserProfile = async (userInfo) => {
    try {
      const user = await apiClient.updateUserProfile(userInfo)
      this.setState({
        user,
      })
    } catch (e) {
      this.setState({
        user: null,
        error: e.response.status,
      })  
    }
  }

  logout = async () => {
    try {
      await apiClient.logout()
      this.setState({
        status: 'loggedOut',
        user: null,
        error: null,
      })

    } catch (e) {
      this.setState({
        error: e.response.status,
      })
    }
  }

  render() {
    const { user, status, renderChild, error } = this.state;
     
    return (
      <>
        {renderChild 
          ? (
              <Provider value={{ 
                isLoading: status === 'loading',
                isLoggedIn: status === 'loggedIn',
                isLoggedOut: status === 'loggedOut',
                user,
                error,
                login: this.login, 
                signup: this.signup,
                updateUserProfile: this.updateUserProfile,
                logout: this.logout,
                addToFavourites: this.addToFavourites,
                removeFromFavourites: this.removeFromFavourites,
            }}>
              { (status !== 'loading' && error) && <div>{createErrorNotification(error)}</div>}
              {this.props.children}

            </Provider>) 
        : "Loading" }
      </>
    )
  }
}

export default AuthProvider;