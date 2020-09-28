class Moviedetail extends HTMLElement {

  set update(value) {
    this.setAttribute('title', value.title);
    this.setAttribute('release_date', value.release_date);
    this.setAttribute('popularity', value.popularity);
    this.setAttribute('vote_average', value.vote_average);
    this.setAttribute('overview', value.overview);
    this.setAttribute('backdrop_path', value.backdrop_path);
    this.render();
  }

  render() {
    this.title = this.getAttribute("title") || null;
    this.release_date = this.getAttribute("release_date") || null;
    this.popularity = this.getAttribute("popularity") || null;
    this.vote_average = this.getAttribute("vote_average") || null;
    this.overview = this.getAttribute("overview") || null;
    this.backdrop_path = this.getAttribute("backdrop_path") || null;

    this.innerHTML = `
        <style>
            .breadcrumb {
                font-size: 10px;
                background-color: transparent;
                padding: 0;
            }
            .breadcrumb .breadcrumb-item a {
                color: #6c757d;
            }
            .breadcrumb .breadcrumb-item .active {
                color: #000000;
            }
        </style>
        <h5>${this.title}</h5>
        <div class="row">
          <div class="col-12 col-md-4">
            <span>Popularity : ${this.popularity}</span>
          </div>
          <div class="col-12 col-md-4">
            <span>Vote Average : ${this.vote_average}</span>
          </div>
          <div class="col-12 col-md-4">
            <span>Release Date : ${this.release_date}</span>
          </div>
          <div class="col-12 mt-3 text-justify">
            <p>${this.overview}</p>
          </div>
        </div>`;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("movie-detail", Moviedetail);