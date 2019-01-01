export function post() {
    
}

export function backToTop() {
    const scrollContainerIsBody = document.body
    const scrollDocumentElement = scrollContainerIsBody && document.documentElement

    const backtop = document.querySelector('.pd-back-to-top') || ''
    if(backtop.classList.contains('hidden')){ } else {
        backtop.classList.add('hidden')
    }
    let hidden = true

    const scrollEmitter = scrollContainerIsBody ? window : document.body
    scrollEmitter.addEventListener('scroll', adapt)
    adapt()

    function adapt () {
      if(getScrollTop() >= 1){
        if (!hidden) { return }
        if(backtop.classList.contains('hidden')){
            backtop.classList.remove('hidden')
        }
        hidden = false
      } else{
        if (hidden) { return }
        backtop.classList.add('hidden')
        hidden = true
      }
    }

    if(backtop != ''){
        backtop.addEventListener('click', event => {
            event.preventDefault()
            scrollUp()
        })
    }

    function scrollUp () {
        const onClickScrollTo = 0
        const scrollTo = typeof onClickScrollTo === 'function' ? onClickScrollTo() : onClickScrollTo
        const { performance, requestAnimationFrame } = window
        if (1000 <= 0 || typeof performance === 'undefined' || typeof requestAnimationFrame === 'undefined') {
            return setScrollTop(scrollTo)
        }
        const start = performance.now()
        const initScrollTop = getScrollTop()
        const pxsToScrollBy = initScrollTop - scrollTo

        requestAnimationFrame(step)

        function step (timestamp) {
            const progress = Math.min((timestamp - start) / 1000, 1)
            setScrollTop(initScrollTop - Math.round(inOutSine(progress) * pxsToScrollBy))
            if (progress < 1) { requestAnimationFrame(step) }
        }
    }
    function getScrollTop () {
        return document.body.scrollTop || (scrollDocumentElement && document.documentElement.scrollTop || 0)
    }
  
    function setScrollTop (value) {
        document.body.scrollTop = value
        if (scrollDocumentElement) {
          document.documentElement.scrollTop = value
        }
    }

    function inOutSine (n) {
        return 0.5 * (1 - Math.cos(Math.PI * n))
    }
  
}