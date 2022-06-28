const searchEl=document.querySelector('.search');
const searchInputEl=searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    console.log('scroll!');
    if (window.scrollY > 500){
        //배지 숨기기
        badgeEl.style.display='none';
    }
    else {
        //배지 보이기
        badgeEl.style.display='block';
    }
}, 300));
// throttle을 이용해서 0.3초 단위로 부하를 줌(이벤트가 너무 많이 실행되지 않도록)
// _.throttle(함수, 시간)