const trigger = document.querySelectorAll('a');
const highlight = document.createElement('span');

document.body.appendChild(highlight);

highlight.classList.add('highlight');


const handleTrigger = (e)=>{
    const dimensions = e.target.getBoundingClientRect();

    const {height, width, x, y} = dimensions;

    highlight.style.width = `${width}px`;
    highlight.style.height = `${height}px`;
    highlight.style.left = `${scrollX+x}px`;
    highlight.style.top = `${scrollY+y}px`;
}

trigger.forEach((a) => {
    a.addEventListener('mouseenter', handleTrigger)
})
