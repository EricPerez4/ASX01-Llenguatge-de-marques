//console.log("Hola, món! 🎉");

//alert("Benvingut a la teva primera pràctica de JS");

//const nom = "Jordi";
//const edat = 25;
//const ciutat = "Barcelona";

//console.log(`Hola, sóc ${nom}, tinc ${edat} anys i visc a ${ciutat}`);

//console.log('Hola me llamo Jordi...');

//const num1 = 15;
//const num2 = 7;

//console.log(`La suma de ${num1} i ${num2} és: ${num1 + num2}.`);
//console.log(`La resta de ${num1} i ${num2} és: ${num1 - num2}.`);
//console.log(`La multiplicació de ${num1} i ${num2} és: ${num1 * num2}.`);
//console.log(`La divisió de ${num1} i ${num2} és: ${num1 / num2}.`);
//console.log(`El residu de ${num1} i ${num2} és: ${num1 % num2}.`);

//const user = prompt("Quin és el teu nom? ");
//console.log(`El nom d'usuari es: ${user}`);
//alert(`El nom d'usuari es: ${user}`);

//edat = prompt("Quina edat tens? ");

//edat = parseInt(edat);

//if (edat >= 18) {
//  alert("Ets major d'edat");

//} else {
//    alert("Ets menor d'edat.")
//}


// BUCLES

//For

//for(i=1; i < 11; i++){
//    console.log(i);
//}



//-----------------------------
//const a = 15
//const b = 5



//function suma() {
//    return a +b
//}

//console.log(suma());


//function suma2() {
//    return a +b
//}

//console.log(suma(15,5));


let number = prompt("Dime un numero: ");

function isEvenOrOdd() {
    if (number % 2 === 0) {
        alert(`El numero ${number} és parell.`);
    } else {
        alert(`El numero ${number} és senar.`);
    }   
}

isEvenOrOdd();

number+=1; 

alert(`Hola${number}`);

//-----------------------------------------
//Para cuando le demos al boton salga el mensaje "Hello Trinidad"
document.querySelector('.mostrarMissatge').addEventListener('click', function() {
    alert("Hello Trinidad.")
});

//Poner el color del texto en rojo
//document.querySelector('h1').style.color = 'red';

//Cambiar el tamaño de la letra.
document.querySelector('h1').style.fontSize = '40px';

//Canviar el texto que hay en h1
document.querySelector('h1').textContent = 'Hola Trinidad';

//Afegir un paragraf després de h1
document.querySelector('h1').insertAdjacentHTML('afterend', 'Trinidad porta barret');

    //Otra opcion
const paragraf = document.createElement('p');
paragraf.textContent = 'You are the best';
document.body.appendChild(paragraf);

//Eliminar un element del DOM
document.body.removeChild(paragraf);

//Aplica un estil del css
document.querySelector('h1').classList.add('colorBlue');

