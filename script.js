
/*

navn, tlf, bilregistreringsnummer

diameter, type, 

montering av dekk

*/
const dekkHeaderEl = document.querySelector("#dekkHeader")
const dekkContainerEl = document.querySelector("#dekkContainer")

const changeShopDisplay = () => dekkContainerEl.style.display = dekkHeaderEl.style.display = dekkContainerEl.style.display === "none" ? "grid" : "none"
changeShopDisplay()

const info = {}

const infoButtonEl = document.querySelector("#infoButton")
const infoElArr = document.querySelectorAll(".info")


const personInfoEl = document.querySelector("#personInfo")
const questionsHeader = document.querySelector("#questionsHeader")

const changeQuestions = () => personInfoEl.style.display = questionsHeader.style.display = personInfoEl.style.display === "none" ? "flex" : "none"

infoButtonEl.onclick = () => {
    infoElArr.forEach(infoEl => {
        info[infoEl.type] = infoEl.value
    });

    changeQuestions()
    changeShopDisplay()
}


const dekkArr = [
    {
        diameter: 15,
        type: "vinterdekk",
        merke: "MICHELIN",
        bilde: "michlin_vinterdekk.png",
    },
    {
        diameter: 16,
        type: "sommerdekk",
        merke: "Continental",
        bilde: "continental_sommerdekk.jpg"
    },
    {
        diameter: 16,
        type: "piggdekk",
        merke: "MICHELIN",
        bilde: "michlin_piggdekk.png"
    },
    
]



dekkArr.forEach(dekk => {    
    const dekkEl = document.createElement("div")
    dekkEl.className = "dekkBox flex"

    const imgEl = document.createElement("img")
    imgEl.className = "dekkImg"
    imgEl.src = `${dekk.bilde}`
    dekkEl.appendChild(imgEl)

    const textDivEl = document.createElement("div")

    const h4El = document.createElement("h4")
    h4El.innerHTML = dekk.merke


    const bulletPointsEl = document.createElement("ul")

    const typeLiEl = document.createElement("li")
    typeLiEl.innerText = dekk.type
    bulletPointsEl.appendChild(typeLiEl)

    const diameterLiEl = document.createElement("li")
    diameterLiEl.innerText = `${dekk.diameter} diameter`
    bulletPointsEl.appendChild(diameterLiEl)


    textDivEl.appendChild(h4El)
    textDivEl.appendChild(bulletPointsEl)
    dekkEl.appendChild(textDivEl)

    const addToCartEl = document.createElement("button")
    addToCartEl.innerText = "Add to cart"

    dekkEl.appendChild(addToCartEl)


    dekkContainerEl.appendChild(dekkEl)
    
})



const felger = [

]










const kvitteringEl = document.querySelector("#kvittering")


