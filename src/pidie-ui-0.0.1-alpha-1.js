
var applications = {
    name: "pidie";
    version: "0.0.1-alpha-1";
    author: "Tedir Ghazali";
    license: "Apache License 2.0";
}

var Navbar = function () {

    var navbar = {}
    
    navbar.navigasi = function () {
        alert('saya');
    }

    navbar.init = function () {
        this.navigasi();
    }

    window.onload = function () {
        navbar.init();
    }

    return navbar;

}();
