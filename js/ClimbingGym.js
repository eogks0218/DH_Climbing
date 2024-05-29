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

const GyeonggiTitle = document.querySelectorAll('.GyeonggiTitle');
GyeonggiTitle.forEach(title => {
    title.addEventListener('click', () => {
        // 클릭된 타이틀의 내용 선택
        const content = title.nextElementSibling;
        
        // 모든 내용 숨기기 (현재 클릭된 내용 제외)
        document.querySelectorAll('.GyeonggiContent').forEach(otherContent => {
            if (otherContent !== content) {
                otherContent.style.opacity = '0';
                otherContent.style.visibility = 'hidden';
            }
        });

        // 클릭된 타이틀의 내용 표시/숨기기
        if (content.style.opacity === '1') {
            content.style.opacity = '0';
            content.style.visibility = 'hidden';
        } else {
            content.style.opacity = '1';
            content.style.visibility = 'visible';
        }
    });
});

const SeoulH3 = document.querySelectorAll('.SeoulH3');
SeoulH3.forEach(h3 => {
    h3.addEventListener('click', () => {
        const content = h3.nextElementSibling;
        document.querySelectorAll('.SeoulUl').forEach(otherContent => {
            if (otherContent!== content) {
                otherContent.style.display = 'none';
            }
        })
        const displayStyle = getComputedStyle(content).display;
        if (displayStyle === 'none') {
            content.style.display = 'flex';
        } else {
            content.style.display = 'none';
        }
    })
})

const SeoulTitle = document.querySelectorAll('.SeoulTitle');
SeoulTitle.forEach(title => {
    title.addEventListener('click', () => {
        // 클릭된 타이틀의 내용 선택
        const content = title.nextElementSibling;
        
        // 모든 내용 숨기기 (현재 클릭된 내용 제외)
        document.querySelectorAll('.SeoulContent').forEach(otherContent => {
            if (otherContent !== content) {
                otherContent.style.opacity = '0';
                otherContent.style.visibility = 'hidden';
            }
        });

        // 클릭된 타이틀의 내용 표시/숨기기
        if (content.style.opacity === '1') {
            content.style.opacity = '0';
            content.style.visibility = 'hidden';
        } else {
            content.style.opacity = '1';
            content.style.visibility = 'visible';
        }
    });
});