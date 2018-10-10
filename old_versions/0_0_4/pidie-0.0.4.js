/*
* PidieJS 0.0.4
* 2018
* Tedir Ghazali
* Apache License 2.0
*/

class Pidie {

  constructor(){}

  // methods v0.0.3
  imageCompare() {
    var x, i;
    x = document.getElementsByClassName("pd-image-compare-overlay");
    for (i = 0; i < x.length; i++) {
      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider, img, clicked = 0, w, h;
      w = img.offsetWidth;
      h = img.offsetHeight;
      document.querySelector('.pd-image-comparison').style.height = h + 'px';
      img.style.width = (w / 2) + "px";
      slider = document.createElement("div");
      slider.innerHTML = '<span class="pd-image-compare-icon">&#10094; &#10095;<span>';
      slider.setAttribute("class", "pd-image-compare-slider");
      img.parentElement.insertBefore(slider, img);
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      slider.addEventListener("mousedown", slideReady);
      window.addEventListener("mouseup", slideFinish);
      slider.addEventListener("touchstart", slideReady);
      window.addEventListener("touchstop", slideFinish);
      function slideReady(e) {
        e.preventDefault();
        clicked = 1;
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        clicked = 0;
      }
      function slideMove(e) {
        var pos;
        if (clicked == 0) return false;
        pos = getCursorPos(e)
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        slide(pos);
      }
      function getCursorPos(e) {
        var a, x = 0;
        e = e || window.event;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        img.style.width = x + "px";
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  }
  quotesSlideshow() {
    var slideIndex = 1;
    var quotes = document.querySelector('.pd-quotes');
    var quoteSlide = quotes.querySelector('.pd-quotes-slideshow');
    var prevQuotes = document.createElement('span')
    prevQuotes.classList.add('pd-quotes-prev');
    var nextQuotes = document.createElement('span')
    nextQuotes.classList.add('pd-quotes-next');
    prevQuotes.innerHTML = '❮';
    nextQuotes.innerHTML = '❯';
    quoteSlide.appendChild(prevQuotes);
    quoteSlide.appendChild(nextQuotes);
    prevQuotes.onclick = function(){
      plusSlides(-1);
    }
    nextQuotes.onclick = function(){
      plusSlides(1)
    }
    var dotQuotes = document.createElement('div');
    dotQuotes.classList.add('pd-quotes-dots');
    quotes.appendChild(dotQuotes);
    var dotContent = '';
    for(var j = 1; j <= quoteSlide.querySelectorAll('.pd-quotes-slide').length;j++){
      dotContent += '<span class="pd-quotes-dot" data-quote="'+j+'"></span>';
    }
    dotQuotes.innerHTML = dotContent;
    showSlides(slideIndex);
    Array.prototype.forEach.call(dotQuotes.querySelectorAll('.pd-quotes-dot'), function(elem){
      elem.onclick = function(){
        currentSlide(elem.getAttribute('data-quote'));
      }
    })
    setInterval(function(){
      plusSlides(1)
    }, 3000)
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("pd-quotes-slide");
      var dots = document.getElementsByClassName("pd-quotes-dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" pd-quotes-active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " pd-quotes-active";
    }
  }
  popupChat() {
    var chatButton = document.querySelector('.pd-chat-button');
    var chatOpen = document.querySelector('.pd-chat-popup');
    chatButton.addEventListener('click', function(e){
      e.preventDefault();
      if(chatOpen.style.display == 'block'){
        chatOpen.style.display = 'none';
      } else{
        chatOpen.style.display = 'block';
      }
    })
  }
  horizontalTimeline() {
    var timeline = document.querySelector('.pd-timeline-horizontal');
    if(timeline){
      
    }
  }
  equalHeight(kelas) {
    var sameHeight = document.querySelectorAll('.'+kelas);
    var allHeight = [];
    for(var i = 0; i < sameHeight.length; i++){
      allHeight.push(document.getElementsByClassName(kelas)[i].clientHeight);
    }
    var bagiHeight = Math.max(...allHeight);
    Array.prototype.forEach.call(sameHeight, function(elem){
      elem.style.height = bagiHeight + 'px';
    })
  }
  stickyNavigation(elemen) {
    var stickyElemen = document.querySelector(elemen);
    var stickyHeight = stickyElemen.offsetTop;
    window.onscroll = function(){
      if(window.pageYOffset > stickyHeight){
        stickyElemen.style.position = 'fixed';
        stickyElemen.style.top = '0';
        stickyElemen.style.left = '0';
        stickyElemen.style.width = '100%';
        stickyElemen.style.zIndex = '3001';
      } else{
        stickyElemen.style.position = 'relative';
      }
    }
  }
  backToTop() {
    var backToTopButton = document.querySelector('.pd-back-to-top');
    backToTopButton.style.opacity = "0.1";
    window.onscroll = function(){
      var scrollHeight = window.scrollY;
      if(scrollHeight < 100){
        backToTopButton.style.opacity = "0.1";
      } else{
        backToTopButton.style.opacity = "1";
      }
    }
    backToTopButton.addEventListener('click', function(e){
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    })
  }
  tableOfContents() {
    var tocPanel = document.querySelector('.pd-table-of-contents');
    var tocTajuk = document.querySelector('.pd-heading-of-contents');
    var tocJudul = document.createElement('h4');
    tocPanel.appendChild(tocJudul);
    tocPanel.style.border = '1px solid #aaaaaa';
    tocPanel.style.padding = '10px 10px 10px 10px';
    tocJudul.innerHTML = 'Table of Contents'
    tocJudul.style.textAlign = 'center';
    tocJudul.style.margin = '0px 0px 10px 0px';
    var tocOl = document.createElement('ul');
    tocOl.style.listStyle = 'none';
    tocOl.style.paddingLeft = '0';
    tocPanel.appendChild(tocOl);
    var tocTotalH2 = document.querySelectorAll('.pd-heading-of-contents h2').length;
    var tocContent = '';
    for(var i = 0; i < tocTotalH2; i++){
      var separator = '-';
      var arrHeading = [];
      for( var j = 0; j < tocTajuk.getElementsByTagName('h2')[i].innerText.length; j++ ){
				var c = tocTajuk.getElementsByTagName('h2')[i].innerText.charAt(j);
				arrHeading.push(c);
			}
      var mytxt = arrHeading.join('');
      var repsep = mytxt.replace(/^\s+|\s+$/g, "")
				.replace(/[_|\s]+/g, separator )
				.replace(/[^a-zA-z\u0400-\u04FF0-9-%-]+/g, "")
				.replace(/[-]+/g, separator )
				.replace(/^-+|-+$/g, "")
				.replace(/[-]+/g, separator );
      var idtxt = repsep;
      tocTajuk.getElementsByTagName('h2')[i].setAttribute('id', idtxt);
      tocContent += '<li style="margin-bottom:7px;"><span>'+(i + 1)+'</span> ';
      tocContent += '<a href="#'+tocTajuk.getElementsByTagName('h2')[i].getAttribute('id')+'">'+tocTajuk.getElementsByTagName('h2')[i].innerText+'</a>';
      var tocTotalH3 = document.querySelectorAll('.pd-heading-of-contents h3').length;
      if(tocTotalH3){
        tocContent += '<ul>';
        for(var k = 0; k < tocTotalH3; k++){
          tocContent += '<li>saya</li>';
        }
        tocContent += '</ul>';
      }
      tocContent += '</li>';
    }
    tocOl.innerHTML = tocContent;
    Array.prototype.forEach.call(tocOl.querySelectorAll('li a'), function(elem){
      elem.onclick = function(){
        if(location.hash !== ''){
          var hash = location.hash;
          window.location.hash = hash;
        }
      }
    })
  }

  // methods v0.0.2
  togglePassword(id) {
    var passwordField = document.querySelector(id);
    var passwordInput = passwordField.querySelector('.pd-input');
    var passwordToggle = passwordField.querySelector('.pd-button');
    passwordToggle.addEventListener('click', function(){
      if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        passwordToggle.innerHTML = '<i class="pd-icon">visibility_off</i>';
      } else{
        passwordInput.type = 'password';
        passwordToggle.innerHTML = '<i class="pd-icon">visibility</i>';
      }
    })
  }
  downloadLoading(id){
    var downloadButton = document.querySelector(id);
    downloadButton.addEventListener('click', function(){
      window.scrollTo(0, 0);
      var downloadPage = document.createElement("div");
      downloadPage.classList.add('pd-download-page');
      document.body.appendChild(downloadPage);
      document.body.classList.add('pd-download-scrollbar');
      var downloadColumn = '';
      downloadColumn += '<div class="pd-download-top"></div>';
      downloadColumn += '<div class="pd-row" style="margin-top:100px">';
      downloadColumn += '<div class="pd-col-md-4 pd-download-left"></div>';
      downloadColumn += '<div class="pd-col-md-4 pd-download-center"></div>';
      downloadColumn += '<div class="pd-col-md-4 pd-download-right"></div>';
      downloadColumn += '</div>';
      downloadPage.innerHTML= downloadColumn;
      var adTop = document.querySelector('.pd-ad-top');
      if(adTop){
        adTop.classList.remove('pd-hide');
        downloadPage.querySelector('.pd-download-top').appendChild(adTop);
      }
      var adLeft = document.querySelector('.pd-ad-left');
      if(adLeft){
        adLeft.classList.remove('pd-hide');
        downloadPage.querySelector('.pd-download-left').appendChild(adLeft);
      }
      var adRight = document.querySelector('.pd-ad-right');
      if(adRight){
        adRight.classList.remove('pd-hide');
        downloadPage.querySelector('.pd-download-right').appendChild(adRight);
      }
      var downloadLink = downloadButton.getAttribute('data-download-link');
      var downloadTime = downloadButton.getAttribute('data-download-time');
      var downloadBody = downloadPage.querySelector('.pd-download-center');
      var downloadContent = '';
      downloadContent += '<div class="pd-card pd-card-body">';
      downloadContent += '<h1 class="pd-download-count">'+Number(downloadTime)+'</h1>';
      downloadContent += '<p class="pd-download-loading">Please Wait, Download Loading...</p>';
      downloadContent += '<p class="pd-download-button pd-hide"><a href="'+downloadLink+'" class="pd-button pd-button-primary" style="text-decoration:none">Download Again</a><br/><button style="margin-top:10px" class="pd-button pd-button-danger pd-download-close">Cancel</button></p>';
      downloadContent += '</div>';
      downloadBody.innerHTML = downloadContent;
      var downloadCount = downloadBody.querySelector('.pd-download-count');
      var jumlahWaktu = Number(downloadTime);
      setInterval(function(){
        jumlahWaktu--;
        if(jumlahWaktu >= 0){
          downloadCount.innerHTML = jumlahWaktu
        }
        if(jumlahWaktu === 0){
          clearInterval(jumlahWaktu);
          location.assign(downloadLink);
          downloadBody.querySelector('.pd-download-loading').classList.add('pd-hide');
          downloadBody.querySelector('.pd-download-button').classList.remove('pd-hide');
        }
      }, 1000);
      downloadBody.querySelector('.pd-download-close').addEventListener('click', function(){
        downloadPage.classList.add('pd-hide');
        document.body.classList.remove('pd-download-scrollbar');
      })
    })
  }
  demoPage(id) {
    var pageDemo = document.querySelector(id);
    pageDemo.addEventListener('click', function(){
      window.scrollTo(0, 0);
      var createDemo = document.createElement('div');
      createDemo.classList.add('pd-demo-page');
      document.body.classList.add('pd-demo-scrollbar');
      document.body.appendChild(createDemo);
      var contentDemo = '';
      contentDemo += '<div class="pd-demo-nav"><div class="pd-row">';
      contentDemo += '<div class="pd-col-md-6">';
      contentDemo += '<h1 class="pd-demo-title">'+pageDemo.getAttribute('data-demo-title')+'</h1>';
      contentDemo += '</div>';
      contentDemo += '<div class="pd-col-md-5 pd-demo-top">';
      contentDemo += '</div>';
      contentDemo += '<div class="pd-col-md-1 pd-text-right">';
      contentDemo += '<button class="pd-demo-close pd-button pd-button-outline-danger">&times</button>';
      contentDemo += '</div>';
      contentDemo += '</div></div>';
      contentDemo += '<iframe src="'+pageDemo.getAttribute('data-demo-link')+'" class="pd-demo-frame"></iframe>';
      createDemo.innerHTML = contentDemo;
      var adTop = document.querySelector('.pd-ad-top');
      if(adTop){
        adTop.classList.remove('pd-hide');
        createDemo.querySelector('.pd-demo-top').appendChild(adTop);
      }
      var tinggi = createDemo.clientHeight;
      createDemo.querySelector('.pd-demo-frame').style.height = (tinggi - 80) + 'px';
      createDemo.querySelector('.pd-demo-close').addEventListener('click', function(){
        createDemo.classList.add('pd-hide');
        document.body.classList.remove('pd-demo-scrollbar');
      })
    });
  }
  galleryLightbox() {
    var no = 0, datasrc = '', datalightbox = 0;
    var lightLength = document.querySelectorAll('.pd-gallery').length - 1;
    Array.prototype.forEach.call(document.querySelectorAll('.pd-gallery'), function(item){
      item.setAttribute('data-lightbox-item', no++);
      item.onclick = function() {
        datasrc = item.getAttribute('src');
        datalightbox = item.getAttribute('data-lightbox-item');
        lightboxOpen(datasrc, datalightbox);
      }
    })
    function lightboxOpen(src, lightbox) {
      window.scrollTo(0, 0);
      datasrc = src;
      datalightbox = lightbox;
      var lightboxPage = document.createElement('div');
      lightboxPage.classList.add('pd-lightbox');
      document.body.appendChild(lightboxPage);
      document.body.classList.add('pd-lightbox-scrollbar');
      var lightboxContent = '';
      lightboxContent += '<div class="pd-lightbox-nav"><span class="pd-lightbox-close">&times</span></div>';
      if(datalightbox != 0){
        lightboxContent += '<div class="pd-lightbox-prev">&lsaquo;</div>';
      }
      if(datalightbox != Number(lightLength)){
        lightboxContent += '<div class="pd-lightbox-next">&rsaquo;</div>';
      }
      lightboxContent += '<div class="pd-lightbox-image"><img src="'+datasrc+'" height="400"/></div>';
      lightboxContent += '<div class="pd-lightbox-thumbnail"></div>';
      lightboxPage.innerHTML = lightboxContent;
      var lightboxThumbnail = lightboxPage.querySelector('.pd-lightbox-thumbnail');
      for(var i = Number(datalightbox); i < (Number(datalightbox) + 7); i++){
        if(document.getElementsByClassName('pd-gallery')[i]){
          var lightboxThumbnailImage = document.createElement('img');
          lightboxThumbnailImage.setAttribute('src', document.getElementsByClassName('pd-gallery')[i].getAttribute('src'));
          lightboxThumbnailImage.setAttribute('data-lightbox-thumbnail-item', document.getElementsByClassName('pd-gallery')[i].getAttribute('data-lightbox-item'));
          lightboxThumbnail.appendChild(lightboxThumbnailImage);
          lightboxThumbnailImage.onclick = function(e) {
            lightboxPage.classList.add('pd-hide');
            document.body.classList.remove('pd-lightbox-scrollbar');
            var datathumb = e.target.getAttribute('data-lightbox-thumbnail-item');
            datalightbox = Number(datathumb);
            datasrc = document.getElementsByClassName('pd-gallery')[datalightbox].getAttribute('src');
            lightboxOpen(datasrc, datalightbox);
          }
        }
      }
      lightboxPage.querySelector('.pd-lightbox-close').addEventListener('click', function(){
        lightboxPage.classList.add('pd-hide');
        document.body.classList.remove('pd-lightbox-scrollbar');
      })
      if(datalightbox != 0){
        lightboxPage.querySelector('.pd-lightbox-prev').addEventListener('click', function(){
          lightboxPage.classList.add('pd-hide');
          document.body.classList.remove('pd-lightbox-scrollbar');
          var lightboxPrev = Number(datalightbox) - 1; 
          datalightbox = lightboxPrev;
          datasrc = document.getElementsByClassName('pd-gallery')[datalightbox].getAttribute('src');
          lightboxOpen(datasrc, datalightbox);
        })
      }
      if(datalightbox != Number(lightLength)){
        lightboxPage.querySelector('.pd-lightbox-next').addEventListener('click', function(){
          lightboxPage.classList.add('pd-hide');
          document.body.classList.remove('pd-lightbox-scrollbar');
          var lightboxNext = Number(datalightbox) + 1; 
          datalightbox = Number(lightboxNext);
          datasrc = document.getElementsByClassName('pd-gallery')[datalightbox].getAttribute('src');
          lightboxOpen(datasrc, datalightbox);
        })
      }
    }
  }
  modalDialog() {
    Array.prototype.forEach.call(document.querySelectorAll('.pd-modal-open'), function(elem){
      elem.onclick = function() {
        var modalCreate = document.createElement('div');
        modalCreate.classList.add('pd-modal-show');
        document.body.appendChild(modalCreate);
        document.body.classList.add('pd-modal-scrollbar');
        var modalOpen = document.getElementById(elem.getAttribute('data-target'));
        modalCreate.appendChild(modalOpen);
        var modalClose = modalCreate.querySelector('.pd-modal-close');
        modalClose.addEventListener('click', function() {
          elem.parentNode.insertBefore(modalOpen, elem.nextElementSibling);
          modalCreate.remove();
          modalDimiss.remove();
          document.body.classList.remove('pd-modal-scrollbar');
        })
        var modalDimiss = document.createElement('span');
        modalDimiss.classList.add('pd-modal-dimiss');
        modalDimiss.innerHTML = '&times;';
        modalCreate.querySelector('.pd-card-header').appendChild(modalDimiss);
        modalDimiss.addEventListener('click', function() {
          elem.parentNode.insertBefore(modalOpen, elem.nextElementSibling);
          modalCreate.remove();
          modalDimiss.remove();
          document.body.classList.remove('pd-modal-scrollbar');
        })
      }
    })
  }
  titleLink() {
    var titleLink = document.querySelector('.pd-titlelink-input input[type=text]');
    var urlLink = document.querySelector('.pd-titlelink-output input[type=text]');
    var separator = '-';
    var special = {  
      ą:"a",Ą:"A",ę:"e",Ę:"E",ó:"o",Ó:"O",ś:"s",Ś:"S",ł:"l",Ł:"L",
      ż:"z",Ż:"Z",ź:"z",Ź:"Z",ć:"c",Ć:"C",ń:"n",Ń:"N",č:"c",ď:"d",
      ň:"n",ř:"r",š:"s",ť:"t",Š:"S",Œ:"O",Ž:"Z",š:"s",œ:"o",ž:"z",
      Ÿ:"Y",ÿ:"y",µ:"U",À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Æ:"A",
      Ç:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ð:"D",
      Ñ:"N",Ò:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",
      Ý:"Y",ß:"s",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",æ:"a",ç:"c",
      è:"e",é:"e",ê:"e",ë:"e",ì:"i",í:"i",î:"i",ï:"i",ð:"o",ñ:"n",
      ò:"o",ô:"o",õ:"o",ö:"o",ø:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",
      '¥':"Y",'&':"and"
    }
    var max = '';
    titleLink.addEventListener('keyup', function(){
      var editmax = '', txtmax= [], txtspe= [];
      var edittxt = titleLink.value;
      for( var i = 0, j = edittxt.length; i < j; i++ ){
				var c = edittxt.charAt(i);
				if( special.hasOwnProperty(edittxt.charAt(i))){
					txtspe.push(special[c]);
        } else{
					txtspe.push(c);
        }
			}
      var mytxt = txtspe.join('');
      var repsep = mytxt.replace(/^\s+|\s+$/g, "")
				.replace(/[_|\s]+/g, separator )
				.replace(/[^a-zA-z\u0400-\u04FF0-9-%-]+/g, "")
				.replace(/[-]+/g, separator )
				.replace(/^-+|-+$/g, "")
				.replace(/[-]+/g, separator );
      if(max != '' && mytxt.length > max){
        editmax = repsep.substring(0, max);
        txtmax = editmax.split(separator);
        txtmax.pop();
        editmax = txtmax.join(separator);
      } else{
        editmax = repsep;
      }
      var txt = editmax;
      urlLink.value = txt;
    })
  }
  generatePassword() {
    var generatePasswordInput = document.querySelector('.pd-generate-password input');
    var generatePasswordButton = document.querySelector('.pd-generate-password button');
    generatePasswordButton.addEventListener('click', function(){
      var generatePasswordChar = generatePasswordInput.getAttribute('data-generate-password') || '';
      var generatePasswordMax = generatePasswordInput.getAttribute('data-generate-max') || '';
      var characters = '', result = '';
      if(generatePasswordChar == 'all'){
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+|~-={}[]:";<>?,./';
      } else if(generatePasswordChar == 'alphabet'){
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      } else if(generatePasswordChar == 'uppercase'){
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      } else if(generatePasswordChar == 'lowercase'){
        characters = 'abcdefghijklmnopqrstuvwxyz';
      } else if(generatePasswordChar == 'numeric'){
        characters = '1234567890';
      } else if(generatePasswordChar == 'alphanumeric'){
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
      } else if(generatePasswordChar == 'special'){
        characters = '!@#$%^&*()_+|~-={}[]:";<>?,./';
      } else if(generatePasswordChar == 'alphaspecial'){
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+|~-={}[]:";<>?,./';
      } else {
        characters = '1234567890!@#$%^&*()_+|~-={}[]:";<>?,./';
      }
      for(var i = 0; i < generatePasswordMax; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      generatePasswordInput.value = result;
    })
  }

  // getters v0.0.1
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
  get tabs(){
    return this.tab();
  }
  get accordionCollapse(){
    return this.collapseAccordion();
  }
  get filterSort(){
    return this.sortFilter();
  }
  get filterPagination(){
    return this.paginationFilter();
  }

  // methods v0.0.1
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
      stopPlayIndex();
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
  tab() {
    var wrapTabs = document.querySelector('.pd-tabs');
    var activeTabs = 'active';
    var titleTabs = 'pd-tabs-title';
    var contentTabs = 'pd-tabs-content';
    var tabOpen = 0;
    var numTabs = wrapTabs.querySelectorAll('.'+titleTabs).length;
    var init = checkTabs(tabOpen);
    for (var i = 0; i < numTabs; i++) {
      wrapTabs.querySelectorAll('.' + titleTabs)[i].setAttribute('data-tab', i);
      if (i === init) openTabs(i);
    }
    function checkTabs(n) {
      return (n < 0 || isNaN(n) || n > numTabs) ? 0 : n;
    }
    function resetTabs() {
      Array.prototype.forEach.call(wrapTabs.querySelectorAll('.' + contentTabs), function(item) {
          item.style.display = 'none';
      });
      Array.prototype.forEach.call(wrapTabs.querySelectorAll('.' + titleTabs), function(item) {
          item.className = removeTabs(item.className, activeTabs);
      });
    }
    function removeTabs(str, cls) {
      var reg = new RegExp('(\ )' + cls + '(\)', 'g');
      return str.replace(reg, '');
    }
    function openTabs(n) {
      resetTabs();
      var i = checkTabs(n);
      wrapTabs.querySelectorAll('.'+titleTabs)[i].className += ' ' + activeTabs;
      wrapTabs.querySelectorAll('.'+contentTabs)[i].style.display = '';
    }
    wrapTabs.addEventListener('click', function(e){
      if (e.target.className.indexOf(titleTabs) === -1) return;
      e.preventDefault();
      openTabs(e.target.getAttribute('data-tab'));
    });
  }
  collapseAccordion() {
    var elemAccordion, thisAccordion;
    var pdAccordion = document.querySelector('.pd-accordion');
    if(pdAccordion){
      elemAccordion = pdAccordion;
      thisAccordion = true;
    } else{
      elemAccordion = document.querySelector('.pd-collapse');
      thisAccordion = false;
    }
    elemAccordion.addEventListener('click', function(e){
      if (e.target.className.indexOf('pd-accordion-title') === -1) {
        return;
      }
      e.preventDefault();
      if(thisAccordion == true){
        closeAccordion();
      }
      var nextAccordion = e.target.nextElementSibling;
      var height = nextAccordion.scrollHeight;
      if (nextAccordion.style.height === '0px' || nextAccordion.style.height === '') {
        nextAccordion.style.height = height + 'px';
      } else {
        nextAccordion.style.height = 0;
      }
    })
    function closeAccordion(){
      Array.prototype.forEach.call(elemAccordion.querySelectorAll('.pd-accordion-body'), function(item) {
        item.style.height = 0;
      });
    }
    if(thisAccordion == true){
      var target = elemAccordion.querySelectorAll('.pd-accordion-body')[0];
      if (target) {
        if (thisAccordion) closeAccordion();
        target.style.height = target.scrollHeight + 'px';
      }
    }
  }
  sortFilter() {
    var sortList = document.querySelector('.pd-filter');
    var sortValue = document.querySelector('.pd-horizontal-filter select');
    var sortItem = sortList.getElementsByClassName('pd-list-grid');
    document.querySelector('.pd-filter-total').innerHTML = 'Total items: '+sortItem.length;
    sortValue.addEventListener('change', function(){
      var pindah = true, harusPindah, hitungPindah = 0, x, y;
      while (pindah) {
        pindah = false;
        for(var i = 0;i < sortItem.length;i++){
          harusPindah = false;
          x = sortItem[i].getElementsByTagName('p')[0];
          y = sortItem[i + 1].getElementsByTagName('p')[0];
          if(sortValue.value == 'low'){
            if(Number(x.innerHTML) > Number(y.innerHTML)){
              harusPindah = true;
              break;
            }
          } else if(sortValue.value == 'high'){
            if(Number(x.innerHTML) < Number(y.innerHTML)){
              harusPindah = true;
              break;
            }
          } else{

          }
        }
        if (harusPindah) {
          sortItem[i].parentNode.insertBefore(sortItem[i + 1], sortItem[i]);
          pindah = true;
          hitungPindah ++;
        } else{
          if (hitungPindah == 0 && sortValue.value == "low") {
            sortValue.value = "high";
            pindah = true;
          }
        }
      }
    }, false)
  }
  paginationFilter() {
    var pageProduct = document.querySelector('.pd-filter');
    var pageFilter = document.querySelector('.pd-filter-pagination');
    var pageItem = pageProduct.getElementsByClassName('pd-list-grid');
    var pageJumlah = pageFilter.dataset.pagination;
    var pageSemua = pageItem.length;
    var pageBagi = pageSemua / pageJumlah;
    var current = 1;
    for(var j = 0;j < pageItem.length;j++){
      pageItem[j].style.display = 'none';
    }
    if(current == 1){
      pagi();
      pageFPNL(current);
      for(var k = 0;k < 6;k++){
        pageItem[k].style.display = '';
      }
    }
    function pageFPNL(fpnlcurrent){
      if(fpnlcurrent == 1){
        document.querySelector('.pd-pagination-first').style.display = 'none';
        document.querySelector('.pd-pagination-prev').style.display = 'none';
        document.querySelector('.pd-pagination-next').style.display = '';
        document.querySelector('.pd-pagination-last').style.display = '';
      } else if(fpnlcurrent == 2){
        document.querySelector('.pd-pagination-first').style.display = 'none';
        document.querySelector('.pd-pagination-prev').style.display = '';
        document.querySelector('.pd-pagination-next').style.display = '';
        document.querySelector('.pd-pagination-last').style.display = '';
      } else if(fpnlcurrent == (pageBagi.toFixed(0) - 1)){
        document.querySelector('.pd-pagination-first').style.display = '';
        document.querySelector('.pd-pagination-prev').style.display = '';
        document.querySelector('.pd-pagination-next').style.display = '';
        document.querySelector('.pd-pagination-last').style.display = 'none';
      } else if(fpnlcurrent == pageBagi.toFixed(0)){
        document.querySelector('.pd-pagination-first').style.display = '';
        document.querySelector('.pd-pagination-prev').style.display = '';
        document.querySelector('.pd-pagination-next').style.display = 'none';
        document.querySelector('.pd-pagination-last').style.display = 'none';
      } else{
        document.querySelector('.pd-pagination-first').style.display = '';
        document.querySelector('.pd-pagination-last').style.display = '';
        document.querySelector('.pd-pagination-prev').style.display = '';
        document.querySelector('.pd-pagination-next').style.display = '';
      }
    }
    var pagePagi = document.querySelector('.pd-pagination');
    Array.prototype.forEach.call(pagePagi.children, function (elem) {
      elem.onclick = function(e){
        e.preventDefault();
        var link = e.target.getAttribute('data-pagitem');
        if(link == 'first' || link == 'prev' || link == 'next' || link == 'last'){
          pageButton(link, current);
        } else{
          pageMove(link);
        }
      };
    });
    function pageButton(button, index){
      var btnone = 1, btncurrent;
      if (button == 'first') {
        pageMove(btnone);
      } else if(button == 'prev'){
        if(index != 0){
          btncurrent = (index + 1) - 1;
          pageMove(btncurrent);
        } else{
          pageMove(btnone);
        }
      } else if(button == 'next'){
        if(index > pageBagi.toFixed(0)){
          pageMove(pageBagi.toFixed(0));
        } else{
          btncurrent = (index + 1) + 1;
          pageMove(btncurrent);
        }
      } else if(button == 'last'){
        pageMove(pageBagi.toFixed(0));
      } else{
        pageMove(index);
      }
    }
    function pageMove(index){
      if (index < 1 ) {
        current = pageBagi.toFixed(0);
      } else if (index > pageBagi.toFixed(0)) {
        current = 1;
      } else {
        current = index - 1;
      }
      Array.prototype.forEach.call(pagePagi.getElementsByClassName('pd-pagination-link'), function(item) {
        item.classList.remove('active');
      });
      pagePagi.getElementsByClassName('pd-pagination-link')[current].classList.add('active');
      var jumlahPagi = Number(pageJumlah) * current;
      var jumlahProduct = jumlahPagi + Number(pageJumlah);
      if(jumlahProduct >= Number(pageItem.length)){
        jumlahProduct = Number(pageItem.length);
      }
      pageFPNL(current + 1);
      for(var m = 0;m < pageItem.length;m++){
        pageItem[m].style.display = 'none';
      }
      for(var l = jumlahPagi;l < jumlahProduct;l++){
        pageItem[l].style.display = '';
      }
    }
    function pagi(){
      var pageContent = '';
      pageContent += '<a href="#" class="pd-pagination-item pd-pagination-first" data-pagitem="first">&laquo;</a>';
      pageContent += '<a href="#" class="pd-pagination-item pd-pagination-prev" data-pagitem="prev">&#10094;</a>';
      for(var i = 1;i <= pageBagi.toFixed(0);i++){
        if(i == current){
          pageContent += '<a href="#" class="pd-pagination-item pd-pagination-link active" data-pagitem="'+i+'">'+i+'</a>';
        }
        if(i != current ){
          pageContent += '<a href="#" class="pd-pagination-item pd-pagination-link" data-pagitem="'+i+'">'+i+'</a>';
        }
      }
      pageContent += '<a href="#" class="pd-pagination-item pd-pagination-next" data-pagitem="next">&#10095;</a>';
      pageContent += '<a href="#" class="pd-pagination-item pd-pagination-last" data-pagitem="last">&raquo;</a>';
      pageFilter.innerHTML = '<div class="pd-pagination">'+pageContent+'</div>';
    }
  }
}
