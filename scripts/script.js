if (document.location.search.indexOf("geo_filter=") === -1) {
    var path = document.location.pathname;
    if (path.endsWith("/")) {
        path = path.substring(0, path.length - 1);
    }
    
    if (path === "" || path === "/r/popular") {
        var href = document.location.href;
        if (document.location.search === "") {
            href += "?";
        } else {
            href += "&";
        }
    
        href += "geo_filter=GLOBAL"
        document.location.href = href;
    }
}