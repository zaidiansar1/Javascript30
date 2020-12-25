const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = []

const listWrapper = document.querySelector('.list-wrapper')
const input = document.querySelector('.form');


const getListHTML = (key)=>{

    const results = search(key);

    const html = results.reduce((str, city) => {
        const regex = new RegExp(key, 'gi');
        console.log(regex);
        const cityName = city.city.replace(regex, `<span class = "h1">${key}</span>`)
        const stateName = city.state.replace(regex, `<span class = "h1">${key}</span>`)
        str += `
            <div class='item'>${cityName}, ${stateName}</div>
        `
        return str;
    }, '')
    
    return html
}

function search(cname) {
    const reg = new RegExp(cname, 'gi');

    return cities.filter(o => {
        return o.city.match(reg) || o.state.match(reg);
    });
}

const fetchData = async ()=>{
    cities = await fetch(endpoint);
    cities = await cities.json();


    input.addEventListener("keyup", (e)=>{
        listWrapper.innerHTML = getListHTML(e.target.value);
    });
}


fetchData();