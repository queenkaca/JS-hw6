const person = {
    firstName: "Niko",
    lastName: "Nikolic",
    age: "100",
    favSeason: "summer"
}

console.log('1) click on window');
console.log('2) resize');
console.log('3) click on h1')

let h1 = document.querySelector('h1');
window.addEventListener("click", () => {
    h1.innerHTML = `${person.firstName}`;
    let h2 = document.querySelector('h2');
    h2.innerHTML = `${person.lastName}`;
})

window.addEventListener("resize", () => {
    Function();
})

const Function = () => {
    let h3 = document.querySelector('h3');
    let zbir = 0;
    let seasonNum = 0;
    switch(person.favSeason) {
        case "spring":
            person.age = parseInt(person.age);
            seasonNum = 1;
            zbir = person.age + seasonNum;
            h3.innerHTML = `Zbir tvojih godina i godisnjeg doba je: ${zbir}`;
        break;
        case "summer":
            person.age = parseInt(person.age);
            seasonNum = 2;
            zbir = person.age + seasonNum;
            h3.innerHTML = `Zbir tvojih godina i godisnjeg doba je: ${zbir}`;
        break;
        case "autumn":
            person.age = parseInt(person.age);
            seasonNum = 3;
            zbir = person.age + seasonNum;
            h3.innerHTML = `Zbir tvojih godina i godisnjeg doba je: ${zbir}`;
        break;
        case "winter":
            person.age = parseInt(person.age);
            seasonNum = 4;
            zbir = person.age + seasonNum;
            h3.innerHTML = `Zbir tvojih godina i godisnjeg doba je: ${zbir}`;
        break;
    }
}

let array = [1, 2, 3, 5, 7, 7, 4, 6];
let zbirArr = 0;
array.forEach((element) => {
    if(element > 5) {
        zbirArr += element;
    }
});


h1.addEventListener("click", () => {
    let h4 = document.querySelector('h4');
    h4.innerHTML = `Zbir elemenata niza ${array} koji su veci od 5 je ${zbirArr}`;
})
