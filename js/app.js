
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero'); //se selecciona los elementos clase numero del documento
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual); //se crea una instancia con el diplay para agregar valor anterio o actual

botonesNumeros.forEach(boton => { // se recorre los numeros con un foreach
    boton.addEventListener('click', () =>
    // se le da un segundo parametro que cada vez se de un click agregue un numero 
    display.agregarNumero(boton.innerHTML 
        )); //se crea un evento click 
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});