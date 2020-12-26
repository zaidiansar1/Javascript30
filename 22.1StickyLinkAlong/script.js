const menu = document.querySelectorAll('li');
const tip = document.querySelector('.drop-bg')
const drop_bg = document.querySelector('.drop-bg');

const highlight = document.createElement('span')

document.body.appendChild(highlight);



function handleDropDown(e) {
    this.querySelector('.dropDown').classList.add('dropDown1')
    highlight.classList.add('highlight')
    drop_bg.classList.add('drop-bg-active')
    const demo = this.querySelector('.dropDown');

    const dimensions = demo.getBoundingClientRect();

    const {height, width, x, y} = dimensions;


    tip.style.width = `${width}px`
    tip.style.height = `${height}px`
    tip.style.left = `${x}px`
    tip.style.top = `${y}px`

    const a = this.querySelector('a');
    const aDimensions = a.getBoundingClientRect();
    
    highlight.style.width = `${aDimensions.width}px`
    highlight.style.height = `${aDimensions.height}px`
    highlight.style.top = `${scrollY + aDimensions.y}px`
    highlight.style.left = `${scrollX + aDimensions.x}px`
}

function handleDropDownLeave() {
    this.querySelector('.dropDown').classList.remove('dropDown1')
    drop_bg.classList.remove('drop-bg-active')
}

menu.forEach((element)=> {
    element.addEventListener('mouseenter', handleDropDown)
    element.addEventListener('mouseleave', handleDropDownLeave)
})
