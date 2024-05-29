let homebtn = document.querySelector('#homebtn')
let bodycontainer = document.querySelector('.bodyContainer')
let headContainer = document.querySelector('.headContainer')


let showEvent = function(){
    // console.log(event.target)
    event.target.style.transform = `scale(0)`;
    event.target.style.opacity = `0`;
    bodycontainer.style.transform = `scale(1)`;
    bodycontainer.style.opacity = `1`;
    headContainer.style.transform = `scale(1)`;
    headContainer.style.opacity = '1'
    window.scrollTo({top:0})
}

homebtn.addEventListener('click', showEvent)


let imgBox = document.querySelector('.imgBox')
let dataLocation = Number(imgBox.getAttribute('data-location'))
let imgOne = imgBox.children[0]
let imgTwo = imgBox.children[1]
let imgThree = imgBox.children[2]
let imgFour = imgBox.children[3]
let imgFive = imgBox.children[4]
let imgSix = imgBox.children[5]
let imgSeven = imgBox.children[6]
let imgEight = imgBox.children[7]


let IntervalEvent;
    function startInterval(){
        IntervalEvent = setInterval(()=>{
        if(dataLocation === 0){
            dataLocation -= 900;
            imgBox.setAttribute('data-location', dataLocation)
            imgOne.style.opacity = 0
            imgTwo.style.opacity = 1
        }else if(dataLocation === -6300){
            dataLocation += 6300;
            imgBox.setAttribute('data-location', dataLocation)
            imgEight.style.opacity = 0
            imgOne.style.opacity = 1
        }
        else{
            if(dataLocation === -900){
                imgTwo.style.opacity = 0;
                imgThree.style.opacity = 1;
            }
            if(dataLocation === -1800){
                imgThree.style.opacity = 0;
                imgFour.style.opacity = 1;
            }
            if(dataLocation === -2700){
                imgFour.style.opacity = 0;
                imgFive.style.opacity = 1;
            }
            if(dataLocation === -3600){
                imgFive.style.opacity = 0;
                imgSix.style.opacity = 1;
            }
            if(dataLocation === -4500){
                imgSix.style.opacity = 0;
                imgSeven.style.opacity = 1;
            }
            if(dataLocation === -5400){
                imgSeven.style.opacity = 0;
                imgEight.style.opacity = 1;
            }
            dataLocation -= 900;
            imgBox.setAttribute('data-location', dataLocation)
        }
    }, 3000);
}

function stopInterval(){
    clearInterval(IntervalEvent)
}

let playImg = document.querySelector('#playImg')
let stopImg = document.querySelector('#stopImg')
let previousImg = document.querySelector('#previousImg')
let nextImg = document.querySelector('#nextImg')

startInterval();

playImg.addEventListener('click', ()=>{
    startInterval();
    playImg.style.opacity = '0.2'
    playImg.style.cursor = 'not-allowed'
    stopImg.style.opacity = '1'
    stopImg.style.cursor = 'pointer'
    previousImg.style.opacity = '0.2'
    previousImg.style.cursor = 'not-allowed'
    nextImg.style.opacity = '0.2'
    nextImg.style.cursor = 'not-allowed'
})
stopImg.addEventListener('click', ()=>{
    stopInterval();
    playImg.style.opacity = '1'
    playImg.style.cursor = 'pointer'
    stopImg.style.opacity = '0.2'
    stopImg.style.cursor = 'not-allowed'
    previousImg.style.opacity = '1'
    previousImg.style.cursor = 'pointer'
    nextImg.style.opacity = '1'
    nextImg.style.cursor = 'pointer'
})


nextImg.addEventListener('click', (event)=>{
    if(-6300 < dataLocation && dataLocation <= 0){
        dataLocation -= 900;
        imgBox.setAttribute('data-location', dataLocation)

        if(dataLocation === -900){
            imgOne.style.opacity = 0
            imgTwo.style.opacity = 1
            event.target.previousElementSibling.style.opacity = '1'
            event.target.previousElementSibling.style.cursor = 'pointer'
        }
        if(dataLocation === -1800){
            imgTwo.style.opacity = 0;
            imgThree.style.opacity = 1;
        }
        if(dataLocation === -2700){
            imgThree.style.opacity = 0;
            imgFour.style.opacity = 1;
        }
        if(dataLocation === -3600){
            imgFour.style.opacity = 0;
            imgFive.style.opacity = 1;
        }
        if(dataLocation === -4500){
            imgFive.style.opacity = 0;
            imgSix.style.opacity = 1;
        }
        if(dataLocation === -5400){
            imgSix.style.opacity = 0;
            imgSeven.style.opacity = 1;
        }
    }
    if(dataLocation===-6300){
        event.target.style.opacity = '0.2'
        event.target.style.cursor = 'not-allowed'            
        event.target.previousElementSibling.style.opacity = '1'
        event.target.previousElementSibling.style.cursor = 'pointer'
        imgSeven.style.opacity = 0;
        imgEight.style.opacity = 1;
    }
    
})

previousImg.addEventListener('click', (event)=>{
    if(-6300 <= dataLocation && dataLocation < 0){
        dataLocation += 900;
        imgBox.setAttribute('data-location', dataLocation)

        if(dataLocation === -900){
            imgThree.style.opacity = 0
            imgTwo.style.opacity = 1
        }
        if(dataLocation === -1800){
            imgFour.style.opacity = 0;
            imgThree.style.opacity = 1;
        }
        if(dataLocation === -2700){
            imgFive.style.opacity = 0;
            imgFour.style.opacity = 1;
        }
        if(dataLocation === -3600){
            imgSix.style.opacity = 0;
            imgFive.style.opacity = 1;
        }
        if(dataLocation === -4500){
            imgSeven.style.opacity = 0;
            imgSix.style.opacity = 1;
        }
        if(dataLocation === -5400){
            imgEight.style.opacity = 0;
            imgSeven.style.opacity = 1;
            event.target.nextElementSibling.style.opacity = '1'
            event.target.nextElementSibling.style.cursor = 'pointer'
        }
    }
    if(dataLocation===0){
    event.target.style.opacity = '0.2'
    event.target.style.cursor = 'not-allowed'
    event.target.nextElementSibling.style.opacity = '1'
    event.target.nextElementSibling.style.cursor = 'pointer'
    imgTwo.style.opacity = 0;
    imgOne.style.opacity = 1;
    }
})



let checkScroll = function(){
    let pageYOffset = window.pageYOffset;
    if(!pageYOffset){
        introduceClimbing.style.transform = `translateX(3000px)`
        introduce.style.transform = `translateX(3000px)`
        
        introduceClimbing2.style.transform = `translateX(-3000px)`
        introduce2.style.transform = `translateX(-3000px)`
    }
}

window.addEventListener('scroll', checkScroll)


let climbTitle = document.querySelector('.ClimbTitle')
let introduce = document.querySelector('.Introduce')
let introduceClimbing = document.querySelector('#IntroduceClimbing')
let introduce2 = document.querySelector('.Introduce2')
let introduceClimbing2 = document.querySelector('#IntroduceClimbing2')

window.addEventListener('scroll', function(){
    if(this.scrollY > 1300){
        introduceClimbing.style.transform = `translateX(-3000px)`
    }
})
window.addEventListener('scroll', function(){
    if(this.scrollY > 1300){
        introduce.style.transform = `translateX(-3000px)`
    }
})
window.addEventListener('scroll', function(){
    if(this.scrollY > 2200){
        introduceClimbing2.style.transform = `translateX(3000px)`
    }
})
window.addEventListener('scroll', function(){
    if(this.scrollY > 2200){
        introduce2.style.transform = `translateX(3000px)`
    }
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

let showVideoSpeed = document.querySelector('#showVideoSpeed')
let showVideoBouldering = document.querySelector('#showVideoBouldering')
let showVideoLead = document.querySelector('#showVideoLead')
let showVideoIn = document.querySelector('#showVideoIn')
let showVideoOut = document.querySelector('#showVideoOut')
let video1 = document.querySelectorAll('.video')[0]
let video2 = document.querySelectorAll('.video')[1]
let video3 = document.querySelectorAll('.video')[2]
let video4 = document.querySelectorAll('.video')[3]
let video5 = document.querySelectorAll('.video')[4]

showVideoOut.addEventListener('click', ()=>{
    if(video1.style.display === 'none'){
        video1.style.display = 'inherit'
    }else{
        video1.style.display = 'none'
    }
})


showVideoIn.addEventListener('click', ()=>{
    if(video2.style.display === 'none'){
        video2.style.display = 'inherit'
    }else{
        video2.style.display = 'none'
    }
})

showVideoSpeed.addEventListener('click', ()=>{
    if(video3.style.display === 'none'){
        video3.style.display = 'inherit'
    }else{
        video3.style.display = 'none'
    }
})

showVideoBouldering.addEventListener('click', ()=>{
    if(video4.style.display === 'none'){
        video4.style.display = 'inherit'
    }else{
        video4.style.display = 'none'
    }
})

showVideoLead.addEventListener('click', ()=>{
    if(video5.style.display === 'none'){
        video5.style.display = 'inherit'
    }else{
        video5.style.display = 'none'
    }
})

