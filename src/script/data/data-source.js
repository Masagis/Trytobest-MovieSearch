//basic url
const baseUrl = "https://api.themoviedb.org/3"
const ApiKey = "701ab1a8735af2cb48b050d3192106ba";

class DataSource {

    static searchMovie(keyword) {
        return fetch(`${baseUrl}/search/movie?api_key=${ApiKey}&language=en-US&query=${keyword}&include_adult=false`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} Tidak ditemukan`)
                }
            })
    }

    static detailMovie(id) {
        return fetch(`${baseUrl}/movie/${id}?api_key=${ApiKey}&language=en-US`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`${id} Tidak ditemukan`)
                }
            })
    }
}

export default DataSource;