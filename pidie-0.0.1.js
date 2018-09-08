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
    });
    document.querySelector(".pd-panel").addEventListener("click", function(){
      document.querySelector(".pd-panel").style.display = "none";
    });
  }
}
