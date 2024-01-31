let h1 = document.querySelector("h1");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


h1.onmousemove = event => {

    let i = 0; 

    const  interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map( (letter, index) =>{
            if(index <= i ) {
                return event.target.dataset.value[index];

            }
            return letters[Math.floor(Math.random()*26)];

        })
        .join("")
        
        if(i >= event.target.dataset.value.length ) clearInterval(interval); 
        i+=1/5;
    }, 30);
    
}