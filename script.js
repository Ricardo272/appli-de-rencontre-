class abonnes {
    constructor(id, photo, pseudo, age, sexe, orientation, departement, description) {

        this.id = id
        this.photo = photo
        this.pseudo = pseudo
        this.age = age
        this.sexe = sexe
        this.orientation = orientation
        this.departement = departement
        this.description = description
    }
}



let jeanine = new abonnes("25", "jeanine.jpg", "Jeanine", "31", "Femme", "Homme", "Departement", "A propos de vous")
let aurelie = new abonnes("26", "aurelie.jpg", "Aurelie", "25", "Femme", "Homme", "Departement", "A propos de vous")
let magalie = new abonnes("27", "magalie.jpg", "Magalie", "36", "Femme", "Homme", "Deparement", "A propos de vous")
let violette = new abonnes("28", "violette.jpg", "Violette", "29", "Femme", "Homme", "Departement", "A propos de vous")
let arlette = new abonnes("29", "arlette.jpg", "Arlette", "31", "Femme", "Homme", "Departement", "A propos")
let mariane = new abonnes("30", "mariane.jpg", "Mariane", "20", "Femme", "Homme", "Departement", "A propos")
let arnaud = new abonnes("31", "arnaud.jpg", "Arnaud", "25", "Homme", "Femme", "Departement", "A propos de vous")
let marc = new abonnes("32", "marc.jpg", "Marc", "30", "Homme", "Femme", "Departement", "A propos de vous")
let armand = new abonnes("33", "armand.jpg", "Armand", "30", "Homme", "Femme", "Departement", "A propos de vous")
let richard = new abonnes("34", "richard.jpg", "Richard", "40", "Homme", "Femme", "Departement", "A propos de vous")
let bertrand = new abonnes("35", "bertrand.jpg", "Bertrand", "45", "Homme", "Femme", "Departement", "A propos de vous")
let bebeth = new abonnes("36", "bobby.jpg", "Bebeth", "42", "Femme", "Femme", "Departement", "A propos de vous")
let michel = new abonnes("37", "michel.jpg", "Michel05", "31", "Homme", "Femme", "76", "A la recherche du grand amour",)
let paul = new abonnes("38", "paul.jpg", "paul", "PauloRAFF", "24", "Homme", "Femme", "76", " Qui pour Netflix & Chill ? ")
let medhi = new abonnes("39", "medhi.jpg", "MedhiA14H", "21", "Homme", "Femme", "38", "salut ça va ? ")
let fabien = new abonnes("40", "fabien.jpg", "MMFabien", "27", "Homme", "Femme", "76", "J'aime la bouffe ")
let zhangchi = new abonnes("41", "zhangchi.jpg", "Zhangchi", "19", "Homme", "Femme", "38", "J'esper taim le foot")
let sami = new abonnes("42", "sami.jpg", "sami", "21", "Homme", "Femme", "38", "salut ça va ? ")
let marie = new abonnes("43", "marie.jpg", "Marie76", "31", "Femme", "Homme", "76", "On verra bien")
let lisa = new abonnes("44", "lisa.jpg", "lisa18", "18", "Femme", "Homme", "76", "On verra bien")
let claire = new abonnes("45", "claire.jpg", "claire", "52", "Femme", "Femme", "76", "Boire un verre")
let fati = new abonnes("46", "fati.jpg", "fati", "18", "Femme", "Homme", "28", "On verra bien")
let fanta = new abonnes("47", "fanta.jpg", "FantaCitron", "24", "Femme", "Homme", "76", "On verra bien")
let assia = new abonnes("48", "assia.jpg", "Assiass", "27", "Femme", "Homme", "76", "On verra bien")

const recherche = [jeanine, aurelie, magalie, violette, arlette, mariane, arnaud, marc, armand, richard, bertrand, bebeth, michel, paul, medhi, fabien, zhangchi, sami, marie, lisa, claire, fati, fanta, assia]

for (let i = 0; i <= 24; i++) {
    galerieDesAbonnes.innerHTML += `
<div id="affiche">

    <img src="css/img/${recherche[i].photo}">

    <div id="info">
        <p class="pseudo">
            Pseudo : ${recherche[i].pseudo}
        </p>
        
        <p class="age">
                        Age : ${recherche[i].age}
                    </p>

                    <p class="sexe">
                        Sexe : ${recherche[i].sexe}
                    </p>

                    <p class="orientation">
                        Orientation :  ${recherche[i].orientation}

                    <p class="departement">
                        Département :  ${recherche[i].departement}
                    </p>

                    <p class="description">
                        Déscription : ${recherche[i].description}
                    </p>
            <button id="btnInfo" onclick="redirection(${i})" >En savoir plus > </button>
    </div>
</div>
`
}

function redirection (index){
    document.location.href = `profil.html?index=${index}`;
    
}



