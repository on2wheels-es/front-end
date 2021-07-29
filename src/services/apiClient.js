import axios from 'axios'

class ApiClient {
    constructor() {
        this.apiClient = axios.create({
            baseURL: process.env.REACT_APP_API_URI,
			withCredentials: true,
        })
    }

    // RESULTS
    getSearchResults(middleDateForApiRequest, idsForApiRequest) {
        return this.apiClient
                  .post(`/search`, { middleDateForApiRequest, idsForApiRequest })
                  .then(({data}) => data)
    }

    // ROUTES
    getAllRoutes() {
        return this.apiClient
                    .get('/routes')
                    .then(({data}) => data)
    }

    getRoute(id) {
        return this.apiClient
                    .get(`/routes/${id}`)
                    .then(({data}) => data)
    }

    drawBikeRoute(gpxFile) {
        return this.apiClient
                    .post(`/routes/drawBikeRoute`, {gpxFile})
                    .then(({data}) => data)
    }

    // MOUNTAIN PASSES
    getAllMountainPasses() {
        return this.apiClient
                    .get('/mountainPasses')
                    .then(({data}) => data)
    }

    getPopularMountainPasses() {
        return this.apiClient
                    .get('/mountainPasses/popular')
                    .then(({data}) => data)
    }

    getMountainPass(id) {
        return this.apiClient
                    .get(`/mountainPasses/${id}`)
                    .then(({data}) => data)
    }

    // MUNICIPALITIES
    getAllMunicipalities() {
        return this.apiClient
                   .get('/municipalities')
                   .then(({data}) => data)
    }

    getPopularMunicipalities() {
        return this.apiClient
                    .get('/municipalities/popular')
                    .then(({data}) => data)
    }

    getMunicipality(id) {
        return this.apiClient
                    .get(`/municipalities/${id}`)
                    .then(({data}) => data)
    }

    // FAVOURITES
    addToFavourites(id,type,userID) {
        return this.apiClient
                    .patch(`/addToFavourites/${id}/${type}`, {userID})
                    .then(({data}) => data)
    }

    removeFromFavourites(id,type,userID) {
        return this.apiClient
                    .patch(`/removeFromFavourites/${id}/${type}`, {userID})
                    .then(({data}) => data)
    }
}

const apiClient = new ApiClient();

export default apiClient;