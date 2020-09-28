class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <!-- footer start -->
        <footer class="footer">
            <div class="footer_top"></div>
            <div class="copy-right_text wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".3s">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <p class="copy_right text-center">
                                Copyright &copy;<script>
                                document.write(new Date().getFullYear());
                                </script>
                                All rights reserved | Masagis | This template is inspired from
                                <a href="https://github.com/anewlens/foodima" target="_blank">Foodima</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!--/ footer end  -->`;
    }
}

customElements.define("footer-bar", FooterBar);