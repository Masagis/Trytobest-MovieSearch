import BrandIcon from "../../assets/images/logo-cv.png";

class HeaderNav extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <style>
            .brand-icon {
                width: 220px;
            }
            
            .navbar .navbar-brand {
                font-family: "Fira Sans Condensed", sans-serif;
                font-size: 32px;
                margin-right: 400px;
            }

            .navbar .nav-item {
                margin-left: 32px;
            }

            .navbar .nav-item .active {
                font-weight: bold;
            }

            .navbar-nav .nav-sidebar-item {
                font-family: "Open Sans", sans-serif;
                font-size: 14px;
                margin-top: 6px;
            }
        </style>
        <header class="container my-3">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <a class="navbar-brand" href="#">
                    <img src="${BrandIcon}" class="brand-icon">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Movies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Cinemas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Promotion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Membership</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>`;
    }
}

customElements.define("header-nav", HeaderNav);