let rs = require ("readline-sync")                     

let mes = parseInt (rs.question ("Diga o mes que nasceu\n"))
let dia = parseInt (rs.question ("Diga o dia que nasceu\n"))

switch (mes) {
    case 1:
        dia >= 21 ? console.log ("Aquario") : console.log ("Capricornio")
    break;

    case 2:
        dia >= 19 ? console.log ("Peixes") : console.log ("Aquario")
    break;

    case 3:
        dia >= 21 ? console.log ("Março") : console.log ("Peixes")
    break;

    case 4:
        dia >= 21 ? console.log ("Touro") : console.log ("Aries")
    break;

    case 5:
        dia >= 21 ? console.log ("Gêmeos") : console.log ("Touro")
    break;

    case 6:
        dia >= 21 ? console.log ("Câncer") : console.log ("Gêmeos")
    break;
    
    case 7:
        dia >= 23 ? console.log ("Leão") : console.log ("Câncer")
    break;

    case 8:
        dia >= 23 ? console.log ("Virgem") : console.log ("Leão")
    break;

    case 9:
        dia >= 23 ? console.log ("Libra") : console.log ("Virgem")
    break;

    case 10:
        dia >= 23 ? console.log ("Escorpião") : console.log ("Libra")
    break;

    case 11:
        dia >= 22 ? console.log ("Sagitário") : console.log ("Escorpião")
    break;

    case 12:
        dia >= 22 ? console.log ("Capricórnio") : console.log ("Sagitário")
    break;
}