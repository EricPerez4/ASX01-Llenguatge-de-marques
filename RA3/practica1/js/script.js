//Canviar text d'h1 i el paragraf utilitzant clases i id's.
document.querySelector('#titol').textContent = "Hector patrón";
document.querySelector('.paragraf').innerHTML = "<b>Tres tristes tigres tragaban trigo en un trigal.</b>";

//Canviar els estils de h1, tant la mida de la lletra com el color.
document.querySelector('h1').style.color = "rgb(98, 208, 252)";
document.querySelector('h1').style.fontSize = '53px';

//Fer que el boto "canviarText" canvi el text d'h1 i el seu color.
document.querySelector('#canviarText').addEventListener('click', function () {
    document.querySelector('h1').textContent = "By Eric Perez 🫡";
    document.querySelector('h1').style.color = "#FF0000";
});

//Quan fem doble click al botó del text torni al text original.
document.querySelector('#canviarText').addEventListener('dblclick', function () {
    document.querySelector('h1').textContent = "Hector patrón";
    document.querySelector('h1').style.color = "rgb(98, 208, 252)";
});

//Afegir un element a la llista
document.querySelector('#afegirElement').addEventListener(`click`, function () {
    const nouElement = document.createElement('li');
    nouElement.textContent = "Nou element afegit!";
    document.querySelector('#llista').appendChild(nouElement);
});

//Eliminar un element de la llista.
document.querySelector('#eliminarElement').addEventListener('click', function () {
    const llista = document.querySelector("#llista");
    llista.removeChild(llista.lastElementChild);  
});

//Cambiar el color del botó del text quan pasem el ratolí per sobre.
const text = document.querySelector('#canviarText')

text.addEventListener('mouseover', function () {
    text.style.backgroundColor = 'white';
    text.style.color = 'rgb(158, 148, 245)';
});

//Cambiar el color del botó del text quan treiem el ratolí de sobre.
text.addEventListener('mouseout', function () {
    text.style.backgroundColor = 'rgb(158, 148, 245)';
    text.style.color = 'white';
});

//Cambiar el color del botó d'afegir un element a la llista quan pasem el ratolí per sobre.
const afegir = document.querySelector('#afegirElement')

afegir.addEventListener('mouseover', function () {
    afegir.style.backgroundColor = 'white';
    afegir.style.color = 'rgb(82, 204, 78)';
});

//Cambiar el color del botó d'afegir un element a la llista quan treiem el ratolí de sobre.
afegir.addEventListener('mouseout', function () {
    afegir.style.backgroundColor = 'rgb(82, 204, 78)';
    afegir.style.color = 'white';
});
//Cambiar el color del botó de treure un element de la llista quan pasem el ratolí per sobre.
const eliminar = document.querySelector('#eliminarElement')

eliminar.addEventListener('mouseover', function () {
    eliminar.style.backgroundColor = 'white';
    eliminar.style.color = 'rgb(240, 105, 105)';
});

//Cambiar el color del botó de treure un element de la llista quan treiem el ratolí de sobre.
eliminar.addEventListener('mouseout', function () {
    eliminar.style.backgroundColor = 'rgb(240, 105, 105)';
    eliminar.style.color = 'white';
});