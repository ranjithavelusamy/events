console.log("aye")

const myFunction = (event) => {console.log(event.target)}
document.querySelector("h1").onclick = myFunction;
const showcontent = event => console.log(event.target.textcontent);


document.querySelector(".porcupine").onclick = showcontent;

document.querySelector(".panther").onclick = (event) => console.log(event.target.tagname)

document.querySelector(".penguin").onclick = (event) => console.log (event.target.textContent.toUppercase())

window.onclick = event =>console.log(event.target.textContent.toUppercase())

document.querySelector(".header").addEventListener("click", () => sayHi("ranj"));

const pelicanLove = () => {
    for (let i = 0; i < 3; i++) {
        console.log("I love pelicans!")
    }
}

document.querySelector(".pelican").addEventListener("click", pelicanLove)

const birdlove = animal => console.logs(`${animal} is a pretty boy`);

document.querySelector(".parrot").addEventListener("click",event => birdlove(event.target.textContent));
document.querySelector(".peacock").addEventListener("click",event =>birdlove(event.target.textContent));

const notAnteater = () => console.log("I am NOT a anteater")
const notArmdillo = () => console.log("I am NOT a armadillo")

document.querySelector(".pangolin").onclick = notAnteater;
document.querySelector(".pangolin").addEventListener("click", notArmdillo);

console.log(Array.from(document.querySelectorAll("tab"));

let x = document.querySelectorAll(".tab")
console.log(x)
let tabs = Array.from(x);


tabs.forEach(item => item.addEventListerner("click",() => alert(item.textcontent)))


document.querySelector()

const bestAnimal = animal => {console.log(`${animal}`is the best!`);}

let animalTabs = Array.from(document.queryselectorAll(".tab"));

animalTabs.for Each( tab -> tab.addEventListener("click",() -> bestAnimal(tab.textcomntent)))

const bestAnimal = animal -> {

console.log(animal.toLoweerCase() ==="panther") ? `${animal} is the jungle assassin` : `${animal}is the best);

// if (animal.toLowerCase() ==="panther") {
console.log('${animal} is the jungle assassin')

///


let animalTabs: Element[]

const setActive = (clickedTab) -> {
    animalTab.forEach(tab => tab.classList.remove("active"));
    clickedTab.classList.add("active")
    document.querySelector(".header__page-title").textContent = clickedTab.textContent;
}

animalTabs.forEach(tab -> tab.addEventListener("click",() -> setActive(tab)))

let animalcontent = Array.from(document.querySelectorAll("content"));

const findcontent = classToMatch => {
    animalcontent.forEach(contentDiv -
        
        
        if(contentDiv.classList.Contaibns(classToMatch)) {
         contentDiv.classList.add("featured")   

        }
    })
}

animalTab.forEach(tab -> tab.addEventListener("mouseenter", () -> findcontent(tab -> tab.addEventListener("mouseenter", () -> {
    console.log(tab.textContent,toLowerCase());
    findcontent(tab.textContent,toLowerCase());

}))

document.querySelector("#search");
searchInput.addEventListener("input", () =>console.log(document.querySelector("#search").value))

const findtab = () =>{
    animalTab.
}forEach(tab =>{
    if(tab.textContent.toLowerCase().contains(searchInput.value)) {
        tab classList.add("active")
    } else {
        tab.classList.remove('active')

    }
    })
    searchInput.addEventListener("input",findtab)

    let countries= ["Australia, sweden, pakistan"]

    countries.push("India")

    console.log(countries)