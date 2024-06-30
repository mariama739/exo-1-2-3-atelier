let nombre = parseInt(prompt("saisir un nombre "));


// if (nombre === null) {
//     alert("Vous n'avez pas saisi de nombre.");
// } else {
//     nombre = parseFloat(nombre);  

//     if (isNaN(nombre)) {
//         alert("Vous n'avez pas saisi un nombre valide.");
//     } else if (nombre > 20) {
//         alert("Le nombre est grand.");
//     } else if (nombre < 20) {
//         alert("Le nombre est petit.");
//     } else {
//         alert("Le nombre est bon !");
//     }
// }

if (nombre > 20) {
    alert("Le nombre est trop grand");   
} 
 else if (nombre < 20 ) {
    alert("Le nombre est trop petit");
}
else if (nombre == 20 ) {
    alert("le nombre est bon");   
} 
 else {
    alert("vous n'avez pas saisie de nombre");
    }
