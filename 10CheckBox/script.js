const checkboxes = document.querySelectorAll('input[type="checkbox"]')
// console.log(checkboxes);

const handleStrike = ()=>{
    checkboxes.forEach((checkbox)=>{
        const label = checkbox.nextElementSibling;
        
        if (checkbox.checked) {
            label.classList.add('strike');
        }
        else {
            label.classList.remove('strike');
        }
    })
}

const allStrike = (e)=>{
    let inBetween = false;
    checkboxes.forEach((checkbox)=>{
        if (e.shiftKey && checkbox.checked) {
            inBetween = !inBetween;
        }
        
        if (inBetween) {
            checkbox.checked = true;
            handleStrike();
        }
    })
}


checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener('click', handleStrike);

    checkbox.addEventListener('click', allStrike);
})






