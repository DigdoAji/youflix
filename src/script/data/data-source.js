class DataSource {
  static searchContent(inputKeyword) {
    const searchTitle = document.querySelector("#change-text");
    if (searchTitle.innerText == "Find Your TV Series") {
      this.mediaType = "tv";
    } else {
      this.mediaType = "movie";
    }

    const API_URL = "https://api.themoviedb.org/3/search/";
    const API_KEY = "?api_key=b5a3b7e381a47cdf575623656c8021a3";
    return fetch(`${API_URL}${this.mediaType}${API_KEY}&query=${inputKeyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject("Ups, keyword is not found or empty");
        }
      });
  }
}
export default DataSource;
