const nav = document.querySelector('ul');

const navTop = nav.offsetTop;

const handleNav = ()=> {
    if (scrollY >= navTop) {
        document.body.classList.add('stick')
    }
    else {
        document.body.classList.remove('stick')
    }
}

window.addEventListener('scroll', handleNav)