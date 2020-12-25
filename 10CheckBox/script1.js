const checkboxes = document.querySelectorAll('input[type="checkbox"]');

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

let lastChecked;

const allStrike = (e)=>{
    let inBetween = false;
}


checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleStrike);
    checkbox.addEventListener('click', allStrike);
});


