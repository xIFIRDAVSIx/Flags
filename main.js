let img = document.getElementById('img')
let count = document.getElementById('count')
let inp = document.getElementById('inp')


fetch('https://restcountries.com/v3.1/all?fields=name,flags').then((data)=>{
    return data.json()
}).then((item)=>{
    item.forEach((counts)=>{
 
        count.innerHTML += 

        `<ul class = "ul">
            <li><img src="${counts.flags.png}"></li>
            <li>${counts.name.common}</li>
        </ul>`
        
    })
}).catch((err)=>{
    console.log(err);
    
})

inp.addEventListener('input', ()=>{
    let val = inp.value.toLowerCase()
    const counts = document.querySelectorAll('.ul')
    
    counts.forEach(item => {
        if (item.lastElementChild.textContent.toLowerCase().includes(val)) {
            item.classList.remove('hidden')
        }else{
            item.classList.add('hidden')
        }
    });
})
