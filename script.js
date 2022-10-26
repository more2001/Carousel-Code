const carousel_images = document.querySelector('.image-slider');
const buttons = document.querySelectorAll('.btn');
const numberOfImg = document.querySelectorAll('.image-slider img').length;

let ImageIndex = 1;
let translateX = 0;

buttons.forEach((button) => {
    button.addEventListener('click', (e)=> {
        if (e.target.id === 'previous') {
            if (ImageIndex !== 1) {
                ImageIndex--;
                translateX += 1100;
            }

            //if first image of carousel and previous is clicked then it will move to the last image of carousel
            else{
                ImageIndex = numberOfImg;
                translateX-=1100*(numberOfImg-1);
            }


        }else{

            if (ImageIndex !== numberOfImg) {
                ImageIndex++;
                translateX -=1100;
            }

            //if last image of carousel and next is clicked then it will move to the first image of carousel
            else{
                ImageIndex = 1;
                translateX = 0;
            }
        }

        carousel_images.style.transform = `translateX(${translateX}px)`;
    })
})