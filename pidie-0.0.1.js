/*
* PidieJS 0.0.1
* 2018
* Tedir Ghazali
* Apache License 2.0
*/

class Pidie {
  constructor(){
    //this.id = id
  }
  // getters
  get panel(){
    return this.jendela();
  }
  // methods
  jendela() {
    document.getElementById("panel").addEventListener("click", function(){
      document.querySelector(".pd-panel").style.display = "block";
      document.querySelector(".pd-panel").appendChild(document.querySelector("form"));
      document.querySelector(".pd-panel").appendChild(document.querySelector(".pd-menu-left"));
      document.querySelector(".pd-panel").appendChild(document.querySelector(".pd-menu-right"));
      document.querySelector(".pd-nav").style.height = "60px";
      document.querySelector(".pd-menu-left").style.display = "block";
      document.querySelector(".pd-menu-right").style.display = "block";
    });
    document.querySelector(".pd-panel").addEventListener("click", function(){
      document.querySelector(".pd-panel").style.display = "none";
      document.querySelector(".pd-nav").appendChild(document.querySelector(".pd-menu-left"));
      document.querySelector(".pd-nav").appendChild(document.querySelector("form"));
      document.querySelector(".pd-nav").appendChild(document.querySelector(".pd-menu-right"));
      document.querySelector(".pd-nav").style.height = "auto";
      document.querySelector(".pd-menu-left").style.display = "";
      document.querySelector(".pd-menu-right").style.display = "";
    });
  }
}
