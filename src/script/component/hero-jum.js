import ImageHero from "../../assets/images/img-heroo.svg";

class Hero extends HTMLElement {

    connectedCallback() {
        this.title = this.getAttribute("title") || null;
        this.description = this.getAttribute("description") || null;

        this.innerHTML = `
        <style>
            .jumbotron {
                border-radius: 16px;
                background-color: #f4f6ff;
                font-family: "Open Sans", sans-serif;
                margin-bottom: 48px;
            }

            .jumbotron h1 {
                width: 600px;
                color: $black;
                font-size: 42px;
                font-weight: 600;
            }

            .jumbotron p {
                width: 500px;
                color: #5f5d5d;
                font-size: 16px;
            }

            .jumbotron .btn {
                font-weight: bold;
            }

            .jumbotron .btn:hover {
                opacity: 0.8;
            }
        </style>
        <div data-aos="zoom-in">
            <div class="jumbotron pt-3 pb-0">
                <div class="row">
                    <div class="col-7 m-md-auto m-lg-auto p-sm-4">
                        <h1>${this.title}</h1>
                        <p class="d-sm-none d-lg-block">${this.description}</p>
                    </div>
                    <div class="col-5 col-sm-12 col-md-5">
                        <img src="${ImageHero}" width="450px" hieght="450px" alt="${this.title}">
                    </div>
                </div>
            </div>
        </div>`;
    }
}

customElements.define("hero-jum", Hero);