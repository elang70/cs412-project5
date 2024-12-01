function load_style() {
    page_style = localStorage.getItem("page_stylesheet_name");

    if (page_style === null) {
        page_style = "index.css";
    }
    document.getElementById('stylesheet').setAttribute("href", page_style);
}

function light_mode() {
    localStorage.setItem("page_stylesheet_name", "index.css");
    load_style();
}

function dark_mode() {
    localStorage.setItem("page_stylesheet_name", "index2.css");
    load_style();
}

load_style();