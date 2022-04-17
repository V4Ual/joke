// get Reference

const jock = document.querySelector('#jock');
const jockBtn = document.querySelector("#button");

//fat arrow function using it
const generateJock = () => {

    //this code write for given html for json content

    const setheaders = {
        headers: {
            Accept: "application/json"
        }
    }

    //when the use of fat arrow funtion one line code  without
    //{} and multiple line use the {} this error you can watch in consile

    //fetch api
    fetch('https://icanhazdadjoke.com', setheaders)
        .then((res) => res.json())
        .then((data) => {
            jock.innerHTML = data.joke; // this is import data.jock for api
        }).
    catch((error) => {
        console.log(error);
    })


    //using the ansysc method to use id

}


//fire the event 
jockBtn.addEventListener('click', generateJock);
generateJock();