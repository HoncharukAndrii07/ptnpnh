const firstImage = document.querySelector('.first-image');
const LeftButton = document.querySelector('#Left_button');
const RightButton = document.querySelector('#Right_button');

let leftMargin = 0;

LeftButton.onclick = () => {
    leftMargin = leftMargin - 300
    firstImage.style.marginLeft = leftMargin + 'px';
}


RightButton.onclick = () => {
    leftMargin = leftMargin + 300
    firstImage.style.marginRight = leftMargin + 'px';
}