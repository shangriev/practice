let offset = 0; //смещение от левого края;

const sliderLine = document.querySelector('.slider-line');

document.querySelector('.btn-after').addEventListener('click', function (){
    offset -= 256;
    if(offset < -1024 ) {
        offset = 0;
    }
    sliderLine.style.left = offset + 'px';
});

document.querySelector('.btn-before').addEventListener('click', function (){
    offset += 256;
    if(offset > 0 ) {
        offset = -1024;
    }
    sliderLine.style.left = offset + 'px';
});

