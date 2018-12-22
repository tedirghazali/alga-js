export function navbar() {
    Array.prototype.forEach.call(document.querySelectorAll('.pd-nav-toggle'), function(elem) {
        var toggleCollapse = document.querySelector(elem.getAttribute('data-target'));
        elem.onclick = function(e) {
            e.preventDefault();
            toggleCollapse.classList.toggle('pd-show');
        }
    })
}
