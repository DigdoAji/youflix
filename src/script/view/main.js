import $ from "jquery";
import DataSource from "../data/data-source.js";

const main = () => {
  const inputSearch = document.querySelector("#inputSearch");
  const buttonSearch= document.querySelector("#buttonSearch");
  const contentItem = document.querySelector(".content-item");
  const btnTV = document.querySelector(".btn-tv");
  const btnMovie = document.querySelector(".btn-movie");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchContent(inputSearch.value);
      renderResult(result);
    } catch (messageError) {
      fallbackResult(messageError);
    }
  };
  $(buttonSearch).on("click", onButtonSearchClicked);

  const renderResult = (results) => {
    $(contentItem).html("");
    results.forEach((item) => {
      const posterImage = "https://image.tmdb.org/t/p/w500/";
      const {
        poster_path,
        vote_average,
        original_title,
        original_name,
        first_air_date,
        release_date,
        overview,
      } = item;

      const itemElement = document.createElement("div");
      $(itemElement).attr("class", "content-list");
      $(itemElement).html(`
               <h2>${original_title ? original_title : original_name}</h2>
               <img class="poster-content" src="${poster_path? posterImage + poster_path
                   : "http://via.placeholder.com/1080x1580"
               }" alt="Poster-Image"/>
                <div class="content-info">
                  <h4>${vote_average}</h4>
                  <h2>Release: ${
                    release_date ? release_date : first_air_date
                  }</h2>
                  <h3>Overview</h3>
                  <p>${overview}</p>
                </div>
                `);
      $(contentItem).append(itemElement);
    });
  };

  $(btnTV).on("click", () => {
    $("#change-text").text("Find Your TV Series");
    $(inputSearch).attr("placeholder", "Search Keyword TV Series Here");
  });

  $(btnMovie).on("click", () => {
    $("#change-text").text("Find Your Movie");
    $(inputSearch).attr("placeholder", "Search Keyword Movie Here");
  });

  const fallbackResult = (messageError) => {
    alert(`${messageError}`);
  };
};

export default main;
