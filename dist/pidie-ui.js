/*
* PidieUi 0.0.1-alpha-1
* 2019
* Tedir Ghazali
* Apache License 2.0
*/

(function() {

    "use strict";

    function init() {
        panel();
    }
    
    function panel() {
        var panel = document.getElementById("panel");
        var pdPanel = document.querySelector(".pd-panel");
        var pdNav = document.querySelector(".pd-nav");
        var pdForm = document.querySelector(".pd-nav-search");
        var pdMenuLeft = document.querySelector(".pd-menu-left");
        var pdMenuRight = document.querySelector(".pd-menu-right");
        panel.addEventListener("click", function(){
          pdPanel.style.display = "block";
          //(pdForm)? pdPanel.appendChild(pdForm): "";
          //(pdMenuLeft)? pdPanel.appendChild(pdMenuLeft): "";
          //(pdMenuRight)? pdPanel.appendChild(pdMenuRight): "";
          pdNav.style.height = "60px";
          pdMenuLeft.style.display = "block";
          pdMenuRight.style.display = "block";
        });
        pdPanel.addEventListener("click", function(){
          pdPanel.style.display = "none";
          //(pdMenuLeft)? pdNav.appendChild(pdMenuLeft): "";
         //(pdForm)? pdNav.appendChild(pdForm): "";
          //(pdMenuRight)? pdNav.appendChild(pdMenuRight): "";
          pdNav.style.height = "auto";
          pdMenuLeft.style.display = "";
          pdMenuRight.style.display = "";
        });
    }
    
    init();

})();
