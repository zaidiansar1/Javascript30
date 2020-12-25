const images = document.querySelectorAll('p > img');

// console.log(images);

const handle = ()=>{

    images.forEach(image => {
        
        const slider = scrollY + innerHeight;

        const imgActive = image.offsetTop + image.height/2;

        const imgInactive = scrollY < image.offsetTop + image.height/2;

        // console.log(image, imgInactive);

        if (slider > imgActive && imgInactive) {
            image.classList.remove('slide-in');
            image.classList.add('active');
        }
        else {
            image.classList.add('slide-in');
            image.classList.remove('active');
        }
    });
    
}


images.forEach(()=>{
    window.addEventListener('scroll', handle);
})



