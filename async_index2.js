const jock = document.querySelector('#jock');
const jockBtn = document.querySelector("#button");

//fat arrow function using it
const generateJock = async() => {
    try {
        //this code write for given html for json content

        const setheaders = {
            headers: {
                Accept: "application/json"
            }
        }

        const res = await fetch('https://icanhazdadjoke.com', setheaders)
        const data = await res.json();
        jock.innerHTML = data.joke;
    } catch (err) {
        console.log(`the error id ${err}`);

    }



}


//fire the event 
jockBtn.addEventListener('click', generateJock);
generateJock();