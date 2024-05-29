let backToTop = document.querySelector('#backtotop')

let checkScrollTop = function(){
    let pageYOffset = window.pageYOffset; // 스크롤되었는지
    if(pageYOffset){
        backToTop.style.opacity = 1
    }else{
        backToTop.style.opacity = 0
    }
}

let moveToTop = function(){
    if(window.pageYOffset>0){
        window.scrollTo({top:0, behavior:'smooth'})
    }
}

window.addEventListener('scroll', checkScrollTop)
backToTop.addEventListener('click', moveToTop)