class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `    
        <style>
        .search-container {
            max-width: 100%;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            border-radius: 5px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
            margin-bottom: 35px;
        }
        
        .search-container > input {
            width: 85%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid black;
            font-weight: bold;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid gray;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container >  input::placeholder {
            color: $gray-500;
            font-weight: normal;
        }
        
        .search-container > button {
            width: 13%;
            margin-left: auto;
            padding: 12px;
            background-color: #001D38;
            color: white;
            border-radius: 4px;
            text-transform: uppercase;
        }
        
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }        
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Find your favorite movies..." id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>`;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);