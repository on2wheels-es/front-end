import React, { Component } from "react";
import apiClient from "../services/authApiClient";
import apiClientNotAuth from "../services/apiClient";

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
              user={authProvider.user}
              logout={authProvider.logout}
              login={authProvider.login} 
              signup={authProvider.signup} 
              createUserProfile={authProvider.createUserProfile}
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
    }
  }

  async componentDidMount() {
    try {
      const user = await apiClient.me()
      this.setState({
        status: 'loggedIn',
        user,
        renderChild: true
      })
    } catch (e) {
      this.setState({
        status: 'loggedOut',
        user: null,
        renderChild: true
      })  
      console.log(e);
    }
  }

  login = async ({ email, password }) => {

    try {
      this.setState({
        status: 'loading',
        user: null,
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
      })  
    }
  }

  signup = async ({ email, password  }) => {
    try {
      this.setState({
        status: 'loading',
        user: null,
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
      })  
    }
  }

  addToFavourites = async ({id,type, userID}) => {
    try {
      const user = await apiClientNotAuth.addToFavourites(id,type,userID)
      this.setState({
        status: 'loggedIn',
        user,
      })
      console.log(user)
    } catch (e) {
        this.setState({
          status: 'loggedOut',
          user: null,
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
      })
    } catch (e) {
        this.setState({
          status: 'loggedOut',
          user: null,
      }) 
    }
  }

  createUserProfile = async ({ firstName, lastName, birthday, gender }) => {
    try {
      this.setState({
        status: 'loading',
        user: null,
      })
      const user = await apiClient.createUserProfile({ firstName, lastName, birthday, gender })
      this.setState({
        status: 'loggedIn',
        user,
      })

    } catch (e) {
      this.setState({
        status: 'loggedOut',
        user: null,
      })  
    }
  }

  logout = async () => {
    try {
      await apiClient.logout()
      this.setState({
        status: 'loggedOut',
        user: null,
      })
    } catch (e) {

    }
  }

  render() {
    const { user, status, renderChild } = this.state;
     
    return (
      <>
        {renderChild 
          ? (
              <Provider value={{ 
                isLoading: status === 'loading',
                isLoggedIn: status === 'loggedIn',
                isLoggedOut: status === 'loggedOut',
                user,
                login: this.login, 
                signup: this.signup,
                createUserProfile: this.createUserProfile,
                logout: this.logout,
                addToFavourites: this.addToFavourites,
                removeFromFavourites: this.removeFromFavourites,
            }}>
              {this.props.children}
            </Provider>) 
        : "Loading" }
      </>
    )
  }
}

export default AuthProvider;