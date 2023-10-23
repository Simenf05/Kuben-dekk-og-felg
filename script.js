
/*

navn, tlf, bilregistreringsnummer

diameter, type, 

montering av dekk

*/

const dekkArr = [
    {
        diameter: 15,
        type: "vinterdekk",
        merke: "MICHELIN",
        bilde: "michlin_vinterdekk.webp",
    },
    {
        diameter: 16,
        type: "sommerdekk",
        merke: "Continental"
    },
    {
        diameter: 16,
        type: "piggdekk",
        merke: "MICHELIN"
    }
]


const dekkContainerEl = document.querySelector("#dekkContainer")


dekkArr.forEach(dekk => {
    
    const dekkEl = document.createElement("div")

    



    dekkContainerEl.appendChild(dekkEl)

})



const felger = [

]










const kvitteringEl = document.querySelector("#kvittering")


