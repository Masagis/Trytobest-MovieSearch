import "../component/breadcrumb-detail.js";

import DataSource from '../data/data-source.js';

class MovieItem extends HTMLElement {

    set movie(item) {
        this._item = item;
        this.render();
    }

    switchPage() {
        $('main').hide();
        $('.details').show();
    }

    render() {
        this.innerHTML = `
        <style>
            .card {
                font-family: "Open Sans", sans-serif;
                cursor: pointer;
                border : 0;
            }

            .card:hover {
                opacity: 1;
            }

            .card .card-img {
                height: 400px;
                object-fit: fill;
                border-radius: 8px;
            }

            .card .card-body {
                padding: 22px 0 22px 0;
            }

            .card .card-body .card-title {
                font-size: 14px;
            }

            .card .card-body .card-text {
                font-size: 12px;
            }

            .icon-svg {
                width: 11px;
                margin-top: -3px;
            }
        </style>
        <div class="col mb-4">
            <div data-aos="fade-up" data-aos-duration="500" data-aos-anchor=".jumbotron">
                <div class="card card-movie" data-id="${this._item.id}">
                    <img src="https://image.tmdb.org/t/p/w500/${this._item.poster_path}" class="card-img card-img-top" alt="${this._item.title}" />
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${this._item.title}</h5>
                        <p class="card-text">
                            <span class="float-left"> Release Date : ${this._item.release_date}</span>
                            <span class="float-right">Vote Average : ${this._item.vote_average} </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>`;

        // animasi dari aos
        let delay = 0;
        $('[data-aos]').each(function () {
            if ($(this).is(":visible") == true) {
                delay = delay + 400;
                $(this).attr('data-aos-delay', delay);
            }
        });

        // pemanggilan PreLoader Element
        const loaderElement = document.querySelector("#loader-text");

        // Datasource dari detail movie
        const detailMovie = async (id) => {
            loaderElement.style.display = 'block';

            try {
                const result = await DataSource.detailMovie(id);
                renderResult(result);
            } catch (message) {
                fallbackResult(message)
            }
        }

        // ketika sukses Callback
        const renderResult = results => {
            loaderElement.style.display = 'none';

            this.switchPage();

            // prose Breadcrumb di halaman detail
            const breadcrumbElement = document.querySelector("breadcrumb-detail");
            breadcrumbElement.currentPage = results.title;

            // Image
            $('#detailImage').attr("src", "https://image.tmdb.org/t/p/w500/" + results.backdrop_path);

            // proses pengiriman data ke detail movie
            const movieDetailElement = document.querySelector("movie-detail");
            const dataDetail = {
                'title': (results.title ? results.title : 'NaN'),
                'release_date': (results.release_date ? results.release_date : '-'),
                'popularity': (results.popularity ? results.popularity : 0),
                'vote_average': (results.vote_average ? results.vote_average : 0),
                'overview': (results.overview ? results.overview : '-'),
                'backdrop_path': (results.backdrop_path ? results.c : '-')
            }
            movieDetailElement.update = dataDetail;

            $(window).scrollTop(0);
        };

        // ketika gagal Callback
        const fallbackResult = message => {
            loaderElement.style.display = 'none';
            alert(message);
        };

        // proses letika Card  data movie diklik
        const cardRecipe = this.querySelector(".card-movie");
        cardRecipe.addEventListener("click", function () {
            const idMovie = this.getAttribute("data-id");
            detailMovie(idMovie);
        });
    }
}

customElements.define("movie-item", MovieItem);