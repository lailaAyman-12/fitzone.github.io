const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

/* Add To Favorite */
function toggleLike() {
    var likeIcon = document.getElementById('likeIcon');
    var button = document.querySelector('.btn:last-of-type');

    if (likeIcon.getAttribute('stroke') === 'currentColor') {
        likeIcon.setAttribute('stroke', 'transparent');
        button.style.backgroundColor = '#ecf2f5'; 
    } else {
        likeIcon.setAttribute('stroke', 'currentColor');
        button.style.backgroundColor = '#03cca2'; 
    }
}
