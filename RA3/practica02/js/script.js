//Selecciona els elements HTML necessaris
const nouText = document.getElementById('textElement');
const afegir = document.getElementById('afegirElement');
const llista = document.getElementById('llistaElements');

// Assignar l'esdeveniment al botó "Afegir Element"
afegir.addEventListener('click', addElement);

// Assignar funcionalitats als <li> existents
const liElements = llista.querySelectorAll('li');
liElements.forEach(li => attachListeners(li));

//Afegir funcionalitat al botó "Afegir Element"
function addElement() {
    const text = nouText.value.trim();
    if (text === '') {
        alert("Escriu un text per afegir un element");
        return;
    }

//Crear un nou element <li> amb un text dinàmic
    const li = document.createElement('li');

    // Crear el <span> amb el text
    const span = document.createElement('span');
    span.className = 'editable';
    span.textContent = text;

    // Afegir botons "Editar" i "Eliminar"
    const editar = document.createElement('button');
    editar.className = 'editar';
    editar.textContent = 'Editar';

    const eliminar = document.createElement('button');
    eliminar.className = 'eliminar';
    eliminar.textContent = 'Eliminar';

    // Afegir els elements al <li>
    li.appendChild(span);
    li.appendChild(editar);
    li.appendChild(eliminar);

    // Assignar funcionalitats al nou <li>
    attachListeners(li);

    // Afegir el <li> a la llista
    llista.appendChild(li);

    // Netejar el camp d'entrada
    nouText.value = '';
}

// Funció per generar un color aleatori
function colorRandom() {
    const num = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += num[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Funció per assignar els esdeveniments a un <li>
function attachListeners(ElementLlista) {
    const span = ElementLlista.querySelector('.editable');
    const editar = ElementLlista.querySelector('.editar');
    const eliminar = ElementLlista.querySelector('.eliminar');

    // 5. Fer que el text sigui editable en fer clic a "Editar"
    editar.addEventListener('click', function() {
        if (!span.isContentEditable) {
            span.contentEditable = true;
            span.focus();
        } else {
            alert("No pots tornar a editar el text.");
        }
    });

    // Canviar el color del text aleatòriament en fer-hi clic
    span.addEventListener('click', function() {
        span.style.color = colorRandom();
    });

    // Implementar funcionalitat per eliminar un element
    eliminar.addEventListener('click', function() {
        llista.removeChild(ElementLlista);
    });
}