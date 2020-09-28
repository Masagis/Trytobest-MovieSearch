import 'bootstrap';
import "regenerator-runtime";
import "./scss/style.scss"
import "./script/component/header-nav.js";
import "./script/component/hero-jum.js";
import "./script/component/breadcrumb-detail.js";
import "./script/component/movie-detail.js";

import main from "./script/view/main.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
document.addEventListener("DOMContentLoaded", main);