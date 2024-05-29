const ProsAndConsContentTitles = document.querySelectorAll(".ProsAndConsContentTitle");

ProsAndConsContentTitles.forEach(title => {
    title.addEventListener("click", () => {
        const contentId = title.id.replace("Title", "");
        const content = document.getElementById(contentId);

        if (content) {
            // 현재 보이는 상태인지 확인
            if (content.style.opacity == 1 || content.style.transform == "translateX(-2000px)") {
                // 현재 보이는 상태라면 숨기기
                content.style.opacity = 0;
                content.style.transform = "translateX(2000px)";
                title.style.color = "#747264";
                title.style.fontWeight = "normal";
            } else {
                // 다른 모든 설명문 숨기기
                ProsAndConsContentTitles.forEach(item => {
                    const otherContentId = item.id.replace("Title", "");
                    const otherContent = document.getElementById(otherContentId);
                    if (otherContent) {
                        otherContent.style.opacity = 0;
                        otherContent.style.transform = "translateX(2000px)";
                        item.style.color = "#747264";
                        item.style.fontWeight = "normal";
                    }
                });

                // 클릭된 제목에 해당하는 설명문 보이기
                content.style.opacity = 1;
                content.style.transform = "translateX(-2000px)";
                title.style.color = "#3C3633"
                title.style.fontWeight = "600";
            }
        }
    });
});

const EquipContentTitles = document.querySelectorAll(".EquipContentTitle");
EquipContentTitles.forEach(title => {
    title.addEventListener("mouseover", () => {
        const contentId = title.id.replace("Title", "");
        const content = document.getElementById(contentId);
        if(content){
            content.style.opacity = 1;
        }
    });
    title.addEventListener("mouseout", () => {
        const contentId = title.id.replace("Title", "");
        const content = document.getElementById(contentId);
        if(content){
            content.style.opacity = 0;
        }
    });
});

const TerminologyContentTitle = document.querySelectorAll(".TerminologyContentTitle");
TerminologyContentTitle.forEach(title => {
    title.addEventListener("click", ()=>{
        const contentId = title.id.replace("Title", "");
        const content = document.getElementById(contentId);
        if(content){
            if (content.style.opacity == 1) {
                // 현재 보이는 상태라면 숨기기
                content.style.opacity = 0;
                title.style.color = "#747264";
                title.style.fontWeight = "normal";
            } else {
                // 다른 모든 설명문 숨기기
                TerminologyContentTitle.forEach(item => {
                    const otherContentId = item.id.replace("Title", "");
                    const otherContent = document.getElementById(otherContentId);
                    if (otherContent) {
                        otherContent.style.opacity = 0;
                        item.style.color = "#747264";
                        item.style.fontWeight = "normal";
                    }
                });

                // 클릭된 제목에 해당하는 설명문 보이기
                content.style.opacity = 1;
                title.style.color = "#3C3633"
                title.style.fontWeight = "600";
            }
        }
    })
});

const aboutTitle = document.querySelectorAll('.aboutTitle');
aboutTitle.forEach(title=>{
    title.addEventListener('click', ()=>{
        const content = title.nextElementSibling;
        document.querySelectorAll('.aboutContent').forEach(otherContent => {
            if (otherContent !== content) {
                otherContent.style.display = 'none';
            }
            const displayStyle = getComputedStyle(content).display;
            if (displayStyle === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    })
})

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