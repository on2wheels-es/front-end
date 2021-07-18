import axios from 'axios'

class ApiClient {
    constructor() {
        this.apiClient = axios.create({
            baseURL: 'http://localhost:5000'
        })
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

    // MOUNTAIN PASSES
    getAllMountainPasses() {
        return this.apiClient
                    .get('/mountainPasses')
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

    getMunicipality(id) {
        return this.apiClient
                    .get(`/municipalities/${id}`)
                    .then(({data}) => data)
    }
}

const apiClient = new ApiClient();

export default apiClient;