// secrea una clase display. la clase es un elemento administrativo muy potente
class Display {
    // creamos un constructor. que es una funcion que permite iniciar un objeto de una clase
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();//se crea una nueva claculadora
        this.tipoOperacion = undefined;
        this.valorActual = '';//se crea para guardar el valor
        this.valorAnterior = '';
        this.signos = {
            sumar : '+',
            dividir: '/',
            multiplicar: '*',
            restar: '-'
        }
    }
    // se crean diferente metodos
    borrar() {
        // se le dice que valorActual es un string y .slice retorna el arrego desde el numero despues
        this.valorActual = this.valorActual.toString().slice(0, -1);
        // imprime los valores despues de restarle el numero
        this.imprimirValores();
    }

    borrarTodo() {
        // se devuelve a valores iniciales
        this.valorActual= '';
        this.valorAnterior= '';
        this.tipoOperacion= undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        // si tipo de operacion es distinto a igual entonces calcular
        this.tipoOperacion !== 'igual' && this.calcular();
        // actualizamos el tipo de operacion
        this.tipoOperacion = tipo;
        // verificamos que hay un valor actual si no dejamos el valor anterior
        this.valorAnterior = this.valorActual || this.valorAnterior;
        // se deja el valor actual vacio
        this.valorActual = '';
        // imprimimos los valores
        this.imprimirValores();
        // console.log(this.tipoOperacion);
        // console.log(this.calcular);

    }

    agregarNumero(numero) { 
        //funcion para agregar un cada vez que se le de un click
        // se crea una condicion donde se pregunta si hay . y si lo hay no inclir otro
        if(numero === '.' && this.valorActual.includes('.')) return 
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    // se crea un nuevo metodo
    imprimirValores() {
        // se le agrega el texto al valor actual
        this.displayValorActual.textContent = this.valorActual;
        // se le agrega al valor anterior y el tipo de operacion
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        // toma los valores del display y lo pasa a la calculadora
        // cambia de string a numeros
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual) || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}