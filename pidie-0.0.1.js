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
  get slide(){
    return this.headerSlide();
  }
  get gridList(){
    return this.listGrid();
  }
  get filterSearch(){
    return this.searchFilter();
  }
  // methods
  jendela() {
    var panel = document.getElementById("panel");
    var pdPanel = document.querySelector(".pd-panel");
    var pdNav = document.querySelector(".pd-nav");
    var pdForm = document.querySelector(".pd-nav-search");
    var pdMenuLeft = document.querySelector(".pd-menu-left");
    var pdMenuRight = document.querySelector(".pd-menu-right");
    panel.addEventListener("click", function(){
      pdPanel.style.display = "block";
      (pdForm)? pdPanel.appendChild(pdForm): "";
      (pdMenuLeft)? pdPanel.appendChild(pdMenuLeft): "";
      (pdMenuRight)? pdPanel.appendChild(pdMenuRight): "";
      pdNav.style.height = "60px";
      pdMenuLeft.style.display = "block";
      pdMenuRight.style.display = "block";
    });
    pdPanel.addEventListener("click", function(){
      pdPanel.style.display = "none";
      (pdMenuLeft)? pdNav.appendChild(pdMenuLeft): "";
      (pdForm)? pdNav.appendChild(pdForm): "";
      (pdMenuRight)? pdNav.appendChild(pdMenuRight): "";
      pdNav.style.height = "auto";
      pdMenuLeft.style.display = "";
      pdMenuRight.style.display = "";
    });
  }
  headerSlide(){
    var headerSlider = document.querySelector('.pd-header-slide');
    var sliderItems = document.querySelector('.pd-slide-items');
    var sliderPrev = document.querySelector('.pd-slide-prev');
    var sliderNext = document.querySelector('.pd-slide-next');
    var sliderPagination = document.querySelector('.pd-slide-pagination');
    var slideWidth = headerSlider.clientWidth;
    var slideHeight = headerSlider.clientHeight;
    var slideLength = sliderItems.children.length;
    sliderItems.style.width = slideWidth * slideLength;
    var slidePagi = '';
    for(var i = 0; i < slideLength; i++){
      sliderItems.children[i].style.width = slideWidth + 'px';
      sliderItems.children[i].style.height = slideHeight + 'px';
      slidePagi += '<a href="#" class="pd-slide-pagi" data-slide="'+i+'"></a>';
    }
    sliderPagination.innerHTML = slidePagi;
    var currentIndex = 0;
    var minIndex = slideLength - 1;
    function gotoIndex(index) {
      if(index < 0){
        currentIndex = minIndex;
      } else if(index > minIndex){
        currentIndex = 0;
      } else{
        currentIndex = index;
      }
      sliderItems.style.left = '-'+ (100 * currentIndex) +'%';
    }
    function movetoIndex(e) {
      e.preventDefault();
      var linkIndex = e.target;
      gotoIndex(linkIndex.getAttribute('data-slide'));
      autoPlayIndex();
    }
    var autoIndex;
    function autoPlayIndex() {
      autoIndex = setInterval(function(){
        gotoIndex(currentIndex + 1);
      }, 6000);
    }
    function stopPlayIndex() {
      clearInterval(autoIndex);
    }
    sliderPrev.addEventListener('click', function(){
      gotoIndex(currentIndex - 1);
    })
    sliderNext.addEventListener('click', function(){
      gotoIndex(currentIndex + 1);
    })
    Array.prototype.forEach.call(sliderPagination.children, function (elem) {
      elem.onclick = movetoIndex;
    });
    autoPlayIndex();
    sliderItems.addEventListener('mouseover', function(){
      stopPlayIndex();
    })
    sliderItems.addEventListener('mouseout', function(){
      autoPlayIndex();
    })
  }
  listGrid(){
    let vm = this;
    var listGridFilter = document.querySelector('.pd-filter');
    var listFilterItem = document.querySelector('.pd-list-grid');
    var listButton = document.querySelector('.pd-button-list');
    var listFilter = document.querySelector('.pd-filter-list');
    var gridButton = document.querySelector('.pd-button-grid');
    var gridFilter = document.querySelector('.pd-filter-grid');
    //var listGridItem = document.querySelector('data-product');
    listButton.addEventListener('click', function(e){
      e.preventDefault();
      vm.removeClass(listGridFilter, 'pd-row');
      vm.removeClass(listGridFilter, 'pd-filter-grid');
      vm.addClass(listGridFilter, 'pd-filter-list');
      for(var i = 1;i <= listGridFilter.children.length;i++){
        vm.removeClass(document.querySelector('.pd-list-grid:nth-child('+i+')'), 'pd-col-md-4');
      }
    })
    gridButton.addEventListener('click', function(e){
      e.preventDefault();
      vm.addClass(listGridFilter, 'pd-row');
      vm.addClass(listGridFilter, 'pd-filter-grid');
      vm.removeClass(listGridFilter, 'pd-filter-list');
      for(var i = 1;i <= listGridFilter.children.length;i++){
        vm.addClass(document.querySelector('.pd-list-grid:nth-child('+i+')'), 'pd-col-md-4');
      }
    })
  }
  hasClass(el, className) {
    if (el.classList)
      return el.classList.contains(className)
    else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  }
  addClass(el, className) {
    if (el.classList)
      el.classList.add(className)
    else if (!this.hasClass(el, className)) el.className += " " + className
  }
  removeClass(el, className) {
    if (el.classList)
      el.classList.remove(className)
    else if (this.hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      el.className=el.className.replace(reg, ' ')
    }
  }
  searchFilter() {
    var verticalSearch = document.querySelector('.pd-vertical-filter input[type=search]');
    var horizontalSearch = document.querySelector('.pd-horizontal-filter input[type=search]');
    function searchItem(filter) {
      var inputCase = filter.value.toUpperCase();
      var productCase = document.querySelector('.pd-filter');
      var productItem = productCase.getElementsByClassName('pd-list-grid');
      for(var i = 0; i < productItem.length; i++){
        var titleItem = productItem[i].getElementsByClassName('pd-card-title')[0];
        if(titleItem.innerHTML.toUpperCase().indexOf(inputCase) > -1){
          productItem[i].style.display = "";
        } else{
          productItem[i].style.display = "none";
        }
      }
    }
    if(verticalSearch){
      verticalSearch.addEventListener('keyup', function(){
        searchItem(verticalSearch);
      })
    }
    if(horizontalSearch){
      horizontalSearch.addEventListener('keyup', function(){
        searchItem(horizontalSearch);
      })
    }
  }
}
